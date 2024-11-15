
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes G třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/G-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-G</h1>
                <ProductsGrid products={products} />
            </div>
             

    <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Mercedes-Benz třídy G
      </h2>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
      <p className="mb-4">
        Mercedes-Benz třídy G, známý také jako G-Wagen, má bohatou historii sahající do konce 70. let, kdy byl původně navržen pro vojenské účely. V roce 1979 byl představen také jako civilní vozidlo a od té doby se stal jedním z nejikoničtějších terénních vozů na světě. Díky svému robustnímu designu a schopnostem v terénu se třída G stala symbolem luxusu i výkonnosti v drsných podmínkách.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>W460 (1979–1991):</strong> První generace, určená pro vojenské i civilní použití.</li>
        <li><strong>W463 (1990–současnost):</strong> Modernizovaná verze s luxusními úpravami a vylepšenou technologií, zahrnující i modely AMG.</li>
        <li><strong>G63 AMG:</strong> Výkonný model s motorem V8, který spojuje luxus s výkonem.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
      <p className="mb-4">
        Třída G nabízí několik motorových variant, od úspornějších dieselů až po výkonné benzínové a AMG verze:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Dieselové: 2.9L, 3.0L (např. G 350d).</li>
        <li>Benzínové: 4.0L V8 twin-turbo (např. G 500, G 63 AMG).</li>
        <li>AMG: Výkonný model G63 AMG s výkonem přes 500 koní pro maximální off-road zážitek.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
      <p className="mb-4">
        Aktuální generace W463 zahrnuje následující technické specifikace:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Délka: 4817 mm</li>
        <li>Šířka: 1931 mm</li>
        <li>Výška: 1969 mm</li>
        <li>Rozvor: 2890 mm</li>
        <li>Světla výška: 241 mm</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy G</h3>
      <p className="mb-4">
        Správná péče o váš Mercedes-Benz třídy G je klíčová pro udržení jeho výkonu v terénu i na silnici:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Pravidelně kontrolujte stav podvozku a ochranných prvků, zejména po jízdě v náročném terénu.</li>
        <li>Provádějte časté výměny oleje a filtrů podle doporučení výrobce, zejména u výkonných motorů AMG.</li>
        <li>Kontrolujte pneumatiky vhodné pro off-road i silniční použití.</li>
        <li>Čistěte exteriér a podvozek od bláta a nečistot, aby se předešlo korozi.</li>
        <li>Servisujte převodový systém a uzávěrky diferenciálů pro plynulý výkon v terénu.</li>
      </ul>
    </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["463"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
