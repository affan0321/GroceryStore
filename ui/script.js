const API_URL = "http://127.0.0.1:5001";

function loadProducts() {
    fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data => {
            console.log("Products received:", data); // Debugging
            const productTableBody = document.getElementById("productTableBody");
            productTableBody.innerHTML = ""; // Clear table before adding new items

            if (!Array.isArray(data)) {
                console.error("Invalid product data received:", data);
                return;
            }

            data.forEach(product => {
                if (product.name && product.unit !== undefined && product.price !== undefined) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.unit}</td>
                        <td>${product.price}</td>
                        <td>
                            <button class="btn1" onclick="deleteProduct(${product.ProductId})">Delete</button>
                            <button class="edit-btn" onclick="editProduct(${product.ProductId}, '${product.name}', ${product.unit}, ${product.price})">Edit</button>
                        </td>
                    `;
                    productTableBody.appendChild(row);
                } else {
                    console.error("Invalid product format:", product);
                }
            });
        })
        .catch(error => console.error("Error fetching products:", error));
}


// ✅ Handle product form submission
document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const productName = document.getElementById("productName").value;
    const unit = document.getElementById("productUnit").value;
    const price = document.getElementById("productPrice").value;

    if (!productName || !unit || !price) {
        alert("Please enter all product details.");
        return;
    }

    fetch(`${API_URL}/add-product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: productName, unit: unit, price: price })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message);
            document.getElementById("productForm").reset();  // Clear input fields
            loadProducts();
        }
    })
    .catch(error => console.error("Error adding product:", error));
});


function editProduct(productId, name, unit, price) {
    document.getElementById("productName").value = name;
    document.getElementById("productUnit").value = unit;
    document.getElementById("productPrice").value = price;

    // Change submit button to "Update"
    const submitButton = document.querySelector("#productForm button");
    submitButton.textContent = "Update Product";
    submitButton.onclick = function (event) {
        event.preventDefault();
        updateProduct(productId);
    };
}

function updateProduct(productId) {
    const productName = document.getElementById("productName").value;
    const unit = document.getElementById("productUnit").value;
    const price = document.getElementById("productPrice").value;

    if (!productName || !unit || !price) {
        alert("Please enter all product details.");
        return;
    }

    fetch(`${API_URL}/edit-product/${productId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: productName, unit: unit, price: price })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message);
            document.getElementById("productForm").reset();  // Clear input fields
            document.querySelector("#productForm button").textContent = "Add Product";
            document.querySelector("#productForm button").onclick = function (event) {
                event.preventDefault();
                addProduct();
            };
            loadProducts();
        }
    })
    .catch(error => console.error("Error updating product:", error));
}


// ✅ Delete a product
function deleteProduct(productId) {
    fetch(`${API_URL}/delete-product/${productId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert("Product deleted successfully.");
            loadProducts();  // Refresh product list
        }
    })
    .catch(error => console.error("Error deleting product:", error));
}

// ✅ Load products when page loads
window.onload = loadProducts;
