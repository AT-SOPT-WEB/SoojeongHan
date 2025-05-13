import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import pageRoutes from '@/routes/pageRoutes';
import GlobalStyle from '@styles/global';
import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
