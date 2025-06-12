import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export default function VideocallFeatures() {
  const features = [
    "Salas privadas o grupales",
    "Integración con calendario académico",
    "Pantalla compartida en HD",
    "Pizarra colaborativa en tiempo real",
    "Grabación de sesiones",
    "Chat integrado durante las llamadas"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, fontFamily: 'Poppins, Roboto, sans-serif' }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ 
            fontWeight: 'bold',
            mb: 3,
            color: '#202124'
          }}>
            Videollamadas diseñadas para la educación
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#5f6368', 
            mb: 4,
            lineHeight: 1.6
          }}>
            Conecta con tus compañeros y profesores con nuestra herramienta integrada.
          </Typography>
          
          <List>
            {features.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <CheckCircle sx={{ color: '#1A73E8' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={feature} 
                  primaryTypographyProps={{ color: '#202124' }}
                />
              </ListItem>
            ))}
          </List>
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
            <Typography color="text.secondary">Demo videollamada</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}