
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz CLA třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/CLA-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-CLA</h1>
                <ProductsGrid products={products} />
            </div>
             {

                <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                        Mercedes-Benz třídy CLA
                    </h2>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                    <p className="mb-4">
                        Mercedes-Benz třídy CLA byl poprvé představen v roce 2013 jako sportovnější a kompaktnější alternativa k tradiční třídě C.
                        Model byl navržen tak, aby přilákal mladší zákazníky díky modernímu designu, výkonným motorům a pokročilým technologiím.
                        CLA byl jedním z prvních modelů Mercedesu dostupných ve formě čtyřdveřového kupé, které se stalo charakteristickým rysem této třídy.
                    </p>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>C117 (2013–2019):</strong> První generace, která sdílela platformu s třídou A. K dispozici byla i sportovní verze AMG.</li>
                        <li><strong>C118 (2019–současnost):</strong> Druhá generace s výrazně modernizovaným interiérem, lepší aerodynamikou a pokročilými technologiemi.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                    <p className="mb-4">
                        Mercedes-Benz třídy CLA je nabízen s širokou škálou motorů, od benzínových čtyřválců po výkonné AMG varianty.
                        Mezi nejčastější patří:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Benzínové: 1.3L, 2.0L (např. CLA 200, CLA 250).</li>
                        <li>Dieselové: 1.5L, 2.0L (např. CLA 200d, CLA 220d).</li>
                        <li>AMG: Výkonné verze jako CLA 35 AMG a CLA 45 AMG s výkonem přes 300 koní.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                    <p className="mb-4">
                        Typické technické údaje pro aktuální generaci (C118) jsou:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Délka: 4688 mm</li>
                        <li>Šířka: 1830 mm</li>
                        <li>Výška: 1439 mm</li>
                        <li>Rozvor: 2729 mm</li>
                        <li>Objem kufru: 460 litrů</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy CLA</h3>
                    <p className="mb-4">
                        Aby váš Mercedes třídy CLA zůstal ve skvělém stavu, doporučujeme:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Pravidelně měnit olej a filtry podle servisního plánu.</li>
                        <li>Udržovat čistotu karoserie a interiéru, především v zimě kvůli soli.</li>
                        <li>Kontrolovat stav pneumatik a správný tlak.</li>
                        <li>Pravidelně aktualizovat software a diagnostiku u autorizovaného servisu.</li>
                        <li>Ochránit lak pomocí vosků nebo keramických povlaků.</li>
                    </ul>
                </section>

            }

        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["C118", "C117"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
