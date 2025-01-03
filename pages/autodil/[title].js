import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { slugify } from "@/utils/slugify";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function ProductDetails({ product }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [street, setStreet] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState(48 * 60 * 60);
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {

    setTitle(product.title);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const requestData = {
      name,
      email,
      phone,
      title,
      price,
      city,
      postalCode,
      street,
      message,
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setTitle('');
        // setTitleNr('');
        setVin('');
        setMessage('');
        router.push('/?message=success');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    window.location.reload();
  };

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

  const toggleOrderForm = () => {
    setIsOrderFormVisible(!isOrderFormVisible);
  };

  const handleSubmitOrder = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    if (showMessage) {
      const targetDate = new Date('2024-11-26T15:00:00');
      const interval = setInterval(() => {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
          clearInterval(interval);
          setCountdown(0);
        } else {
          setCountdown(timeRemaining);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showMessage]);


  const formatTime = (timeInMilliseconds) => {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
      </Head>

      <div className="container mx-auto p-6 bg-slate-100 dark:bg-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-800 bg-opacity-50 z-10">
                <AiOutlineLoading3Quarters className="text-indigo-600 animate-spin text-4xl" />
              </div>
            )}

            <div className="relative">
              <img
                src={product.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1} of ${product.title}`}
                width={600}
                height={600}
                className="rounded-lg"
                onLoad={() => setLoading(false)}
              />
              <div className="absolute bottom-0 left-0 w-full h-6 bg-white dark:bg-slate-700"></div>
              
            </div>

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
                  className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLoading(true);
                  }}
                ></button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{product.title} </h1>
            <h1 className="text-gray-400">ID: {product._id}</h1>
            <p className="text-gray-600 leading-6 dark:text-slate-300">{product.description}</p>
            <div className="text-2xl font-semibold text-indigo-600">
              {product.price} Kč
            </div>
            <button
              onClick={toggleOrderForm}
              className="flex px-6 py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 transition-colors"
            >
              <div>Objednávka</div>
            </button>

            {isOrderFormVisible && (
              <form onSubmit={handleSubmit}>
                <div className="mt-6 bg-gray-300 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold">Objednávka pro {product.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Název produktu</label>
                      <input
                        type="text"
                        value={title}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Cena</label>
                      <input
                        type="text"
                        value={`${product.price} Kč`}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Množství</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Jméno a příjmení příjemce*</label>
                      <input
                        type="text"
                        placeholder="Zadejte Jméno a příjmení příjemce"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Telefon příjemce*</label>
                      <input
                        type="text"
                        placeholder="Zadejte telefon příjemce"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Email*</label>
                      <input
                        type="email"
                        placeholder="Zadejte Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Město*</label>
                      <input
                        type="text" // Zmieniony typ
                        placeholder="Zadejte Město"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Adresa*</label>
                      <input
                        type="text" // Zmieniony typ
                        placeholder="Zadejte Adresa"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">PSČ*</label>
                      <input
                        type="text" // Zmieniony typ
                        placeholder="Zadejte PSČ"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Zpráva</label>
                      <textarea
                        placeholder="Zpráva"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                    >
                      {loading ? 'Odesílání...' : 'Odeslat objednávku'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div>

              {isModalVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-96 text-center">
                    <h2 className="text-2xl font-semibold mb-4 bg-gray-200 rounded-lg shadow-md">Objednávka se zpracovává</h2>
                    <p className="mb-4">
                      Na vaší objednávce pracujeme. Potvrzení bude zasláno na
                      e-mail. Brzy vás budeme kontaktovat.
                    </p>
                    <button
                      onClick={handleCloseModal}
                      className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 rounded-lg shadow-lg"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}


              {showMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-1 rounded-md shadow-lg">

                    <div class="bg-gray-100 dark:bg-gray-800">
                      <div class=" flex flex-col justify-center items-center p-4">
                        <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" class="mb-8 h-40" />
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Na webu probíhá údržba</h1>
                        <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl font-semibold mb-8">Je nám líto, ale Vaši objednávku dnes nemůžeme přijmout</p>
                        <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-4">Usilovně pracujeme na zlepšení uživatelského zážitku. Zůstaňte naladěni!</p>
                        <p className="text-xl font-bold text-gray-500 mb-8">Dokončení údržbářských prací:
                          {formatTime(countdown)}
                        </p>
                        <div class="flex space-x-4">
                          <a href="https://www.nahradni-dily.com/podpora" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Kontaktujte nás</a>
                          <button onClick={handleCloseMessage} class="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Zavřít</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <div className="block gap-2 md:flex">
              {product.images.map((img) => (
                <div key={product._id} className="flex">
                  <img src={img} width={50} height={50} className="flex" alt={`Image ${product.title}`} />
                </div>
              ))}
            </div>
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
