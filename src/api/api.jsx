import axios from "axios";

const API_URL = "http://10.60.112.191:3000"; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get("/alcool");
    return response.data; // Structure attendue : { id, type_alcohol_id, name, description, degree, capacity, image }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await api.post("/alcool", productData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/alcool/${productId}`);
    return response.data; 
  } catch (error) {
    console.error("Erreur lors de la récupération du produit", error);
    throw error;
  }
};
