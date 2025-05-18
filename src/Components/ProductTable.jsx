import "./ProductTable.css"; 
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onDelete, onEdit }) {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.ProductId} product={product} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </tbody>
        </table>
    );
}
