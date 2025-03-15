# from flask import Flask, jsonify, request
# import pyodbc

# app = Flask(__name__)

# # Database Connection
# server = r'DESKTOP-FETP6EU\SQLEXPRESS'
# database = 'GroceryStore'
# driver = '{ODBC Driver 17 for SQL Server}'

# def get_db_connection():
#     return pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')

# # API Home Route
# @app.route('/')
# def home():
#     return jsonify({"message": "Welcome to the Grocery Store API!"})

# # API Route to Get All Products
# @app.route('/products', methods=['GET'])
# def get_products():
#     try:
#         conn = get_db_connection()
#         cursor = conn.cursor()
#         cursor.execute("SELECT ProductId, name, unit, price FROM Products")
#         products = [
#             {"ProductId": row[0], "name": row[1], "unit": row[2], "price": row[3]}
#             for row in cursor.fetchall()
#         ]
#         conn.close()
#         return jsonify(products)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # API Route to Insert Multiple Products
# @app.route('/add-products', methods=['Get'])
# def add_products():
#     try:
#         products = [
#             ("Milk", 1, 50.0),
#             ("Bread", 1, 30.0),
#             ("Eggs", 12, 120.0),
#             ("Sugar", 1, 40.0),
#             ("Salt", 1, 20.0),
#             ("Butter", 1, 100.0),
#             ("Cheese", 1, 150.0),
#             ("Rice", 5, 250.0),
#             ("Wheat Flour", 5, 180.0),
#             ("Chicken", 1, 300.0),
#             ("Mutton", 1, 800.0),
#             ("Fish", 1, 500.0),
#             ("Cooking Oil", 1, 350.0),
#             ("Lentils", 2, 200.0),
#             ("Tea", 1, 150.0)
#         ]
        
#         conn = get_db_connection()
#         cursor = conn.cursor()
        
#         for product in products:
#             cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", product)
        
#         conn.commit()
#         conn.close()
        
#         return jsonify({"message": "15 products added successfully!"})
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # API Route to Add a Single Product
# @app.route('/add-products-new', methods=['POST'])
# def add_product():
#     try:
#         data = request.json  # Ensure JSON data is received
#         name = data.get("name")
#         unit = data.get("unit")
#         price = data.get("price")

#         if not all([name, unit, price]):
#             return jsonify({"error": "Missing required fields"}), 400

#         conn = get_db_connection()
#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Product added successfully", "data": data})
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # ✅ This should be at the END of the script
# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5001, debug=True)

# from flask import Flask, jsonify, request
# import pyodbc

# app = Flask(__name__)

# # Database Connection
# server = r'DESKTOP-FETP6EU\SQLEXPRESS'
# database = 'GroceryStore'
# driver = '{ODBC Driver 17 for SQL Server}'

# def get_db_connection():
#     try:
#         return pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
#     except Exception as e:
#         print(f"Database connection error: {e}")
#         return None

# # API Home Route
# @app.route('/')
# def home():
#     return jsonify({"message": "Welcome to the Grocery Store API!"})

# # API Route to Get All Products
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
#         conn.close()
#         return jsonify(products)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/add-products', methods=['GET'])
# def add_products():
#     try:
#         products = [
#             ("Milk", 2, 50.0),
#             ("Bread", 1, 30.0),
#             ("Eggs", 2, 120.0),
#             ("Sugar", 2, 40.0),
#             ("Salt", 2, 20.0),
#             ("Butter", 1, 100.0),
#             ("Cheese", 1, 150.0),
#             ("Rice", 2, 250.0),
#             ("Wheat Flour", 2, 180.0),
#             ("Chicken", 2, 300.0),
#             ("Mutton", 2, 800.0),
#             ("Fish", 2, 500.0),
#             ("Cooking Oil", 2, 350.0),
#             ("Lentils", 1, 200.0),
#             ("Tea", 2, 150.0)
#         ]

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         # Get the highest ProductId and increment it
#         cursor.execute("SELECT MAX(ProductId) FROM Products")
#         max_id = cursor.fetchone()[0]
#         next_id = max_id + 1 if max_id else 1  # Start from 1 if the table is empty

#         for product in products:
#             cursor.execute("INSERT INTO Products (ProductId, name, unit, price) VALUES (?, ?, ?, ?)",
#                            (next_id, product[0], product[1], product[2]))
#             next_id += 1  # Increment ID for the next product

#         conn.commit()
#         conn.close()

#         return jsonify({"message": "15 products added successfully!"})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500



# # API Route to Add a Single Product
# @app.route('/add-product', methods=['GET'])
# def add_product():
#     try:
#         data = request.json
#         name = data.get("name")
#         unit = data.get("unit")
#         price = data.get("price")

#         if not all([name, unit, price]):
#             return jsonify({"error": "Missing required fields"}), 400

#         conn = get_db_connection()
#         if not conn:
#             return jsonify({"error": "Database connection failed"}), 500

#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Product added successfully", "data": data})
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # ✅ Run Flask App
# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5001, debug=True)


# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import pyodbc

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Database Connection
# server = r'DESKTOP-FETP6EU\SQLEXPRESS'
# database = 'GroceryStore'
# driver = '{ODBC Driver 17 for SQL Server}'

# def get_db_connection():
#     try:
#         return pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
#     except Exception as e:
#         print(f"Database connection error: {e}")
#         return None

# # API Home Route
# @app.route('/')
# def home():
#     return jsonify({"message": "Welcome to the Grocery Store API!"})

