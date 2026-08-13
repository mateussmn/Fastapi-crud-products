function ProductItem({ product, onEdit, onDelete }) {
    return (
        <div className="product-card">
            <div>
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <p>
                    <strong>Categoria:</strong> {product.category}
                </p>

                <p>
                    <strong>Preço:</strong>{" "}
                    {Number(product.price).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>

                <p>
                    <strong>Fornecedor:</strong> {product.email_supplier}
                </p>
            </div>

            <div className="product-actions">
                <button onClick={() => onEdit(product)}>
                    Editar
                </button>

                <button onClick={() => onDelete(product.id)}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

export default ProductItem;