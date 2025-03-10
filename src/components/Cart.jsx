import React, { useContext } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Cart
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={product.name}
              secondary={`$${product.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Cart;