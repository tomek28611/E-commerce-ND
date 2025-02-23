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
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/automobilove-motory')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Motory</span>
            </div>

            <div 
              className="flex flex-col justify-end items-center bg-gray-800 text-white text-center p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 h-24 w-24 bg-cover bg-center relative hover:bg-gray-600"
              style={{ backgroundImage: "url('https://moto-rental.s3.amazonaws.com/1729673310792.webp')" }}
              onClick={() => handleNavigation('/mercedes-benz/skupina-autodilu/odpruzeni-auta')}
            >
              <span className="bg-black bg-opacity-60 text-white p-1 w-full text-center absolute bottom-0 rounded-b-lg">Náprava</span>
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
           
          </nav>
        </div>

        {isLoading && <Spinner />}
     
    </header>
  );
}

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Spinner from "@/components/Spinner";
// import ButtonsGroup from "@/components/ButtonsGroup";
// import { slugify } from "@/utils/slugify";
// import Image from "next/image";
// import ProductTypes from "@/components/ProductTypes";
// import MainArticle from "@/components/MainArticle";



// const models = [
//     { class: "S-Trida", variants: ["W221", "W222", "W223"], image: "./s.webp" },
//     { class: "E-Trida", variants: ["W212", "W213"], image: "./e.webp" },
//     { class: "C-Trida", variants: ["W204", "W205", "W206"], image: "./c.webp" },
//     { class: "A-Trida", variants: ["W169", "W176", "W177"], image: "./a.webp" },
//     { class: "G-Trida", variants: ["W463"], image: "./g.webp" },
//     { class: "GLA-Trida", variants: ["X156", "H247"], image: "./gla.webp" },
//     { class: "GLK-Trida", variants: ["X204"], image: "./glk.webp" },
//     { class: "GLC-Trida", variants: ["X253", "X254"], image: "./glc.webp" },
//     { class: "GLE-(ML)-Trida", variants: ["W166", "W167", "C167", "C292"], image: "./gle.webp" },
//     { class: "GLB-Trida", variants: ["X247"], image: "./glb.webp" },
//     { class: "GLS-Trida", variants: ["X166", "X167"], image: "./gls.webp" },
//     { class: "CLA-Trida", variants: ["C117", "C118"], image: "./cla.webp" },
//     { class: "CLS-Trida", variants: ["W218", "W257"], image: "./cls.webp" },
//     { class: "B-Trida", variants: ["W246", "W247"], image: "./b.webp" },
//     { class: "SL-Trida", variants: ["R232", "R231", "R230"], image: "./sl.webp" },
//     { class: "SL-Trida", variants: ["R232", "R231", "R230"], image: "./sl.webp" },

// ];

// const sortedModels = models.sort((a, b) => a.class.localeCompare(b.class));

// export default function Test({ products, productF }) {
//     const [isLoading, setIsLoading] = useState(false);
//     const [loading, setLoading] = useState(false);


//     const handleModelClick = () => {
//         setLoading(true);
//     };


//     useEffect(() => {
//         if (loading) {

//             const timer = setTimeout(() => setLoading(false), 1000);
//             return () => clearTimeout(timer);
//         }
//     }, [loading]);

//     return (
//         <>

//             {loading && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
//                     <Spinner />
//                 </div>
//             )}

//             <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//                 <span class="sr-only">Open sidebar</span>
//                 <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//                 </svg>
//             </button>

//             <aside id="logo-sidebar" class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//                 <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//                     <div className="ml-2 mb-4  text-center dark:text-white">Vyberte model Mercedes-Benz</div>
//                     {sortedModels.map((model) => (
//                         <Link key={model.class} href={`/mercedes-benz/${model.class}`}>
//                             <div
//                                 onClick={handleModelClick}
//                                 className=" mb-4 ml-2 relative p-6 border border-gray-300 rounded-lg text-center cursor-pointer transition-all duration-300 hover:brightness-75"
//                                 style={{
//                                     backgroundImage: `url(${model.image})`,
//                                     backgroundSize: 'cover',
//                                     backgroundPosition: 'center',
//                                     height: '80px',
//                                 }}
//                             >
//                                 <h3 className="text-white text-sm">{model.class}</h3>
//                                 <p className="text-white text-xs">{` ${model.variants.join(", ")}`}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </aside>

//             <div class="p-4 sm:ml-64 mt-10">
//                 <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//                 <section className="items-center py-4  top-20 p-1  text-black dark:text-white">
            
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
//                     <h1 className="text-center font-manrope font-bold text-2xl  text-black dark:text-slate-400 mb-8 max-xl:text-center">Originální náhradní díly pro Mercedes-Benz</h1>
//                     <h2 className="text-center mb-4 dark:text-slate-400">
//                         Nabízíme:<br />

//                     </h2>
//                     <div className="">
//                         {/* <ButtonsGroup /> */}
//                         <ProductTypes />
//                     </div>

//                     <h2 className="font-manrope font-bold text-2xl text-black dark:text-slate-400 mb-8 max-xl:text-center">Nedávno přidáno</h2>
//                     <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3">
//                         {products.map((product) => (

//                             <div key={product._id}
//                                 // onClick={() => handleNavigation(product.title)}
//                                 className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
//                                 <Link href={`https://www.nahradni-dily.com/autodil/${slugify(product.title)}`}>
//                                     <Image className="rounded-2xl object-cover product_image_models_new" src={product.images[0]} width={300} height={300} alt="fotka produktu" />
//                                     <div className="relative group">

//                                         <div
//                                             className="hidden md:block absolute z-10 bottom-3 left-0 mx-3 p-3 bg-slate-300 bg-opacity-50 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent overflow-hidden transition-all duration-500 h-12 group-hover:h-24 group-hover:shadow-indigo-200 group-hover:bg-indigo-50"
//                                         >
//                                             <div className="flex items-center justify-between mb-2">
//                                                 <h6 className="font-semibold text-base leading-7 text-black">
//                                                     {product.model}
//                                                 </h6>
//                                                 <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
//                                                     {product.price} Kč
//                                                 </h6>
//                                             </div>
//                                             <p className="text-xs leading-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                                 {product.title}
//                                             </p>
//                                         </div>
//                                         <div className="product-card block md:hidden dark:text-white text-center">
//                                             <p className="product-name">{product.title}</p>
//                                             <p className="product-price"> {product.price} Kč</p>
//                                         </div>

//                                     </div>
//                                 </Link>
//                             </div>
//                         ))}
//                         {isLoading && <Spinner />}
//                     </div>
//                 </div>
//                 <MainArticle />
//             </section>

//                     {/* <div class="grid grid-cols-3 gap-4 mb-4"> */}
                        
//                         {/* <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                            
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                         <p class="text-2xl text-gray-400 dark:text-gray-500">
//                         <ButtonsGroup />
//                             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                             </svg>
//                         </p>
//                     </div>
//                     <div class="grid grid-cols-2 gap-4 mb-4">
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
//                         <p class="text-2xl text-gray-400 dark:text-gray-500">
//                             <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                             </svg>
//                         </p>
//                     </div>
//                     <div class="grid grid-cols-2 gap-4">
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div>
//                         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
//                             <p class="text-2xl text-gray-400 dark:text-gray-500">
//                                 <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                                 </svg>
//                             </p>
//                         </div> */}
//                     {/* </div> */}
//                 </div>
//             </div>

//         </>
//     )
// }
