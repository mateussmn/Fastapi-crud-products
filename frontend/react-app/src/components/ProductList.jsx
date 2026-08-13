import ProductItem from "./ProductItem";

function ProductList({ products, onEdit, onDelete }) {
    if (products.length === 0) {
        return (
            <div className="empty-message">
                <p>Nenhum produto cadastrado.</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ProductList;