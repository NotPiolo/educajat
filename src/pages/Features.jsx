import { Box, Typography, Grid, Container, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      title: "Videollamadas integradas",
      description: "Salas privadas o grupales con integración de calendario, pantalla compartida y pizarra colaborativa."
    },
    {
      title: "Plantillas listas para usar",
      description: "Docs, presentaciones y reportes preformateados que se guardan automáticamente en la nube."
    },
    {
      title: "Gestión académica",
      description: "Sube temas, tareas y materiales. Vista unificada de todo el contenido del curso con seguimiento de entregas."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, fontFamily: 'Poppins, Roboto, sans-serif' }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 'bold', 
        textAlign: 'center',
        mb: 2,
        color: '#202124'
      }}>
        Todo lo que necesitas para tu educación
      </Typography>
      
      <Typography variant="h6" sx={{ 
        textAlign: 'center', 
        color: '#5f6368',
        mb: 6,
        maxWidth: '700px',
        mx: 'auto'
      }}>
        EducaJat combina todas las herramientas esenciales en una sola plataforma intuitiva
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ 
              p: 3,
              height: '100%',
              borderRadius: '12px',
              boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)',
              '&:hover': {
                boxShadow: '0 1px 8px 0 rgba(60,64,67,.15)'
              }
            }}>
              <Box sx={{ 
                width: '48px',
                height: '48px',
                backgroundColor: '#e8f0fe',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2
              }}>
                <Typography sx={{ color: '#1A73E8', fontWeight: 'bold' }}>{index + 1}</Typography>
              </Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 'medium',
                mb: 2,
                color: '#202124'
              }}>
                {feature.title}
              </Typography>
              <Typography sx={{ color: '#5f6368' }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button 
          component={Link} 
          to="/login" 
          variant="contained" 
          size="large"
          sx={{ 
            backgroundColor: '#1A73E8',
            '&:hover': { backgroundColor: '#1765D1' },
            px: 6,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '1rem'
          }}
        >
          Comienza ahora
        </Button>
      </Box>
    </Container>
  );
}