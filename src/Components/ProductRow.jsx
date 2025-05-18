import './ProductRow.css'
export default function ProductRow({ product, onDelete, onEdit }) {
    return (
        <tr>
            <td>
                <img 
                    src={product.imageURL} 
                    alt={product.name} 
                    style={{ width: "50px", height: "50px", borderRadius: "5px" }} 
                />
            </td>
            <td>{product.name}</td>
            <td>{product.unit}</td>
            <td>${product.price}</td>
            <td>
                <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(product.ProductId)}>Delete</button>
            </td>
        </tr>
    );
}
