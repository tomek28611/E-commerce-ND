import { useRouter } from "next/router";
import { useState } from "react";
import { slugify } from "@/utils/slugify";

export default function NewProducts({ products }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNavigation = (title) => {
    const urlTitle = slugify(title); 
    setIsLoading(true);
    router.push(`/products/${urlTitle}`).then(() => setIsLoading(false));
  };

  return (
    <div id="new-products">
      <div onClick={() => handleNavigation("all-products")}>Všechny produkty...</div>
      {products.map((product) => (
        <div key={product._id} onClick={() => handleNavigation(product.title)}>
          {product.title}
        </div>
      ))}
    </div>
  );
}
