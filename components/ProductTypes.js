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
        setMobileNavActive((prev) => !prev);
        setMenuOpen((prev) => !prev);
    };

    const handleNavigation = (url) => {
        setIsLoading(true);
        router.push(url).then(() => setIsLoading(false));
    };

    return (
        <>
            <div className="flex items-center justify-center gap-4 mb-4">
                <div
                    className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
                    style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729339372729.jpg')" }}
                    onClick={() =>
                        handleNavigation(
                            "/mercedes-benz/skupina-autodilu/automobilove-motory"
                        )
                    }
                >
                    <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">
                        Motory
                    </span>
                </div>

                <div
                    className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600 ml-4"
                    style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729673310792.webp')" }}
                    onClick={() =>
                        handleNavigation(
                            "/mercedes-benz/skupina-autodilu/odpruzeni-auta"
                        )
                    }
                >
                    <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">
                        Náprava
                    </span>
                </div>
                <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1730457765172.webp')" }}
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/casti-karoserie-auta')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Karoserie</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729000259998.webp')" }}
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/autoelektrika')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Elektrika</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1730726445794.webp')" }}
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/kola-auta')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Ráfky</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1728587221569.webp')" }}
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/interier-vozu')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Interiér</span>
            </div>
            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('')" }}
              onClick={() => handleNavigation('https://www.autodilyexpress.cz/airmatic')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Nové a repasované vzduchove pérování</span>
            </div>
           
            </div>
        </>
    );
}
