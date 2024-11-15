import { useState, useEffect } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import Spinner from "@/components/Spinner";
import { useRouter } from 'next/router';

export default function Navbar({ toggleTheme, theme }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //  nasłuchiwacze zdarzeń po zamontowaniu komponentu
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    //  nasłuchiwacze po odmontowaniu komponentu
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-slate-200 dark:bg-gray-800">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Spinner />
        </div>
      )}

      <div className="text-2xl font-bold text-black dark:text-white">
        <Link href="/">
          <div className="hover:text-blue-500">Logo</div>
        </Link>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/mercedes-benz/vsechny-autodily">
            <div className="text-black dark:text-white hover:text-blue-500">Všechny autodíly</div>
          </Link>
        </li>
        <li>
          <Link href="https://www.autodilyexpress.cz/podpora">
            <div className="text-black dark:text-white hover:text-blue-500">Podpora</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Kontakt</div>
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none"
        />
        <button
          onClick={() => {
            toggleTheme();
          }}
          className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          {theme === 'light' ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
        </button>
      </div>
    </nav>
  );
}
