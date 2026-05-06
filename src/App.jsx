import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Results from './pages/Results';
import About from './pages/About';

const Layout = ({ darkMode, setDarkMode }) => {
  return (
    <div className="min-h-screen flex flex-col font-body animate-fade-in">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const savedTheme = localStorage.getItem('theme');
  const [darkMode, setDarkMode] = useState(savedTheme !== 'light');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout darkMode={darkMode} setDarkMode={setDarkMode} />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/explore", element: <Explore /> },
        { path: "/results", element: <Results /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
