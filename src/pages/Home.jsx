import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ fontFamily: 'Poppins, Roboto, sans-serif' }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        py: 2,
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Typography variant="h4" sx={{ color: '#1A73E8', fontWeight: 'bold' }}>
          EducaJat
        </Typography>
        <Box>
          <Button component={Link} to="/login" sx={{ 
            color: '#1A73E8', 
            mr: 2,
            '&:hover': { backgroundColor: 'rgba(26, 115, 232, 0.04)' }
          }}>
            Iniciar sesión
          </Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <Grid container spacing={4} sx={{ mt: 4, alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ 
            fontWeight: 'bold',
            mb: 3,
            color: '#202124'
          }}>
            Estudia, colabora y entrega a tiempo
          </Typography>
          <Typography variant="h5" sx={{ 
            color: '#5f6368', 
            mb: 4,
            lineHeight: 1.6
          }}>
            Todo desde un solo lugar: EducaJat.
          </Typography>
          <Button 
            component={Link} 
            to="/login" 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: '#1A73E8',
              '&:hover': { backgroundColor: '#1765D1' },
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Empieza Gratis
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ 
            backgroundColor: '#f5f7fa',
            borderRadius: '16px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e0e0e0'
          }}>
            <Typography color="text.secondary">*     .Imagen.     *</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}