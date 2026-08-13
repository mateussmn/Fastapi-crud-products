import { useEffect, useState } from "react";

const initialForm = {
    name: "",
    description: "",
    price: "",
    category: "",
    email_supplier: "",
};

function ProductForm({ product, onSubmit, onCancel }) {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (product) {
            setForm({
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                email_supplier: product.email_supplier,
            });
        } else {
            setForm(initialForm);
        }
    }, [product]);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        onSubmit({
            ...form,
            price: Number(form.price),
        });
    }

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>{product ? "Editar produto" : "Novo produto"}</h2>

            <label>
                Nome
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Descrição
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Preço
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    min="0.01"
                    step="0.01"
                    required
                />
            </label>

            <label>
                Categoria
                <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                E-mail do fornecedor
                <input
                    type="email"
                    name="email_supplier"
                    value={form.email_supplier}
                    onChange={handleChange}
                    required
                />
            </label>

            <div className="form-actions">
                <button type="submit">
                    {product ? "Salvar alterações" : "Cadastrar produto"}
                </button>

                {product && (
                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
}

export default ProductForm;