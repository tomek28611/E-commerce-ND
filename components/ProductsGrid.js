import ProductBox from "@/components/ProductBox";
import Spinner from "@/components/Spinner"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { slugify } from "@/utils/slugify";

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
      <input
        type="text"
        placeholder="Hledejte podle názvu produktu nebo modelu"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-md text-base mb-6 outline-none focus:border-gray-800 transition-all"
      />

      {isLoading ? ( 
        <Spinner />
      ) : (
        <div className="">
          <div className="products-container">
            {filteredProducts?.map((product) => (
              <div 
                key={product._id} 
                onClick={() => handleNavigation(product.title)}
              >
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
      )}


    </>
  );
}
