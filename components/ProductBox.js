
import Spinner from "@/components/Spinner";
import { slugify } from "@/utils/slugify";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";


export default function ProductBox({ _id, title, description, price, images }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleNavigation = (title) => {
        const urlTitle = slugify(title);
        setIsLoading(true);
        router.push(`/produkty/${urlTitle}`).then(() => setIsLoading(false));
    };


  return (
    <div className="center">
   
        <div onClick={() => handleNavigation(title)} className="product-card">
        <Image src={images?.[0]}
            width={250} height={250} className="product-image" alt="foto autodil" />
        </div>
      
        <p onClick={() => handleNavigation(title)} className="product-name">{title}</p>
     
      <div className="mt-2">
        <div className="">
          <div className="product-price">
            CZK {price}
          </div>
          {isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
}
