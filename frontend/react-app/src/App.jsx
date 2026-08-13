import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "./services/api";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadProducts() {
        try {
            setLoading(true);
            setError("");

            const data = await getProducts();

            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    async function handleSubmit(product) {
        try {
            setError("");

            if (editingProduct) {
                await updateProduct(editingProduct.id, product);
            } else {
                await createProduct(product);
            }

            setEditingProduct(null);
            setShowForm(false);

            await loadProducts();
        } catch (error) {
            setError(error.message);
        }
    }

    function handleEdit(product) {
        setEditingProduct(product);
        setShowForm(true);
    }

    async function handleDelete(id) {
        const confirmed = window.confirm(
            "Tem certeza que deseja excluir este produto?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setError("");

            await deleteProduct(id);

            await loadProducts();
        } catch (error) {
            setError(error.message);
        }
    }

    function handleNewProduct() {
        setEditingProduct(null);
        setShowForm(true);
    }

    function handleCancel() {
        setEditingProduct(null);
        setShowForm(false);
    }

    return (
        <div className="app">
            <header className="header">
                <div>
                    <h1>Product Manager</h1>
                    <p>Gerenciamento de produtos</p>
                </div>

                {!showForm && (
                    <button onClick={handleNewProduct}>
                        + Novo produto
                    </button>
                )}
            </header>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {showForm ? (
                <ProductForm
                    product={editingProduct}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            ) : loading ? (
                <p className="loading">Carregando produtos...</p>
            ) : (
                <ProductList
                    products={products}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}

export default App;