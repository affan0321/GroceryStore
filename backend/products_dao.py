import pyodbc

# Database connection details
server = r'DESKTOP-FETP6EU\SQLEXPRESS'
database = 'GroceryStore'
driver = '{SQL Server}'

try:
    # Establish database connection
    conn = pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
    cursor = conn.cursor()
    print("✅ Connection successful!\n")

    insert_query = """
    INSERT INTO Products (ProductId, name, unit, price)
    VALUES (?, ?, ?, ?);
    """
    new_product = (3, "Sugar", 2, 50.00)  # (ProductId, ProductName, UnitId, Price)

    cursor.execute(insert_query, new_product)
    conn.commit()
    print("✅ New product inserted successfully!")


    # INNER JOIN query to get products with their unit names
    query = """
    SELECT 
        p.ProductId, 
        p.name AS ProductName, 
        p.unit AS UnitId, 
        u.UnitName, 
        p.price 
    FROM Products p
    INNER JOIN unit u ON p.unit = u.UnitId;
    """
    
    cursor.execute(query)
    rows = cursor.fetchall()

    # Print column headers
    columns = [column[0] for column in cursor.description]
    print(" | ".join(columns))
    print("-" * 50)

    # Print rows
    for row in rows:
        print(" | ".join(str(value) for value in row))

except Exception as e:
    print(f"❌ Error: {e}")

finally:
    if 'conn' in locals():
        conn.close()
        print("\n🔒 Connection closed.")
