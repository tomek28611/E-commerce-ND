
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { slugify } from "@/utils/slugify";
import { useState } from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Head from "next/head";


export default function ProductDetails({ product }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
    setLoading(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
    setLoading(true);
  };
 
  return (
    <>
     <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly | {product.title}</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="canonical" href={`https://www.nahradni-dily.com/autodil/${slugify(product.title)}`} />
            
                <link rel="apple-touch-icon" sizes="180x180" href="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Originální náhradní díly pro Mercedes-Benz. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes-Benz." />
                <meta property="og:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:image:alt" content="Náhradní díly pro Mercedes-Benz" />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:description" content="Originální náhradní díly pro Mercedes-Benz. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes-Benz." />
                <meta property="og:url" content="https://www.nahradni-dily.com/" />
                <meta property="og:site_name" content="nahradni-dily.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Originální náhradní díly pro Mercedes-Benz. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes-Benz." />
                <meta name="twitter:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta name="twitter:image:alt" content="Náhradní díly pro Mercedes-Benz"></meta>
                <meta name="twitter:description" content="Originální náhradní díly pro Mercedes-Benz. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes-Benz."></meta>

            </Head>
      <div className="container mx-auto p-6 bg-slate-100 dark:bg-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


          <div className="relative">

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-800 bg-opacity-50 z-10">
                <AiOutlineLoading3Quarters className="text-indigo-600 animate-spin text-4xl" />
              </div>
            )}


            <Image
              src={product.images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1} of ${product.title}`}
              width={600}
              height={600}
              className="rounded-lg"
              onLoadingComplete={() => setLoading(false)}
            />


            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 z-20"
              onClick={handlePreviousImage}
            >
              <BsArrowLeft className="text-gray-600" size={20} />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 z-20"
              onClick={handleNextImage}
            >
              <BsArrowRight className="text-gray-600" size={20} />
            </button>


            <div className="flex justify-center mt-4 space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLoading(true);
                  }}
                ></button>
              ))}
            </div>
          </div>


          <div className="space-y-4 ">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{product.title}</h1>
            <p className="text-gray-600 leading-6 dark:text-slate-300">{product.description}</p>
            <div className="text-2xl font-semibold text-indigo-600">
              {product.price} Kč
            </div>
            <button className="px-6 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 transition-colors">
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { title } = context.params;


  const products = await Product.find();
  const product = products.find(
    (p) => slugify(p.title) === title
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
