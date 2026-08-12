import streamlit as st
import requests

st.title("FastAPI CRUD Products")

# Example connection to backend
try:
    response = requests.get("http://backend:8000/docs")
    st.success("Backend is running!")
except:
    st.error("Backend connection failed")
