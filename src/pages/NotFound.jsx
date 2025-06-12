import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ 
      textAlign: 'center', 
      mt: 8,
      fontFamily: 'Poppins, Roboto, sans-serif'
    }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 'bold',
        mb: 2,
        color: '#202124'
      }}>
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1" sx={{ 
        color: '#5f6368',
        mb: 4
      }}>
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </Typography>
      <Button 
        component={Link} 
        to="/" 
        variant="contained"
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
        Volver al inicio
      </Button>
    </Container>
  );
}