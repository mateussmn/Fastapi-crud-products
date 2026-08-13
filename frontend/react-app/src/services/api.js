const API_URL = "http://localhost:8000";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products/`);

    if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
    }

    return response.json();
}

export async function createProduct(product) {
    const response = await fetch(`${API_URL}/products/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro ao criar produto");
    }

    return response.json();
}

export async function updateProduct(id, product) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro ao atualizar produto");
    }

    return response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro ao excluir produto");
    }

    return response.json();
}