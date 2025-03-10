import { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/joy";
import { useParams } from 'react-router-dom';
import { getProductById } from "../api/api.jsx"; 

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)  
      .then(response => setProduct(response))  
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography level="h3">{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <Typography level="body1">{product.description}</Typography>
      <Button variant="solid">Add to Cart</Button>
    </Container>
  );
};

export default ProductPage;
