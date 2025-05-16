from flask import Flask, jsonify, request,session
from flask_cors import CORS,cross_origin
import pyodbc
from flask_bcrypt import Bcrypt
from flask_session import Session
from datetime import datetime




app = Flask(__name__)

CORS(app, supports_credentials=True,origins=["http://localhost:5173"])
bcrypt = Bcrypt(app)

app.config["SECRET_KEY"] = "2029240f6d1128be89ddc32729463129"  
app.config["SESSION_TYPE"] = "filesystem"  
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_USE_SIGNER"] = True
Session(app)


# Database Connection
server = r'DESKTOP-FETP6EU\SQLEXPRESS'
database = 'GroceryStore'
driver = '{ODBC Driver 17 for SQL Server}'


def get_db_connection():
    conn = pyodbc.connect(
    "DRIVER={SQL Server};"
    "SERVER=DESKTOP-FETP6EU\\SQLEXPRESS;"  
    "DATABASE=GroceryStore;"  
    "Trusted_Connection=yes;"
)
    cursor = conn.cursor()
    print("Connected successfully!")

    conn.autocommit = True
    return conn


# ✅ Prefix Tree (Trie) for Product Search
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word.lower():
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search_prefix(self, prefix):
        node = self.root
        for char in prefix.lower():
            if char not in node.children:
                return []
            node = node.children[char]
        return self.collect_words(node, prefix)

    def collect_words(self, node, prefix):
        result = []
        if node.is_end_of_word:
            result.append(prefix)

        for char, child_node in node.children.items():
            result.extend(self.collect_words(child_node, prefix + char))

        return result

product_trie = Trie()

