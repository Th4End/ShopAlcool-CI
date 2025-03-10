import { Box, Container, Grid, Typography, Link } from "@mui/joy";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.surface',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography level="title-lg" sx={{ mb: 2 }}>
              Spirit Shop
            </Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
              Your premium destination for fine spirits and exceptional taste.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography level="title-sm" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" sx={{ color: 'text.primary' }}>Home</Link>
              <Link href="/product" sx={{ color: 'text.primary' }}>Products</Link>
              <Link href="/create-account" sx={{ color: 'text.primary' }}>Create Account</Link>
              <Link href="/login" sx={{ color: 'text.primary' }}>Login</Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography level="title-sm" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://facebook.com" target="_blank" rel="noopener" sx={{ color: 'text.primary' }}>
                <FacebookIcon />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: 'text.primary' }}>
                <InstagramIcon />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: 'text.primary' }}>
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;