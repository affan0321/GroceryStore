
import ProductRow from "./ProductRow";
import './ProductTable.css';

export default function ProductTable({ products, onDelete, onEdit }) {
    return (
        <table>
            <thead>
                <tr>
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
