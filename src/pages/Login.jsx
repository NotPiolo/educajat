import { Button, CircularProgress, Container, Box } from '@mui/material';
import { Google, Home as HomeIcon } from '@mui/icons-material';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error al iniciar sesión: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 2,
        textAlign: 'center'
      }}>
        {/* Botón de Login con Google */}
        <Button
          variant="contained"
          onClick={handleLogin}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : <Google />}
          sx={{
            backgroundColor: '#1A73E8',
            '&:hover': { backgroundColor: '#1765D1' },
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '300px'
          }}
        >
          {loading ? 'Cargando...' : 'Continuar con Google'}
        </Button>

        {/* Botón Volver al Inicio */}
        <Button
          onClick={handleGoHome}
          startIcon={<HomeIcon />}
          variant="outlined"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '300px',
            borderColor: '#1A73E8',
            color: '#1A73E8',
            '&:hover': {
              backgroundColor: '#e8f0fe',
              borderColor: '#1765D1'
            }
          }}
        >
          Volver al Inicio
        </Button>
      </Box>
    </Container>
  );
}