@app.route('/load-products', methods=['GET'])
def load_products():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM Products")

        products = [row[0] for row in cursor.fetchall()]
        
        for product in products:
            product_trie.insert(product)
        
        conn.close()
        return jsonify({"message": "Products loaded into Trie!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/search-products', methods=['GET'])
def search_products():
    query = request.args.get("query", "").strip()

    if not query:
        return jsonify({"error": "Search query is required"}), 400

    matched_products = product_trie.search_prefix(query)
    return jsonify({"results": matched_products})

# ✅ Queue-Based Cart System
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)  # ✅ Add item to queue

    def dequeue(self):
        return self.items.pop(0) if not self.is_empty() else None  # ✅ Process first item safely

    def peek(self):
        return self.items[0] if not self.is_empty() else None  # ✅ Check before peeking

    def is_empty(self):
        return len(self.items) == 0  # ✅ Ensure safe empty check

cart_queue = Queue()

@app.route('/add-to-cart', methods=['POST'])
def add_to_cart():
    data = request.json
    item = data.get("item")

    if not isinstance(item, dict):  # ✅ Ensure item is a valid dictionary
        return jsonify({"error": "Invalid item format"}), 400

    cart_queue.enqueue(item)
    return jsonify({"message": f"{item['name']} added to cart successfully!"})  # ✅ Use item name

@app.route('/checkout', methods=['POST'])
def checkout():
    if cart_queue.is_empty():
        return jsonify({"message": "Cart is empty, nothing to checkout!"})

    processed_items = []
    while not cart_queue.is_empty():
        processed_items.append(cart_queue.dequeue())

    return jsonify({"message": "Checkout completed!", "orders": processed_items})  # ✅ Improved message formatting

# ✅ API Home Route
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Grocery Store API!"})

#Signup API
@app.route('/signup', methods=['POST','OPTIONS'])
@cross_origin(origin="http://localhost:3000", supports_credentials=True)
def signup():
    print("✅ Received request to /signup")
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS Preflight OK"}), 200
    try:
        data = request.json
        fullname = data.get("fullname")
        email = data.get("email")
        password = data.get("password")  
        role = data.get("role", "user")  

        if not fullname or not email or not password:
            return jsonify({"error": "All fields are required"}), 400

        conn = get_db_connection()
        if not conn:
            return jsonify({"error": "Database connection failed"}), 500
        cursor = conn.cursor()

        cursor.execute("SELECT COUNT(*) FROM Users WHERE Email = ?", (email,))
        if cursor.fetchone()[0] > 0:
            return jsonify({"error": "Email already exists"}), 400

        cursor.execute("INSERT INTO Users (FullName, Email, PasswordHash, Role) VALUES (?, ?, ?, ?)",
                       (fullname, email, password, role))
        conn.commit()

        session["user_id"] = cursor.execute("SELECT UserId FROM Users WHERE Email = ?", (email,)).fetchone()[0]
        session["email"] = email
        session["role"] = role

        conn.close()
        return jsonify({"message": "User registered successfully", "role": role}), 201
    except Exception as e:
        print("Signup Error:", str(e))
        return jsonify({"error": str(e)}), 500


@app.route('/login', methods=['POST','OPTIONS'])
@cross_origin(origin="http://localhost:3000", supports_credentials=True)
def login():
    print("✅ Received /login request")

    if request.method == "OPTIONS":
        return jsonify({"message": "CORS Preflight OK"}), 200

    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT UserId, FullName, Email, PasswordHash, Role FROM Users WHERE Email = ?", (email,))
        user = cursor.fetchone()
        conn.close()

        if user and user[3] == password:  
            session["user_id"] = user[0]
            session["email"] = user[2]
            session["role"] = user[4]
            session.modified = True

            print(f"🔹 Session Data After Login: {session}")  # Debugging Output

            return jsonify({"message": "Login successful", "role": user[4]}), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401

    except Exception as e:
        print("❌ Login Error:", str(e))
        return jsonify({"error": str(e)}), 500




@app.route('/products', methods=['GET'])
def get_products():
    category = request.args.get("category")  # Get category from query parameter

    conn = get_db_connection()
    cursor = conn.cursor()

    if category:
        cursor.execute("SELECT ProductId, name, unit, price, category, imageURL FROM Products WHERE category = ?", (category,))
    else:
        cursor.execute("SELECT ProductId, name, unit, price, category, imageURL FROM Products")

    products = [
        {"ProductId": row[0], "name": row[1], "unit": row[2], "price": row[3], "category": row[4], "imageURL": row[5]}
        for row in cursor.fetchall()
    ]
    return jsonify(products)


@app.route('/add-product', methods=['POST'])
def add_product():
    try:
        data = request.json
        name = data.get("name")
        unit = data.get("unit", 1)  
        price = data.get("price", 50.0)  
        category = data.get("category")  
        imageURL = data.get("imageURL")  

        # Ensure all required fields are present
        if not name or not category or not imageURL:
            return jsonify({"error": "Product name, category, and image are required"}), 400
        
        if category == "Fruits":
            category = "Fresh & Produce"
            

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("INSERT INTO Products (name, unit, price, category, imageURL) VALUES (?, ?, ?, ?, ?)", 
                       (name, unit, price, category, imageURL))
        conn.commit()

        return jsonify({"message": "Product added successfully"})
    except Exception as e:
        print("❌ Error adding product:", str(e))
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()


@app.route('/edit-product/<int:ProductId>', methods=['PUT'])
def edit_product(ProductId):
    try:
        data = request.json
        name = data.get("name")
        unit = data.get("unit")
        price = data.get("price")

        if not name or unit is None or price is None:
            return jsonify({"error": "All fields (name, unit, price) are required"}), 400

        conn = get_db_connection()
        if not conn:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()
        cursor.execute("UPDATE Products SET name = ?, unit = ?, price = ? WHERE ProductId = ?", (name, unit, price, ProductId))
        conn.commit()

        if cursor.rowcount == 0:
            return jsonify({"error": "Product not found"}), 404

        return jsonify({"message": "Product updated successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()  

# ✅ API Route to Delete a Product
@app.route('/delete-product/<int:ProductId>', methods=['DELETE'])
def delete_product(ProductId):
    try:
        conn = get_db_connection()
        if not conn:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()
        cursor.execute("DELETE FROM Products WHERE ProductId = ?", (ProductId,))
        conn.commit()

        if cursor.rowcount == 0:  
            return jsonify({"error": "Product not found"}), 404

        return jsonify({"message": "Product deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()  

# @app.route('/place-order', methods=['POST'])
# def place_order():
#     try:
#         data = request.json
#         customer_name = data.get("name")
#         email = data.get("email")
#         address = data.get("address")
#         cart_items = data.get("cartItems")
#         total = sum(float(item["price"]) * int(item["quantity"]) for item in cart_items)
#         order_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  # ✅ Fix: Send current date

#         if not customer_name or not email or not address or not cart_items:
#             return jsonify({"error": "All fields and cart items are required"}), 400

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         # ✅ Ensure OrderDate is inserted correctly
#         cursor.execute(
#             "INSERT INTO Orders (CustomerName, Email, Address, Total, OrderDate) OUTPUT INSERTED.OrderId VALUES (?, ?, ?, ?, ?)",
#             (customer_name, email, address, total, order_date)
#         )
#         order_id = cursor.fetchone()[0]  # Get last inserted OrderId

        
#         for item in cart_items:
#             cursor.execute(
#         "INSERT INTO OrderDetails (OrderId, ProductId, Quantity, TotalPrice) VALUES (?, ?, ?, ?)",
#         (order_id, int(item["ProductId"]), int(item["quantity"]), round(float(item["price"]) * int(item["quantity"]), 2))
#     )

#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Order placed successfully!", "orderId": order_id}), 201
#     except Exception as e:
#         print("❌ Error placing order:", str(e))
#         return jsonify({"error": str(e)}), 500

@app.route('/place-order', methods=['POST'])
def place_order():
    try:
        data = request.json
        customer_name = data.get("name")
        email = data.get("email")
        address = data.get("address")
        cart_items = data.get("cartItems")

        if not customer_name or not email or not address or not cart_items:
            return jsonify({"error": "All fields and cart items are required"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        # ✅ Ensure price is converted to float before adding
        total_price = sum(float(item["price"]) * int(item["quantity"]) for item in cart_items)

        cursor.execute(
            "INSERT INTO Orders (CustomerName, Email, Address, Total, OrderDate) OUTPUT INSERTED.OrderId VALUES (?, ?, ?, ?, ?)",
            (customer_name, email, address, total_price, datetime.now())
        )
        order_id = cursor.fetchone()[0]  

        for item in cart_items:
            cursor.execute(
                "INSERT INTO OrderDetails (OrderId, ProductId, Quantity, TotalPrice) VALUES (?, ?, ?, ?)",
                (order_id, int(item["ProductId"]), int(item["quantity"]), round(float(item["price"]) * int(item["quantity"]), 2))
            )

        conn.commit()
        conn.close()

        return jsonify({"message": "Order placed successfully!", "orderId": order_id}), 201
    except Exception as e:
        print("❌ Error placing order:", str(e))
        return jsonify({"error": str(e)}), 500



@app.route('/orders', methods=['GET'])
def get_orders():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT OrderId, CustomerName, Email, Address, Total, OrderDate FROM Orders")

        orders = [
            {"OrderId": row[0], "CustomerName": row[1], "Email": row[2], "Address": row[3], "Total": row[4], "OrderDate": row[5].strftime("%Y-%m-%d %H:%M:%S")}
            for row in cursor.fetchall()
        ]

        conn.close()
        return jsonify(orders)
    except Exception as e:
        print("❌ Error fetching orders:", str(e))
        return jsonify({"error": str(e)}), 500
    



# ✅ Run Flask App
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)


# ✅ API Route to Get All Products
# @app.route('/products', methods=['GET'])
# def get_products():
#     conn = get_db_connection()
#     if not conn:
#         return jsonify({"error": "Database connection failed"}), 500

#     try:
#         cursor = conn.cursor()
#         cursor.execute("SELECT ProductId, name, unit, price FROM Products")
#         products = [
#             {"ProductId": row[0], "name": row[1], "unit": row[2], "price": row[3]}
#             for row in cursor.fetchall()
#         ]
#         return jsonify(products)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
#     finally:
#         conn.close()  


# @app.route('/add-product', methods=['POST'])
# def add_product():
#     try:
#         data = request.json
#         name = data.get("name")
#         unit = data.get("unit", 1)  
#         price = data.get("price", 50.0)  
#         category = data.get("category")  

#         # Replace "Fruits" with "Fresh Produce"
#         if category == "Fruits":
#             category = "Fresh Produce"

#         imageURL = data.get("imageURL")  

#         if not name or not category or not imageURL:
#             return jsonify({"error": "Product name, category, and image are required"}), 400

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         cursor.execute("INSERT INTO Products (name, unit, price, category, imageURL) VALUES (?, ?, ?, ?, ?)", 
#                        (name, unit, price, category, imageURL))
#         conn.commit()

#         return jsonify({"message": "Product added successfully"})
#     except Exception as e:
#         print("❌ Error adding product:", str(e))
#         return jsonify({"error": str(e)}), 500
#     finally:
#         conn.close()



# ✅ API Route to Add a Product
# @app.route('/add-product', methods=['POST'])
# def add_product():
#     try:
#         data = request.json
#         name = data.get("name")
#         unit = data.get("unit", 1)  
#         price = data.get("price", 50.0)  

#         if not name:
#             return jsonify({"error": "Product name is required"}), 400

#         conn = get_db_connection()
#         if not conn:
#             return jsonify({"error": "Database connection failed"}), 500

#         cursor = conn.cursor()
        
#         cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
#         conn.commit()
#         return jsonify({"message": "Product added successfully", "product": {"name": name, "unit": unit, "price": price}})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
#     finally:
#         conn.close()  

#Login API
# @app.route('/login', methods=['POST','OPTIONS'])
# @cross_origin(origin="http://localhost:3000", supports_credentials=True)
# def login():
#     print("✅ Received /login request")
#     if request.method == "OPTIONS":
#         return jsonify({"message": "CORS Preflight OK"}), 200
#     try:
#         data = request.json
#         email = data.get("email")
#         password = data.get("password")

#         conn = get_db_connection()
#         cursor = conn.cursor()
#         cursor.execute("SELECT UserId, FullName, Email, PasswordHash, Role FROM Users WHERE Email = ?", (email,))
#         user = cursor.fetchone()
#         conn.close()

#         if user and user[3] == password:  
#             session["user_id"] = user[0]
#             session["email"] = user[2]
#             session["role"] = user[4]
#             session.modified = True
#             print(f"🔹 Session Data: {session}")  

#             return jsonify({"message": "Login successful", "role": user[4]}), 200
#         else:
#             return jsonify({"error": "Invalid email or password"}), 401

#     except Exception as e:
#         print("❌ Login Error:", str(e))
#         return jsonify({"error": str(e)}), 500



#Logout API
# @app.route('/logout', methods=['POST'])
# def logout():
#     session.clear()
#     return jsonify({"message": "Logged out successfully"}), 200


# @app.route('/check-auth', methods=['GET'])
# def check_auth():
#     if "user_id" in session:
#         return jsonify({"logged_in": True, "user": {"email": session["email"], "role": session["role"]}})
#     return jsonify({"logged_in": False})
