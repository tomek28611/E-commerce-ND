
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes E třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
               <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/E-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-E</h1>
                <ProductsGrid products={products} />
            </div>
         {
 
    <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Mercedes-Benz třídy E
      </h2>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
      <p className="mb-4">
        Mercedes-Benz třídy E je jedním z nejikoničtějších modelů značky. První vozy této třídy se objevily v roce 1953 pod označením W120. 
        Třída E je známá svou všestranností a inovacemi, a proto zůstává jedním z nejprodávanějších modelů v historii Mercedesu.
      </p>
      <p className="mb-4">
        Písmeno "E" označuje "Einspritzung" (vstřikování paliva), což bylo v době zavedení třídy průkopnické. Postupem času třída E získala pověst spolehlivosti a luxusu, kterou si drží dodnes.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>W120 (1953–1962):</strong> Známý jako "Ponton," první sedan této třídy.</li>
        <li><strong>W124 (1984–1995):</strong> Jeden z nejtrvanlivějších modelů, známý svou kvalitou zpracování.</li>
        <li><strong>W210 (1995–2002):</strong> Inovativní design s oválnými světlomety.</li>
        <li><strong>W213 (2016–současnost):</strong> Nejnovější generace s pokročilými technologiemi a moderním designem.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
      <p className="mb-4">
        Třída E nabízí širokou škálu motorů, od úsporných dieselových po výkonné benzínové a hybridní varianty:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Dieselové: 2.0L, 3.0L (např. E 220d, E 350d).</li>
        <li>Benzínové: 2.0L, 3.0L, 4.0L V8 (např. E 300, E 450).</li>
        <li>Hybridní: Plug-in hybridy kombinující benzín nebo naftu s elektromotorem.</li>
        <li>AMG: Výkonné modely jako E 53 AMG a E 63 AMG s výkonem přes 600 koní.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
      <p className="mb-4">
        Aktuální generace W213 zahrnuje následující technické specifikace:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Délka: 4935 mm</li>
        <li>Šířka: 1852 mm</li>
        <li>Výška: 1460 mm</li>
        <li>Rozvor: 2939 mm</li>
        <li>Objem kufru: 540 litrů</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy E</h3>
      <p className="mb-4">
        Správná péče o váš Mercedes-Benz třídy E zajistí jeho dlouhou životnost a bezproblémový provoz:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Pravidelně měňte olej a filtry dle doporučení výrobce.</li>
        <li>Kontrolujte stav podvozku, brzd a pneumatik.</li>
        <li>Provádějte diagnostiku motoru pro včasné odhalení problémů.</li>
        <li>Chraňte lak pravidelným voskováním, zejména v zimě.</li>
        <li>Servisujte klimatizaci a další systémy, aby zůstaly efektivní.</li>
      </ul>
    </section>
  
}

        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["212", "213"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
