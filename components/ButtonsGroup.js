import Link from "next/link";

import { useContext, useState } from "react";


import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";
import { FiChevronDown } from 'react-icons/fi';

export default function Buttons({ setMenuOpen }) {
 
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMobileNavActive(prev => !prev);
    setMenuOpen(prev => !prev);
  };

  const handleNavigation = (url) => {
    setIsLoading(true);
    router.push(url).then(() => setIsLoading(false));
  };

  const handleScrollToNewProducts = () => {
    const newProductsSection = document.getElementById("new-products");
    if (newProductsSection) {
      newProductsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="text-center items-center mb-3">
    
        <div className="flex justify-between py-6">
          <nav className="hidden xl:grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-4">
          
            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729339372729.jpg')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/motory')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Motory</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729673310792.webp')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/naprava')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Náprava</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1730457765172.webp')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/karoserie')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Karoserie</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729000259998.webp')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/elektrika')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Elektrika</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1730726445794.webp')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/rafky')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Ráfky</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1728587221569.webp')" }}
              onClick={() => handleNavigation('/nahradni-dily/mercedes/interier')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Interiér</span>
            </div>
            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('/miech.webp')" }}
              onClick={() => handleNavigation('/airmatic')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Nové a repasované vzduchove pérování</span>
            </div>
           
          </nav>
        </div>

        {isLoading && <Spinner />}
     
    </header>
  );
}
