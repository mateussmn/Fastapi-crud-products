# FastAPI CRUD Products

Aplicação full stack para gerenciamento de produtos, desenvolvida com **FastAPI**, **React**, **PostgreSQL** e **Docker**.

O projeto implementa uma API REST para realizar operações de **CRUD (Create, Read, Update e Delete)** sobre produtos, além de uma interface web em React para consumir a API.

## 🚀 Tecnologias

### Backend

* Python
* FastAPI
* Pydantic
* SQLAlchemy
* PostgreSQL
* Uvicorn

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS
* ESLint

### Infraestrutura

* Docker
* Docker Compose

## 📁 Estrutura do projeto

```text
Fastapi-crud-products/
│
├── backend/
│   ├── Dockerfile
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   └── ...
│
├── frontend/
│   └── react-app/
│       ├── public/
│       ├── src/
│       ├── Dockerfile
│       ├── package.json
│       ├── package-lock.json
│       └── vite.config.js
│
├── docker-compose.yml
├── pyproject.toml
├── poetry.lock
└── README.md
```

## ⚙️ Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Atualização de produtos
* Exclusão de produtos
* Validação dos dados enviados para a API
* Integração entre React e FastAPI
* Persistência dos dados utilizando PostgreSQL
* Execução dos serviços através do Docker Compose

## 📦 Modelo de produto

Cada produto possui informações como:

* Nome
* Descrição
* Preço
* Categoria
* E-mail do fornecedor

O backend utiliza Pydantic para validação dos dados recebidos pela API.

## 🐳 Executando com Docker

Certifique-se de ter o Docker instalado.

## 🔄 Arquitetura

A aplicação segue uma arquitetura simples de frontend, backend e banco de dados:

```text
┌───────────────┐
│     React     │
│    + Vite     │
└───────┬───────┘
        │ HTTP
        ▼
┌───────────────┐
│    FastAPI    │
│   REST API    │
└───────┬───────┘
        │ SQLAlchemy
        ▼
┌───────────────┐
│  PostgreSQL   │
└───────────────┘
```

O React realiza as requisições HTTP para o backend. O FastAPI processa as requisições, valida os dados e utiliza o banco PostgreSQL para persistência.

## 🧪 API

A documentação automática do FastAPI está disponível em:

```text
http://localhost:8000/docs
```

Através dela é possível visualizar e testar os endpoints da API diretamente pelo navegador.

## 📌 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em:

* Desenvolvimento de APIs REST
* FastAPI
* React
* Integração frontend/backend
* Bancos de dados relacionais
* SQLAlchemy
* Validação de dados com Pydantic
* Docker e Docker Compose
* Arquitetura de aplicações full stack

## 👨‍💻 Autor

**Mateus Silva!**

GitHub: https://github.com/mateussmn
