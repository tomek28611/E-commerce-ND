
import Spinner from "@/components/Spinner";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { slugify } from "@/utils/slugify";
import Image from "next/image";

export default function ProductsGrid({ products }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const updateScrollPosition = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = (totalScroll / windowHeight) * 100;
            setScrollPosition(scroll);
        };

        window.addEventListener("scroll", updateScrollPosition);

        return () => {
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, products]);


    const handleNavigation = (title) => {
        const urlTitle = slugify(title);
        setIsLoading(true);
        router.push(`/produkty/${urlTitle}`).then(() => setIsLoading(false));
    };

    return (
        <>
            <div className=" flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Hledejte podle názvu produktu nebo modelu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-1/2 mx-auto p-3 border-2 border-gray-300 rounded-md text-base mb-6 outline-none focus:border-gray-800 transition-all dark:bg-slate-700 dark:text-white"
                />
            </div>



            {isLoading ? (
                <Spinner />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 ">
                    {filteredProducts.map((product) => (
                        <div key={product._id} onClick={() => handleNavigation(product.title)}
                            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">

                            <Image className="rounded-2xl object-cover product_image_models" src={product.images[0]} width={300} height={300} />
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
                                <div className="product-card block md:hidden dark:text-white">
                                    <p className="product-name">{product.title}</p>
                                    <p className="product-price">CZK {product.price}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                    {isLoading && <Spinner />}
                </div>
            )}


        </>
    );
}
