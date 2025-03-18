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
        conn.close()  # ✅ Always close connection

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
