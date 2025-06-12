import { Box, Typography, Container, Avatar, Grid } from '@mui/material';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de Ingeniería",
      content: "EducaJat ha simplificado mi vida universitaria. Ahora puedo organizar todos mis trabajos y colaborar con mis compañeros en un solo lugar.",
      avatar: "MG"
    },
    {
      name: "Carlos Mendoza",
      role: "Profesor Universitario",
      content: "La herramienta de videollamadas integrada con el calendario ha sido un cambio radical para mis clases virtuales. Mis estudiantes están más organizados.",
      avatar: "CM"
    },
    {
      name: "Ana Torres",
      role: "Estudiante de Diseño",
      content: "Las plantillas preformateadas me ahorran horas de trabajo. ¡Ahora entrego mis trabajos con un diseño profesional sin esfuerzo!",
      avatar: "AT"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8,
      fontFamily: 'Poppins, Roboto, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      my: 4
    }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 'bold', 
        textAlign: 'center',
        mb: 2,
        color: '#202124'
      }}>
        Lo que dicen nuestros usuarios
      </Typography>
      
      <Typography variant="h6" sx={{ 
        textAlign: 'center', 
        color: '#5f6368',
        mb: 6,
        maxWidth: '700px',
        mx: 'auto'
      }}>
        Miles de estudiantes y profesores ya están transformando su experiencia educativa
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ 
              backgroundColor: 'white',
              p: 4,
              borderRadius: '12px',
              height: '100%',
              boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ 
                  backgroundColor: '#e8f0fe', 
                  color: '#1A73E8',
                  mr: 2
                }}>
                  {testimonial.avatar}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 'medium' }}>{testimonial.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#5f6368' }}>{testimonial.role}</Typography>
                </Box>
              </Box>
              <Typography sx={{ color: '#202124', fontStyle: 'italic' }}>
                "{testimonial.content}"
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}