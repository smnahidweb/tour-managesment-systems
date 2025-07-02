import { StrictMode, useState, useEffect, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import { RouterProvider } from 'react-router';
import Router from './Router/Router.jsx';
import LoadingScreen from './Components/LoadingScreen.jsx';

function Main() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate loading delay or fetch initial data here
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
