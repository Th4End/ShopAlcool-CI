import { useEffect, useState, useContext } from "react";
import { Container, Grid, Box, Typography, Input, Select, Option } from "@mui/joy";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../components/CartContext";
import { getProducts } from "../api/api.jsx";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response)) 
      .catch(error => console.error('Error fetching products:', error));
  }, []);  

  const filteredProducts = products
    .filter(product => 
      (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <Box sx={{ mt: { xs: 8, sm: 10 } }}>
      <Box sx={{ background: 'linear-gradient(45deg,rgb(121, 136, 255) 30%,rgb(35, 49, 154) 90%)', color: 'white', py: { xs: 8, sm: 12 }, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography level="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem' }, fontWeight: 700, textAlign: 'center', mb: 2 }}>
            Welcome to Shop Alcool
          </Typography>
          <Typography level="body-lg" sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Explore our curated collection of fine spirits from around the world
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              placeholder="Sort by"
              value={sortOption}
              onChange={(e, newValue) => setSortOption(newValue)}
            >
              <Option value="price-asc">Price: Low to High</Option>
              <Option value="price-desc">Price: High to Low</Option>
              <Option value="name-asc">Name: A to Z</Option>
              <Option value="name-desc">Name: Z to A</Option>
            </Select>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Typography level="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
          Featured Products
        </Typography>
        <Grid container spacing={4}> {/* Ensure enough spacing between cards */}
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;