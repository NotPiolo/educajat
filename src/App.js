import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const theme = createTheme({
  // ... tu configuración de tema existente
});

function AuthHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const currentPath = window.location.pathname;
      
      if (user) {
        // Usuario autenticado
        if (currentPath === '/login' || currentPath === '/') {
          navigate('/dashboard');
        }
      } else {
        // Usuario no autenticado
        if (currentPath === '/dashboard') {
          navigate('/login');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;