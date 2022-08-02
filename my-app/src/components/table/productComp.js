function productComp({ product }) {

    return (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
    
}

export default productComp;
