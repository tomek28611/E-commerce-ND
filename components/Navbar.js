import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";


const models = [
  { class: "S-Trida", variants: ["W221", "W222", "W223"], image: "https://www.nahradni-dily.com/s.webp" },
  { class: "E-Trida", variants: ["W212", "W213"], image: "https://www.nahradni-dily.com/e.webp" },
  { class: "C-Trida", variants: ["W204", "W205", "W206"], image: "https://www.nahradni-dily.com/c.webp" },
  { class: "A-Trida", variants: ["W169", "W176", "W177"], image: "https://www.autodilyexpress.cz/a.webp" },
  { class: "G-Trida", variants: ["W463"], image: "https://www.nahradni-dily.com/g.webp" },
  { class: "GLA-Trida", variants: ["X156", "H247"], image: "https://www.nahradni-dily.com/gla.webp" },
  { class: "GLK-Trida", variants: ["X204"], image: "https://www.nahradni-dily.com/glk.webp" },
  { class: "GLC-Trida", variants: ["X253", "X254"], image: "https://www.nahradni-dily.com/glc.webp" },
  { class: "GLE-(ML)-Trida", variants: ["W166", "W167", "C167", "C292"], image: "https://www.nahradni-dily.com/gle.webp" },
  { class: "GLB-Trida", variants: ["X247"], image: "https://www.nahradni-dily.com/glb.webp" },
  { class: "GLS-Trida", variants: ["X166", "X167"], image: "https://www.nahradni-dily.com/gls.webp" },
  { class: "CLA-Trida", variants: ["C117", "C118"], image: "https://www.nahradni-dily.com/cla.webp" },
  { class: "CLS-Trida", variants: ["W218", "W257"], image: "https://www.nahradni-dily.com/cls.webp" },
  { class: "B-Trida", variants: ["W246", "W247"], image: "https://www.nahradni-dily.com/b.webp" },
  { class: "SL-Trida", variants: ["R232", "R231", "R230"], image: "https://www.nahradni-dily.com/sl.webp" },
];

const sortedModels = models.sort((a, b) => a.class.localeCompare(b.class));

