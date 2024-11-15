
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes CLS třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/CLS-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-CLS</h1>
                <ProductsGrid products={products} />
            </div>
          

    <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Mercedes-Benz třídy CLS
      </h2>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
      <p className="mb-4">
        Mercedes-Benz třídy CLS byl představen v roce 2004 jako revoluční spojení mezi sedanem a kupé. 
        Model CLS se vyznačuje dynamickým designem čtyřdveřového kupé a se stal prvním svého druhu v luxusním segmentu. 
        CLS rychle získal popularitu díky své eleganci, výkonu a inovacím, a inspiroval i další automobilky k vytváření podobných modelů.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>První generace (C219, 2004–2010):</strong> Představila čtyřdveřové kupé a nabízela různé benzínové a dieselové motory.</li>
        <li><strong>Druhá generace (C218, 2011–2018):</strong> Vylepšený design, pokročilejší technologie a přidání varianty Shooting Brake.</li>
        <li><strong>Třetí generace (C257, 2018–současnost):</strong> Moderní design, nové technologie a úspornější motory, zaměřené na výkon i ekologii.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
      <p className="mb-4">
        Třída CLS je známá výkonnými motory. Některé oblíbené varianty motorů zahrnují:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Benzínové: 3.0L, 4.7L V8 (např. CLS 450, CLS 550).</li>
        <li>Dieselové: 2.1L, 3.0L (např. CLS 250d, CLS 350d).</li>
        <li>AMG: CLS 53 AMG a CLS 63 AMG s výkony až 600 koní.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
      <p className="mb-4">
        Typické technické údaje pro aktuální generaci (C257) jsou:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Délka: 4988 mm</li>
        <li>Šířka: 1890 mm</li>
        <li>Výška: 1435 mm</li>
        <li>Rozvor: 2939 mm</li>
        <li>Objem kufru: 520 litrů</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy CLS</h3>
      <p className="mb-4">
        Aby váš Mercedes třídy CLS zůstal ve skvělém stavu, doporučujeme:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Pravidelné prohlídky v autorizovaném servisu pro kontrolu motoru a převodovky.</li>
        <li>Měnit olej a filtry dle specifikací Mercedes-Benz.</li>
        <li>Udržovat čistotu laku a interiéru, zejména v zimě kvůli soli na silnicích.</li>
        <li>Kontrolovat stav brzd a pneumatik, které jsou klíčové pro bezpečnost a jízdní komfort.</li>
        <li>Chrání lak pomocí kvalitních vosků nebo keramických povlaků.</li>
      </ul>
    </section>
  


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["218", "257"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
