import { Card, Box, Chip, IconButton, Typography, AspectRatio } from "@mui/joy";
import { motion } from "framer-motion";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ product, addToCart }) => {

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      variant="outlined"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'xl',
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'purple',
        }
      }}
    >
      <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
        <IconButton
          variant="soft"
          color="purple"
          size="sm"
          sx={{ 
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>

      <AspectRatio ratio="1" sx={{ mb: 1 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </AspectRatio>

      <Box sx={{ p: 1 }}>
        <Typography
          level="title-lg"
          sx={{
            fontWeight: 'bold',
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {product.name}
        </Typography>

        <Typography level="body-sm" sx={{ mb: 2, color: 'black' }}>
          {product.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap : 2 }}>
          <Typography
            level="title-lg"
            sx={{ fontWeight: 'bold', color: 'primary.2500' }}
          >
            ${product.price}
          </Typography>

          <IconButton
            variant="solid"
            color=""
            size="sm"
            sx={{ borderRadius: 'xl' }}
            onClick={() => addToCart(product)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;