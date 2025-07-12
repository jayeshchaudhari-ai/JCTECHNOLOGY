import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // JC Technology blue
    },
    secondary: {
      main: '#ff9800',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
