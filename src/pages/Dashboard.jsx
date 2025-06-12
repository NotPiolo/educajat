import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExitToApp as LogoutIcon } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('Cursos'); // Estado para la sección activa

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Ocurrió un error al cerrar sesión');
    }
  };

  // Contenido dinámico basado en la sección activa
  const renderSectionContent = () => {
    switch(activeSection) {
      case 'Cursos':
        return (
          <Paper sx={{ p: 3, borderRadius: '12px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Mis Cursos</Typography>
            <Box sx={{ 
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f7fa',
              borderRadius: '8px'
            }}>
              <Typography color="text.secondary">Listado de cursos disponibles</Typography>
            </Box>
          </Paper>
        );
      case 'Tareas':
        return (
          <Paper sx={{ p: 3, borderRadius: '12px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Tareas Pendientes</Typography>
            <Box sx={{ 
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: '#f5f7fa',
              borderRadius: '8px',
              p: 3
            }}>
              <Typography color="text.secondary">Tarea 1 - Fecha de entrega: 15/06/2023</Typography>
              <Typography color="text.secondary">Tarea 2 - Fecha de entrega: 20/06/2023</Typography>
              <Typography color="text.secondary">Tarea 3 - Fecha de entrega: 25/06/2023</Typography>
            </Box>
          </Paper>
        );
      case 'Plantillas':
        return (
          <Paper sx={{ p: 3, borderRadius: '12px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Plantillas Disponibles</Typography>
            <Grid container spacing={2}>
              {['Documento Académico', 'Presentación', 'Reporte', 'Ensayo'].map((plantilla) => (
                <Grid item xs={12} sm={6} md={3} key={plantilla}>
                  <Paper sx={{ p: 2, height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography>{plantilla}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        );
      case 'Videollamadas':
        return (
          <Paper sx={{ p: 3, borderRadius: '12px', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1)' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Videollamadas Programadas</Typography>
            <Box sx={{ 
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f7fa',
              borderRadius: '8px',
              flexDirection: 'column',
              gap: 2
            }}>
              <Typography color="text.secondary">Reunión de Matemáticas - 10:00 AM</Typography>
              <Typography color="text.secondary">Clase de Historia - 2:00 PM</Typography>
              <Button variant="contained" sx={{ backgroundColor: '#1A73E8' }}>
                Nueva Videollamada
              </Button>
            </Box>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      fontFamily: 'Poppins, Roboto, sans-serif',
      minHeight: '100vh'
    }}>
      {/* Sidebar */}
      <Box sx={{ 
        width: '280px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #e0e0e0',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Box>
          <Typography variant="h6" sx={{ 
            color: '#1A73E8',
            fontWeight: 'bold',
            mb: 4
          }}>
            EducaJat
          </Typography>
          
          <Typography variant="subtitle1" sx={{ 
            color: '#5f6368',
            fontWeight: 'medium',
            mb: 2
          }}>
            Menú
          </Typography>
          
          {['Cursos', 'Tareas', 'Plantillas', 'Videollamadas'].map((item) => (
            <Box 
              key={item} 
              onClick={() => setActiveSection(item)}
              sx={{ 
                p: 2,
                mb: 1,
                borderRadius: '8px',
                backgroundColor: activeSection === item ? '#e8f0fe' : 'transparent',
                color: activeSection === item ? '#1A73E8' : '#202124',
                '&:hover': { 
                  backgroundColor: '#e8f0fe',
                  cursor: 'pointer'
                }
              }}
            >
              <Typography sx={{ fontWeight: activeSection === item ? 'medium' : 'normal' }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Botón de Cerrar Sesión */}
        <Button
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
          sx={{
            mt: 2,
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: '#d32f2f',
            '&:hover': {
              backgroundColor: '#ffebee',
              color: '#b71c1c'
            }
          }}
        >
          Cerrar Sesión
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 'bold',
          mb: 4,
          color: '#202124'
        }}>
          {activeSection} {/* Muestra la sección activa como título */}
        </Typography>
        
        {renderSectionContent()} {/* Renderiza el contenido dinámico */}
      </Box>
    </Box>
  );
}