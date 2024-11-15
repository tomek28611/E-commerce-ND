import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    
  
    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
