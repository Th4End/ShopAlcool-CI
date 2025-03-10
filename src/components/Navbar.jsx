import React, { useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton,
  Container,
  Badge
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)'
    }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'purple', // Change text color to purple
              textDecoration: 'none',
              letterSpacing: '-0.5px'
            }}
          >
            Spirit Shop
          </Typography>
          <Menu />
          <IconButton component={Link} to="/shop" sx={{ color: 'purple' }}> 
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/shop"
            sx={{
              ml: 2,
              color: 'purple',
              textDecoration: 'none'
            }}
          >
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;