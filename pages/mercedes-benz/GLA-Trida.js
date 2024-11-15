
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes GLA třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLA-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLA</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLA
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLA je kompaktní SUV, které bylo poprvé představeno v roce 2013. Třída GLA byla navržena pro městské i venkovní jízdy, s důrazem na pohodlí, styl a pokročilé technologie. Cílem Mercedesu bylo vytvořit luxusní kompaktní SUV, které by uspokojilo potřeby řidičů hledajících kombinaci městské obratnosti a terénní schopnosti.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>X156 (2013–2019):</strong> První generace třídy GLA s moderním designem a kompaktním rozměrem.</li>
                    <li><strong>H247 (2019–současnost):</strong> Druhá generace, která přinesla více prostoru a technologií, jako je pokročilý infotainment systém MBUX.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída GLA nabízí širokou škálu motorů, od benzínových a dieselových po hybridní varianty:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové: 1.3L a 2.0L čtyřválcové motory s různými výkonovými variantami, včetně AMG modelů.</li>
                    <li>Dieselové: 1.5L a 2.0L čtyřválcové turbodieselové motory pro ekonomičtější jízdu.</li>
                    <li>Hybridní: Plug-in hybridní varianta s možností čistě elektrické jízdy až do 70 km.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Nejnovější generace H247 má následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4410 mm</li>
                    <li>Šířka: 1834 mm</li>
                    <li>Výška: 1611 mm</li>
                    <li>Rozvor: 2729 mm</li>
                    <li>Hmotnost: cca 1500–1700 kg (v závislosti na modelu)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLA</h3>
                <p className="mb-4">
                    Pro zachování výkonu a vzhledu třídy GLA doporučujeme následující údržbu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně měňte olej a filtry dle pokynů výrobce.</li>
                    <li>Kontrolujte stav pneumatik a tlak vzduchu pro optimální výkon a bezpečnost.</li>
                    <li>Čistěte interiér a ošetřujte čalounění pomocí kvalitních přípravků.</li>
                    <li>V zimě používejte ochranu podvozku proti korozi a soli.</li>
                    <li>Pravidelně kontrolujte brzdový systém a akumulátor, zejména před zimním obdobím.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["X156", "H247"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
