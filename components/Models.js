import { useState, useEffect } from "react";
import Link from "next/link";
import Spinner from "@/components/Spinner"; 

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

export default function MercedesModels({ products }) {
  const [loading, setLoading] = useState(false); 


  const handleModelClick = () => {
    setLoading(true); 
  };

 
  useEffect(() => {
    if (loading) {
      
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer); 
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Spinner />
        </div>
      )}

      <div className="">
      <h2 className="md:hidden text-center font-manrope font-bold text-2xl  text-black dark:text-slate-400 mb-8 max-xl:text-center">Originální náhradní díly pro Mercedes-Benz</h2>

        <div className="ml-2 mb-4 w-1/1 md:w-1/4 text-center">Vyberte model Mercedes-Benz</div>
        {sortedModels.map((model) => (
          <Link key={model.class} href={`/mercedes-benz/${model.class}`}>
            <div 
              onClick={handleModelClick} 
              className="w-1/1 md:w-1/4 mb-4 ml-2 relative p-6 border border-gray-300 rounded-lg text-center cursor-pointer transition-all duration-300 hover:brightness-75"
              style={{
                backgroundImage: `url(${model.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
              }}
            >
              <h3 className="text-white font-bold">{model.class}</h3>
              <p className="text-white">{`Modele: ${model.variants.join(", ")}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
