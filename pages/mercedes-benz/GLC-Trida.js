
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes GLC třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLC-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLC</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLC
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLC je kompaktní luxusní SUV, které bylo poprvé představeno v roce 2015. Třída GLC je nástupcem třídy GLK a nabízí modernější design, lepší jízdní vlastnosti a pokročilou technologii. GLC se stal velmi populární volbou mezi zákazníky, kteří hledají kombinaci luxusu, prostornosti a výkonu v SUV.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>X253 (2015–současnost):</strong> První a současná generace třídy GLC, která byla postavena na platformě třídy C a je k dispozici ve verzích SUV a kupé.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída GLC nabízí širokou škálu motorů, aby pokryla různé potřeby zákazníků. Mezi dostupné motory patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové: 2.0L čtyřválcové motory, 3.0L šestiválce a verze AMG GLC 43 a GLC 63 s vyšším výkonem.</li>
                    <li>Dieselové: 2.1L a 2.0L čtyřválcové turbodieselové motory, které nabízejí výbornou spotřebu paliva a dostatečný výkon.</li>
                    <li>Plug-in hybridní verze (GLC 350 e), která spojuje benzinový motor s elektromotorem pro lepší ekonomiku a nižší emise.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Nejnovější generace třídy GLC (X253) má následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4656 mm</li>
                    <li>Šířka: 1890 mm</li>
                    <li>Výška: 1644 mm</li>
                    <li>Rozvor: 2873 mm</li>
                    <li>Hmotnost: cca 1800–2100 kg (v závislosti na modelu)</li>
                    <li>Kapacita zavazadlového prostoru: 550 litrů (po sklopení zadních sedadel až 1600 litrů)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLC</h3>
                <p className="mb-4">
                    Aby Mercedes třídy GLC zůstal v perfektním stavu, doporučujeme následující údržbu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně kontrolujte hladinu motorového oleje a měňte olej a filtry podle doporučených intervalů.</li>
                    <li>Udržujte pneumatiky v dobrém stavu a kontrolujte jejich tlak pro zajištění optimální stability a bezpečnosti.</li>
                    <li>Pravidelně čistěte interiér a ošetřujte čalounění, aby interiér zůstal v dobrém stavu.</li>
                    <li>V zimě používejte ochranu proti soli a nečistotám na podvozku, abyste předešli korozi.</li>
                    <li>Provádějte pravidelné kontroly brzdového systému, zejména před zimními měsíci.</li>
                    <li>Před delšími cestami zkontrolujte stav akumulátoru a úroveň chladicí kapaliny, aby byla zajištěna spolehlivost vozu.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["X253", "X254"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
