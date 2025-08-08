import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { LanguageSelector } from './shared/components/LanguageSelector/LanguageSelector';
import { router } from './routers/AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3483fa' // Azul de MercadoLibre
    },
    secondary: {
      main: '#ffe600' // Amarillo de MercadoLibre
    }
  },
  typography: {
    fontFamily: '"Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif'
  }
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageSelector />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
