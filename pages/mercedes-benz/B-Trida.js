
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz B třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/B-Trida" />
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
            <div className="dark:bg-slate-700">
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-B</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Mercedes-Benz Třídy B
      </h2>

 
      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          Historie modelu
        </h3>
        <p className="mb-4">
          Mercedes-Benz Třídy B byl představen v roce 2005 a od té doby prošel několika facelifty a generacemi. Model ten kombinuje praktickou stránku minivanu s dynamickým designem typicznym dla Mercedes-Benz.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          Rozdíly mezi jednotlivými roky
        </h3>
        <ul>
          <li>
            **W245 (2005-2011):** První generace, která položila základy modelu. Vyznačovala se prostorným interiérem a širokou paletou silników.
          </li>
          <li>
            **W246 (2011-2018):** Druhá generace přinesla modernější design, vylepšené technologie a vyšší úroveň komfortu.
          </li>
          <li>
            **W247 (2018-současnost):** Třetí generace se vyznačuje ještě dynamičtějším designem, bohatým výbavou a širokou paletou hybridových a elektrických pohonů.
          </li>
        </ul>
      </div>

  
      <div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          Motory
        </h3>
        <p className="mb-4">
          Mercedes-Benz Třídy B byl nabízen s širokou paletou benzínových a dieselových motorů. V posledních letech do nabídky zařazono také hybridní a elektrické pohony. 
        </p>
      
      </div>

     
    </section>
        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["W246", "W247"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
