/* eslint-disable no-unused-vars */
import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useEffect, useState, useContext } from 'react';
import { getProducts } from '../api/api.jsx';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={4}> {/* Ensure enough spacing between cards */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
