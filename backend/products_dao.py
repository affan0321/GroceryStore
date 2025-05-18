import pyodbc

server = r'DESKTOP-FETP6EU\SQLEXPRESS'
database = 'GroceryStore'
driver = '{SQL Server}'

try:
    conn = pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;')
    cursor = conn.cursor()
    print("✅ Connection successful!\n")

    insert_query = """
    INSERT INTO Products (ProductId, name, unit, price)
    VALUES (?, ?, ?, ?);
    """
    new_product = (3, "Sugar", 2, 50.00) 

    cursor.execute(insert_query, new_product)
    conn.commit()
    print("✅ New product inserted successfully!")


    
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

    
    columns = [column[0] for column in cursor.description]
    print(" | ".join(columns))
    print("-" * 50)

    for row in rows:
        print(" | ".join(str(value) for value in row))

except Exception as e:
    print(f"❌ Error: {e}")

finally:
    if 'conn' in locals():
        conn.close()
        print("\n🔒 Connection closed.")
