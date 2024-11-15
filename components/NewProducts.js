import { useRouter } from "next/router";
import { useState } from "react";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import ButtonsGroup from "@/components/ButtonsGroup";
import MainArticle from "@/components/MainArticle";
import Spinner from "@/components/Spinner";

export default function NewProducts({ products, productF }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleNavigation = (title) => {
        const urlTitle = slugify(title);
        setIsLoading(true);
        router.push(`/autodil/${urlTitle}`).then(() => setIsLoading(false));
    };

    return (
        <>
            <section className="items-center py-4 md:absolute relative right-4 top-20 p-1 bg-slate-100 dark:bg-slate-800 text-black dark:text-white">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
                    <h1 className="text-center font-manrope font-bold text-2xl  text-black dark:text-slate-400 mb-8 max-xl:text-center">Originální náhradní díly pro Mercedes-Benz</h1>
                    <h2 className="text-center mb-4 dark:text-slate-400">
                        Nabízíme<br />

                    </h2>
                    <div className="">

                        <ButtonsGroup />
                    </div>

                    <h2 className="font-manrope font-bold text-2xl text-black dark:text-slate-400 mb-8 max-xl:text-center">Nedávno přidáno</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3">
                        {products.map((product) => (
                             <div key={product._id} onClick={() => handleNavigation(product.title)}
                             className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
 
                             <Image className="rounded-2xl object-cover product_image_models_new" src={product.images[0]} width={300} height={300} alt="fotka produktu" />
                             <div className="relative group">
 
                                 <div
                                     className="hidden md:block absolute z-10 bottom-3 left-0 mx-3 p-3 bg-slate-300 bg-opacity-50 w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent overflow-hidden transition-all duration-500 h-12 group-hover:h-24 group-hover:shadow-indigo-200 group-hover:bg-indigo-50"
                                 >
                                     <div className="flex items-center justify-between mb-2">
                                         <h6 className="font-semibold text-base leading-7 text-black">
                                             {product.model}
                                         </h6>
                                         <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                                             {product.price} Kč
                                         </h6>
                                     </div>
                                     <p className="text-xs leading-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                         {product.title}
                                     </p>
                                 </div>
                                 <div className="product-card block md:hidden dark:text-white text-center">
                                     <p className="product-name">{product.title}</p>
                                     <p className="product-price"> {product.price} Kč</p>
                                 </div>
 
                             </div>
 
                         </div>
                        ))}
                        {isLoading && <Spinner />}
                    </div>
                </div>
                <MainArticle />
            </section>
        </>
    );
}
