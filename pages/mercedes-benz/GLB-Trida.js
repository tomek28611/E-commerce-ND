
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes GLB třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLB-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLB</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLB
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLB je kompaktní SUV, které bylo poprvé představeno v roce 2019. Třída GLB je novinkou v portfoliu Mercedesu, která kombinuje vlastnosti SUV s prostorem pro rodinu. Tento model byl navržen tak, aby nabízel všestrannost, prostornost a technologickou vyspělost, a zároveň si zachoval charakteristickou eleganci a luxus značky Mercedes.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>H247 (2019–současnost):</strong> První a současná generace třídy GLB, která byla navržena jako kompaktní SUV s možností až 7 míst pro cestující.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída GLB nabízí širokou škálu motorů pro různé potřeby zákazníků. Mezi dostupné motory patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové: 1.3L a 2.0L čtyřválcové motory s různými výkonovými variantami, včetně verze AMG GLB 35.</li>
                    <li>Dieselové: 2.0L čtyřválcové turbodieselové motory pro lepší ekonomiku spotřeby.</li>
                    <li>Plug-in hybridní verze (GLB 250 e), která nabízí kombinaci benzinového motoru a elektromotoru pro úspornější a ekologičtější jízdu.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Nejnovější generace třídy GLB (H247) má následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4634 mm</li>
                    <li>Šířka: 1834 mm</li>
                    <li>Výška: 1658 mm</li>
                    <li>Rozvor: 2829 mm</li>
                    <li>Hmotnost: cca 1700–1900 kg (v závislosti na modelu)</li>
                    <li>Kapacita zavazadlového prostoru: 570 litrů (po sklopení zadních sedadel až 1755 litrů)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLB</h3>
                <p className="mb-4">
                    Aby Mercedes třídy GLB zůstal v perfektním stavu, doporučujeme následující údržbu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně měňte motorový olej a filtry, aby motor fungoval efektivně a bez problémů.</li>
                    <li>Kontrolujte stav pneumatik a tlak vzduchu pro optimální bezpečnost a komfort.</li>
                    <li>Udržujte čistotu interiéru a pravidelně ošetřujte čalounění, aby vydrželo co nejdéle.</li>
                    <li>V zimě používejte ochranu podvozku proti soli a nečistotám z komunikací.</li>
                    <li>Pravidelně kontrolujte brzdový systém, zejména před zimní sezónou.</li>
                    <li>Při delších cestách sledujte úroveň kapaliny v chladiči a stav akumulátoru, aby byla zajištěna maximální spolehlivost.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["X247"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
