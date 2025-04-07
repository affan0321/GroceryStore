
import './ProductRow.css';
export default function ProductRow({ product, onDelete, onEdit }) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.unit}</td>
            <td>${product.price}</td>
            <td>
                <button className="delete-btn" onClick={() => onDelete(product.ProductId)}>Delete</button>
                <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
            </td>
        </tr>
    );
}