# # API Route to Get All Products
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
#         conn.close()
#         return jsonify(products)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # API Route to Add Multiple Products
# @app.route('/add-products', methods=['GET'])
# def add_products():
#     try:
#         products = [
#             ("Milk", 2, 50.0),
#             ("Bread", 1, 30.0),
#             ("Eggs", 2, 120.0),
#             ("Sugar", 2, 40.0),
#             ("Salt", 2, 20.0),
#             ("Butter", 1, 100.0),
#             ("Cheese", 1, 150.0),
#             ("Rice", 2, 250.0),
#             ("Wheat Flour", 2, 180.0),
#             ("Chicken", 2, 300.0),
#             ("Mutton", 2, 800.0),
#             ("Fish", 2, 500.0),
#             ("Cooking Oil", 2, 350.0),
#             ("Lentils", 1, 200.0),
#             ("Tea", 2, 150.0)
#         ]

#         conn = get_db_connection()
#         cursor = conn.cursor()

#         # Get the highest ProductId and increment it
#         cursor.execute("SELECT MAX(ProductId) FROM Products")
#         max_id = cursor.fetchone()[0]
#         next_id = max_id + 1 if max_id else 1  # Start from 1 if the table is empty

#         for product in products:
#             cursor.execute("INSERT INTO Products (ProductId, name, unit, price) VALUES (?, ?, ?, ?)",
#                            (next_id, product[0], product[1], product[2]))
#             next_id += 1  # Increment ID for the next product

#         conn.commit()
#         conn.close()

#         return jsonify({"message": "15 products added successfully!"})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route('/add-product', methods=['GET', 'POST'])
# def add_product():
#     try:
#         if request.method == 'POST':
#             # Handle JSON data from a POST request
#             data = request.json
#             name = data.get("name")
#             unit = data.get("unit")
#             price = data.get("price")
#         else:
#             # Handle query parameters from a GET request
#             name = request.args.get("name")
#             unit = request.args.get("unit", type=int, default=1)
#             price = request.args.get("price", type=float, default=50.0)

#         if not name:
#             return jsonify({"error": "Product name is required"}), 400

#         conn = get_db_connection()
#         if not conn:
#             return jsonify({"error": "Database connection failed"}), 500

#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Product added successfully", "product": {"name": name, "unit": unit, "price": price}})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# # ✅ Run Flask App
# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5001, debug=True)


# API Route to Add a Single Product
# @app.route('/add-product', methods=['POST'])
# def add_product():
#     try:
#         data = request.json
#         name = data.get("name")
#         unit = data.get("unit")
#         price = data.get("price")

#         if not all([name, unit, price]):
#             return jsonify({"error": "Missing required fields"}), 400

#         conn = get_db_connection()
#         if not conn:
#             return jsonify({"error": "Database connection failed"}), 500

#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Product added successfully", "data": data})
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500    




# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import pyodbc

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Database Connection
# server = r'DESKTOP-FETP6EU\SQLEXPRESS'
# database = 'GroceryStore'
# driver = '{ODBC Driver 17 for SQL Server}'

# def get_db_connection():
#     """Establish a connection to the database."""
#     try:
#         return pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
#     except Exception as e:
#         print(f"Database connection error: {e}")
#         return None

# # ✅ API Home Route
# @app.route('/')
# def home():
#     return jsonify({"message": "Welcome to the Grocery Store API!"})

# # ✅ API Route to Get All Products
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
#         conn.close()
#         return jsonify(products)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # ✅ API Route to Add a Product
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
#         conn.close()

#         return jsonify({"message": "Product added successfully", "product": {"name": name, "unit": unit, "price": price}})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # ✅ Run Flask App
# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5001, debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database Connection
server = r'DESKTOP-FETP6EU\SQLEXPRESS'
database = 'GroceryStore'
driver = '{ODBC Driver 17 for SQL Server}'

def get_db_connection():
    """Establish a connection to the database."""
    try:
        return pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
    except Exception as e:
        print(f"Database connection error: {e}")
        return None

# ✅ API Home Route
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Grocery Store API!"})

# ✅ API Route to Get All Products
@app.route('/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        cursor.execute("SELECT ProductId, name, unit, price FROM Products")
        products = [
            {"ProductId": row[0], "name": row[1], "unit": row[2], "price": row[3]}
            for row in cursor.fetchall()
        ]
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()  # ✅ Ensure database connection is closed

# ✅ API Route to Add a Product
@app.route('/add-product', methods=['POST'])
def add_product():
    try:
        data = request.json
        name = data.get("name")
        unit = data.get("unit", 1)  # Default to 1 if not provided
        price = data.get("price", 50.0)  # Default to 50.0 if not provided

        if not name:
            return jsonify({"error": "Product name is required"}), 400

        conn = get_db_connection()
        if not conn:
            return jsonify({"error": "Database connection failed"}), 500

        cursor = conn.cursor()
        # ✅ Only insert name, unit, and price (ProductId auto-generates)
        cursor.execute("INSERT INTO Products (name, unit, price) VALUES (?, ?, ?)", (name, unit, price))
        conn.commit()
        return jsonify({"message": "Product added successfully", "product": {"name": name, "unit": unit, "price": price}})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()  # ✅ Close connection in case of success or failure

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

        if cursor.rowcount == 0:  # Check if the product was actually deleted
            return jsonify({"error": "Product not found"}), 404

        return jsonify({"message": "Product deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()  # ✅ Always close connection


# ✅ Run Flask App
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)
