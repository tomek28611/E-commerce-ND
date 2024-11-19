import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { slugify } from "@/utils/slugify";
import ProductTypes from "@/components/ProductTypes";
import MainArticle from "@/components/MainArticle";
import Spinner from "@/components/Spinner";
import Link from 'next/link';
import CustomFooter from "@/components/CustonFooter";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const models = [
    { class: "S-Trida", variants: ["W221", "W222", "W223"], image: "./s.webp" },
    { class: "E-Trida", variants: ["W212", "W213"], image: "./e.webp" },
    { class: "C-Trida", variants: ["W204", "W205", "W206"], image: "./c.webp" },
    { class: "A-Trida", variants: ["W169", "W176", "W177"], image: "./a.webp" },
    { class: "G-Trida", variants: ["W463"], image: "./g.webp" },
    { class: "GLA-Trida", variants: ["X156", "H247"], image: "./gla.webp" },
    { class: "GLK-Trida", variants: ["X204"], image: "./glk.webp" },
    { class: "GLC-Trida", variants: ["X253", "X254"], image: "./glc.webp" },
    { class: "GLE-(ML)-Trida", variants: ["W166", "W167", "C167", "C292"], image: "./gle.webp" },
    { class: "GLB-Trida", variants: ["X247"], image: "./glb.webp" },
    { class: "GLS-Trida", variants: ["X166", "X167"], image: "./gls.webp" },
    { class: "CLA-Trida", variants: ["C117", "C118"], image: "./cla.webp" },
    { class: "CLS-Trida", variants: ["W218", "W257"], image: "./cls.webp" },
    { class: "B-Trida", variants: ["W246", "W247"], image: "./b.webp" },
    { class: "SL-Trida", variants: ["R232", "R231", "R230"], image: "./sl.webp" },
];

const sortedModels = models.sort((a, b) => a.class.localeCompare(b.class));


export default function NewProducts({ products, productF }) {
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter();

    const handleModelClick = () => {
        setLoading(true);
    };


    useEffect(() => {
        if (loading) {

            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);


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
        <>

            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <Spinner />
                </div>
            )}

         
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                type="button"
                className="inline-fle items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 fixed top-50 right-2 z-1000"
            >
                <span className="">Vyberte model Mercedes-Benz</span>
                {sidebarOpen ? <FaTimes className="fixed top-50 right-2" size={24} /> : 
                <svg className="fixed top-50 right-2 w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
}
            </button>

            <aside id="logo-sidebar"  className={`floating-aside fixed top-12 left-0 z-40 w-64 h-[calc(100vh-3rem)] overflow-y-auto transform transition-all duration-300 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="ml-2 mb-4  text-center dark:text-white">Vyberte model Mercedes-Benz</div>
                    {sortedModels.map((model) => (
                        <Link key={model.class} href={`/mercedes-benz/${model.class}`}>
                            <div
                                onClick={handleModelClick}
                                className=" mb-4 ml-2 relative p-6 border border-gray-300 rounded-lg text-center cursor-pointer transition-all duration-300 hover:brightness-75"
                                style={{
                                    backgroundImage: `url(${model.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '80px',
                                }}
                            >
                                <h3 className="text-white text-sm">{model.class}</h3>
                                <p className="text-white text-xs">{` ${model.variants.join(", ")}`}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </aside>

            <div className="content p-4 sm:ml-64">
                <section className="items-center py-4  p-1  text-black dark:text-white">

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 mt-8">
                        <h1 className="text-center font-manrope font-bold text-2xl  text-black dark:text-slate-400 mb-8 max-xl:text-center">Originální náhradní díly pro Mercedes-Benz</h1>
                        <h2 className="text-center mb-4 dark:text-slate-400">
                            Nabízíme:<br />
                        </h2>
                        <div className="">
                            <ProductTypes />
                        </div>

                        <h2 className="font-manrope font-bold text-2xl text-black dark:text-slate-400 mb-8 max-xl:text-center">Nedávno přidáno</h2>
                        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3">
                            {products.map((product) => (
                                <div key={product._id}
                                    onClick={handleModelClick}
                                    className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                                    <Link href={`https://www.nahradni-dily.com/autodil/${slugify(product.title)}`}>
                                        <img className="rounded-2xl object-cover product_image_models_new" src={product.images[0]} width={300} height={300} alt="fotka produktu" />
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
                                    </Link>
                                </div>
                            ))}
                            {isLoading && <Spinner />}
                        </div>
                    </div>
                    <MainArticle />
                    <CustomFooter />
                </section>
            </div>

        </>
    );
}
