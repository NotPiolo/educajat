import { Box, Typography, Container, Grid, Button } from '@mui/material';


export default function Templates() {
  const templateCategories = [
    {
      name: "Documentos académicos",
      count: 12,
      color: "#e8f0fe"
    },
    {
      name: "Presentaciones",
      count: 8,
      color: "#e6f4ea"
    },
    {
      name: "Reportes de laboratorio",
      count: 5,
      color: "#fce8e6"
    },
    {
      name: "Plantillas de tesis",
      count: 3,
      color: "#fef7e0"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, fontFamily: 'Poppins, Roboto, sans-serif' }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 'bold',
        mb: 2,
        color: '#202124'
      }}>
        Plantillas inteligentes
      </Typography>
      <Typography variant="h6" sx={{ 
        color: '#5f6368', 
        mb: 6,
        maxWidth: '700px'
      }}>
        Ahorra tiempo con nuestras plantillas preformateadas listas para usar
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {templateCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ 
              backgroundColor: category.color,
              p: 3,
              borderRadius: '12px',
              height: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'medium' }}>
                {category.name}
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {category.count} plantillas disponibles
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ 
                    borderColor: 'rgba(0,0,0,0.23)',
                    color: '#202124',
                    textTransform: 'none'
                  }}
                >
                  Ver todas
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        p: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'medium' }}>
          ¿No encuentras lo que necesitas?
        </Typography>
        <Typography sx={{ color: '#5f6368', mb: 3 }}>
          Solicita una plantilla personalizada para tus necesidades específicas
        </Typography>
        <Button 
          variant="contained"
          sx={{ 
            backgroundColor: '#1A73E8',
            '&:hover': { backgroundColor: '#1765D1' },
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none'
          }}
        >
          Solicitar plantilla
        </Button>
      </Box>
    </Container>
  );
}