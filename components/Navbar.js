import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-slate-200 dark:bg-gray-800">
      {/* Logo */}
      
      <div className="text-2xl font-bold text-black dark:text-white">
        <Link href="/">
          <div className="hover:text-blue-500">Logo</div>
        </Link>
      </div>

      {/* Menu */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="text-black dark:text-white hover:text-blue-500">Kontakt</div>
          </Link>
        </li>
      </ul>

    
      <div className="hidden md:flex items-center space-x-4  ">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none"
        />
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          {theme === 'light' ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
        </button>
      </div>
    </nav>
  );
}
