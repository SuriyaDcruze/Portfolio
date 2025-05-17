import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;