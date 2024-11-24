
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { slugify } from "@/utils/slugify";
import { useState } from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Head from "next/head";
import Link from "next/link";


export default function ProductDetails({ product }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

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
    setLoading(false);
  };

  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Náhradní díly pro Mercedes-Benz </title>
        <meta
          name="description"
          content="Objevte širokou nabídku autodílů pro Mercedes. Nabízíme motory, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny"
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
        <meta property="og:url" content={`https://www.nahradni-dily.com/autodil/${slugify(product.title)}`} />
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
            <button className="flex px-6 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 transition-colors">
              <div>
              Objednávka
              </div>
              <div>

              </div>
            </button>

          </div>

        </div>
        <Link href="https://www.instagram.com/partsnerozza.cz?utm_source=qr&igsh=MWMzamlqOHh6eXV6dg==" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
          <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </Link>


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
