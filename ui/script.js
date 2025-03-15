// const API_URL = "http://127.0.0.1:5001";  // Change this if needed

// // Fetch and display products
// function loadProducts() {
//     fetch(`${API_URL}/get-products`)
//         .then(response => response.json())
//         .then(data => {
//             const productList = document.getElementById("productList");
//             productList.innerHTML = ""; // Clear list before adding

//             data.forEach(product => {
//                 const li = document.createElement("li");
//                 li.textContent = product.ProductName;
//                 productList.appendChild(li);
//             });
//         })
//         .catch(error => console.error("Error fetching products:", error));
// }

// // Handle product form submission
// document.getElementById("productForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const productName = document.getElementById("productName").value;
    
//     fetch(`${API_URL}/add-product`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ ProductName: productName })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);  // Show success message
//         document.getElementById("productName").value = "";  // Clear input field
//         loadProducts();  // Refresh product list
//     })
//     .catch(error => console.error("Error adding product:", error));
// });

// // Load products when page loads
// window.onload = loadProducts;


// document.getElementById("addProductBtn").addEventListener("click", function () {
//     let productName = document.getElementById("productName").value;

//     if (!productName) {
//         alert("Please enter a product name.");
//         return;
//     }

//     let unit = 1;  // Default value
//     let price = 50.0;  // Default price

//     // Construct URL with query parameters
//     let url = `http://127.0.0.1:5001/add-product?name=${encodeURIComponent(productName)}&unit=${unit}&price=${price}`;

//     fetch(url, { method: "GET" })  // Send GET request
//         .then(response => response.json())  // Convert response to JSON
//         .then(data => {
//             console.log(data);
//             alert(data.message);  // Show response message
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             alert("An error occurred while adding the product.");
//         });
// });


// const API_URL = "http://127.0.0.1:5001";

// // Fetch and display products
// function loadProducts() {
//     fetch(`${API_URL}/products`)
//         .then(response => response.json())
//         .then(data => {
//             const productList = document.getElementById("productList");
//             productList.innerHTML = ""; // Clear list before adding

//             data.forEach(product => {
//                 const li = document.createElement("li");
//                 li.textContent = `${product.name} (Unit: ${product.unit}, Price: ${product.price})`;
//                 productList.appendChild(li);
//             });
//         })
//         .catch(error => console.error("Error fetching products:", error));
// }

// // Handle product form submission
// document.getElementById("productForm").addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     const productName = document.getElementById("productName").value;
//     const unit = 1;  // Default value
//     const price = 50.0;  // Default price

//     if (!productName) {
//         alert("Please enter a product name.");
//         return;
//     }

//     // Send product data via GET query parameters
//     fetch(`${API_URL}/add-product?name=${encodeURIComponent(productName)}&unit=${unit}&price=${price}`)
//         .then(response => response.json())
//         .then(data => {
//             alert(data.message);  // Show success message
//             document.getElementById("productName").value = "";  // Clear input field
//             loadProducts();  // Refresh product list
//         })
//         .catch(error => console.error("Error adding product:", error));
// });

// // Load products when page loads
// window.onload = loadProducts;



// const API_URL = "http://127.0.0.1:5001";

// // ✅ Fetch and display products
// function loadProducts() {
//     fetch(`${API_URL}/products`)
//         .then(response => response.json())
//         .then(data => {
//             console.log("Products received:", data); // Debugging
//             const productList = document.getElementById("productList");
//             productList.innerHTML = ""; // Clear list before adding new items

//             if (!Array.isArray(data)) {
//                 console.error("Invalid product data received:", data);
//                 return;
//             }

//             data.forEach(product => {
//                 if (product.name && product.unit !== undefined && product.price !== undefined) {
//                     const li = document.createElement("li");
//                     li.textContent = `${product.name} (Unit: ${product.unit}, Price: ${product.price})`;
//                     productList.appendChild(li);
//                 } else {
//                     console.error("Invalid product format:", product);
//                 }
//             });
//         })
//         .catch(error => console.error("Error fetching products:", error));
// }

// // ✅ Handle product form submission
// document.getElementById("productForm").addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     const productName = document.getElementById("productName").value;
//     const unit = 1;  // Default value
//     const price = 50.0;  // Default price

//     if (!productName) {
//         alert("Please enter a product name.");
//         return;
//     }

//     fetch(`${API_URL}/add-product`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ name: productName, unit: unit, price: price })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             alert("Error: " + data.error);
//         } else {
//             alert(data.message);
//             document.getElementById("productName").value = "";  // Clear input field
//             loadProducts();
//         }
//     })
//     .catch(error => console.error("Error adding product:", error));
// });

// // ✅ Load products when page loads
// window.onload = loadProducts;



const API_URL = "http://127.0.0.1:5001";

// ✅ Fetch and display products in table format
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
                        <td><button class = "btn1" onclick="deleteProduct(${product.ProductId})">Delete</button></td>

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
