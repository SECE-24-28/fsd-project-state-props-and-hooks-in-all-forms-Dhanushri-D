import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
