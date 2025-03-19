/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import { Container, Box, Typography, Input, Select, Option } from "@mui/joy";
import ProductCard from "../components/ProductCard";
import CartContext from "../components/CartContext";
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
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
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
      {/* Bannière */}
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

      {/* Barre de recherche et tri */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
          <Select
            placeholder="Sort by"
            value={sortOption}
            onChange={(e, newValue) => {
              if (newValue) {
                setSortOption(newValue);
              }
            }}
          >
            <Option value="price-asc">Price: Low to High</Option>
            <Option value="price-desc">Price: High to Low</Option>
            <Option value="name-asc">Name: A to Z</Option>
            <Option value="name-desc">Name: Z to A</Option>
          </Select>
        </Box>
      </Container>

      {/* Liste des produits */}
      <Container maxWidth="lg">
        <Typography level="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700 }}>
          Featured Products
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
          {filteredProducts
            .filter((product) => product && product.name)
            .map((product) => (
              <Box key={product.id} sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
                <ProductCard product={product} addToCart={addToCart} />
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