export default function Navbar({ toggleTheme, theme }) {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => {
      setLoading(false);
      setMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  const handleModelClick = () => {
    setLoading(true);
  };

  const toggleModels = () => {
    setShowModels(prev => !prev);
  };

  const closeModal = () => {
    setShowModels(false);
};

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-200 dark:bg-gray-800 shadow-md">
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Spinner />
          </div>
        )}
         {showModels && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-gray-300 border rounded-2xl p-5 grid grid-cols-3 gap-4 relative max-w-4xl w-[90%] shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-0 right-2 text-lg bg-transparent text-black border "
                            onClick={closeModal}
                        >
                            zavřít
                        </button>
                        {/* <Link href="/nahradni-dily/mercedes/A-Trida">
                            <div
                                className="relative bg-cover bg-center h-28 w-full flex items-end justify-center text-white cursor-pointer"
                                style={{ backgroundImage: "url(a.webp)" }}
                            >
                                <span className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-2 rounded-b-md">
                                    Mercedes-Benz třídy A
                                </span>
                            </div>
                        </Link> */}

                        {sortedModels.map((model) => (
                            <Link key={model.class} href={`https://www.nahradni-dily.com/mercedes-benz/${model.class}`}>
                                <div
                                    onClick={handleModelClick}
                                    className="mt-2 mb-1 ml-2 relative p-6 border border-gray-600 rounded-lg text-center cursor-pointer transition-all duration-300 hover:brightness-75"
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
                </div>
            )}
        {/* {showModels && (
          <aside id="logo-sidebar" className={` floating-aside fixed top-12 left-0 z-40 w-64 h-[calc(100vh-3rem)] overflow-y-auto transform transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } sm:translate-x-0`}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

              <div className="ml-2 mb-4  text-center dark:text-white">Vyberte model Mercedes-Benz</div>

              <div onClick={toggleModels}>
                <FaTimes className="fixed text-white border top-10 right-5" size={24} />
              </div>

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
        )} */}

        <div className="flex items-center justify-between p-4">
          <div className="text-2xl font-bold text-black dark:text-white">
            <Link href="/">
              <div className="hover:text-blue-500">Náhradní díly</div>
            </Link>
          </div>


          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white md:hidden focus:outline-none"
          >
            <div className="fixed top-4 right-2 text-xs">menu</div>
            <div className="fixed top-8 right-2">
              {menuOpen ? <FaTimes className="fixed top-50 right-2" size={24} /> : <FaBars size={24} />}
            </div>

          </button>



          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/">
                <div className="text-black dark:text-white hover:text-blue-500">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/mercedes-benz/vsechny-autodily">
                <div className="text-black dark:text-white hover:text-blue-500">Všechny autodíly</div>
              </Link>
            </li>
            <li>
              <Link href="/podpora">
                <div className="text-black dark:text-white hover:text-blue-500">DÍL NA POŽADAVEK</div>
              </Link>
            </li>

          </ul>

          {/* ------------------------ */}
          <div className="hidden md:flex space-x-4">
            <div>
              
              <h2 className="text-center"></h2>
            </div>
            <div
              onClick={toggleModels}
              className="cursor-pointer  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10  flex flex-col justify-center items-center"
            >
              <img
                src="./mercedes.png"
                // className="w-14 h-14"
                alt="Mercedes Logo"
              />
              <h2 className="text-white font-xs  md:font-semibold text-sm truncate">Mercedes</h2>
            </div>


            <div
              onClick={() => router.push('/skoda')}
              className="cursor-pointer  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-11 h-11 flex flex-col justify-center items-center"
            >
              <img
                src="./skoda.png"
                // className="w-18 h-18 "
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-3  font-semibold text-sm truncate">Skoda</h2>
            </div>

            <div
              onClick={() => router.push('/bmw')}
              className="cursor-pointer  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10  flex flex-col justify-center items-center"
            >
              <img
                src="./bmw.png"
                // className="w-14 h-14 md:w-18 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-3  font-semibold text-sm truncate">BMW</h2>
            </div>
            <div
              onClick={() => router.push('/audi')}
              className="cursor-pointer  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-12 h-8 flex flex-col justify-center items-center"
            >
              <img
                src="./audi.png"
                // className="w-14 h-14 md:w-32 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-6 mt-1  font-semibold text-sm truncate">Audi</h2>
            </div>
            <div
              onClick={() => router.push('/volkswagen')}
              className="cursor-pointer  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10 flex flex-col justify-center items-center"
            >
              <img
                src="./vw.png"
                // className="w-14 h-14 md:w-18 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  font-semibold text-sm truncate">Volkswagen</h2>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {theme === "light" ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
            </button>
          </div>
          {/* <div className="hidden md:flex items-center space-x-4">
            <div>
              <img src="/models.png" alt="car-model" className="models" onClick={toggleModels} />
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {theme === "light" ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
            </button>
          </div> */}
        </div>

        {/* Menu mobilne */}
        {menuOpen && (
          <ul className="flex flex-col space-y-4 p-4 md:hidden bg-slate-200 dark:bg-gray-800">
            <li>
              <Link href="/">
                <div className="text-black dark:text-white hover:text-blue-500">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/mercedes-benz/vsechny-autodily">
                <div className="text-black dark:text-white hover:text-blue-500">Všechny autodíly</div>
              </Link>
            </li>
            <li>
              <Link href="/podpora">
                <div className="text-black dark:text-white hover:text-blue-500">Podpora</div>
              </Link>
            </li>

            <div className="flex space-x-2">
            <div>
              
              <h2 className="text-center"></h2>
            </div>
            <div
              onClick={toggleModels}
              className="cursor-pointer bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10  flex flex-col justify-center items-center"
            >
              <img
                src="./mercedes.png"
                // className="w-14 h-14"
                alt="Mercedes Logo"
              />
              <h2 className="text-white font-xs  md:font-semibold text-sm truncate">Mercedes</h2>
            </div>


            <div
              onClick={() => router.push('/skoda')}
              className="cursor-pointer  bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-11 h-11 flex flex-col justify-center items-center"
            >
              <img
                src="./skoda.png"
                // className="w-18 h-18 "
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-3  font-semibold text-sm truncate">Skoda</h2>
            </div>

            <div
              onClick={() => router.push('/bmw')}
              className="cursor-pointer  bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10  flex flex-col justify-center items-center"
            >
              <img
                src="./bmw.png"
                // className="w-14 h-14 md:w-18 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-3  font-semibold text-sm truncate">BMW</h2>
            </div>
            <div
              onClick={() => router.push('/audi')}
              className="cursor-pointer  bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-12 h-8 flex flex-col justify-center items-center"
            >
              <img
                src="./audi.png"
                // className="w-14 h-14 md:w-32 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  px-6 mt-1  font-semibold text-sm truncate">Audi</h2>
            </div>
            <div
              onClick={() => router.push('/volkswagen')}
              className="cursor-pointer  bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-10 h-10 flex flex-col justify-center items-center"
            >
              <img
                src="./vw.png"
                // className="w-14 h-14 md:w-18 md:h-18 mb-2"
                alt="Mercedes Logo"
              />
              <h2 className="text-white  font-semibold text-sm truncate">Volkswagen</h2>
            </div>
            {/* <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {theme === "light" ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
            </button> */}
          </div>

            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {theme === "light" ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
            </button>
          </ul>
        )}
      </nav>


      <div className="pt-[65px]">

      </div>
    </>
  );
}
