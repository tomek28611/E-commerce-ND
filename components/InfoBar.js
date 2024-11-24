import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FooterBar() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true); 
    }, 5000);
    return () => clearTimeout(timer); 
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; 

  return (
    <div
      className={`fixed left-0 right-0 mx-auto rounded-xl border bg-slate-200 text-balck dark:bg-gray-800 dark:text-white p-4 flex justify-between items-center shadow-md z-50 transition-all duration-1000 ${
        isAnimating
          ? 'translate-y-[calc(100vh-64px)] opacity-100'
          : 'translate-y-0 opacity-0'
      }`}
      style={{
        top: 0,
        width: '80%', 
        maxWidth: '900px', 
        height: '64px',
      }}
    >

      <p className="text-sm sm:text-base mr-2">
      Nenašli jste, co hledáte? Napište nám, jaký díl chcete
      </p>
      <Link
        href="/podpora"
        className="text-black dark:text-white hover:bg-blue-700  font-semibold py-2 px-4 rounded-md transition text-xs sm:text-sm"
      >
        DÍL NA POŽADAVEK...
      </Link>

   
      <button
        onClick={handleClose}
        className="ml-4 text-white font-semibold hover:text-gray-400 text-lg sm:text-xl"
        aria-label="close"
      >
        X
      </button>
    </div>
  );
}
