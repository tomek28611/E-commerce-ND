
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes GLK třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLK-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLK</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLK
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLK byl kompaktní luxusní SUV, který byl vyráběn mezi lety 2008 a 2015. Třída GLK byla navržena jako alternativa k vozům jako BMW X3 nebo Audi Q5, kombinující silný výkon s luxusními funkcemi a robustní konstrukcí. Po sedmi letech výroby byla třída GLK nahrazena modelem GLC, který přinesl modernější design a technologie.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>X204 (2008–2015):</strong> První a poslední generace třídy GLK, která byla vyráběna mezi lety 2008 a 2015, než byla nahrazena modelem GLC. GLK byl postaven na platformě třídy C a byl k dispozici ve verzích s pohonem všech kol (4MATIC) i s pohonem pouze na zadní nápravu.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Mercedes-Benz GLK nabízel širokou škálu motorů, od benzínových po naftové motory, aby pokryl různé potřeby zákazníků. Mezi typy motorů patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové motory: 2.5L V6, 3.5L V6 a 2.1L 4válcové motory. Některé modely měly také verze AMG s vyšším výkonem.</li>
                    <li>Dieselové motory: 2.1L 4válcové turbodiesely a 3.0L V6 turbodiesely, které nabízely vysoký točivý moment a výbornou spotřebu paliva.</li>
                    <li>Všechny modely byly k dispozici s pohonem všech kol (4MATIC) nebo s pohonem na zadní nápravu.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Třída GLK měla následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4520 mm</li>
                    <li>Šířka: 1840 mm</li>
                    <li>Výška: 1689 mm</li>
                    <li>Rozvor: 2755 mm</li>
                    <li>Hmotnost: cca 1700–2000 kg (v závislosti na motoru a výbavě)</li>
                    <li>Kapacita zavazadlového prostoru: 450 litrů (po sklopení zadních sedadel až 1550 litrů)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLK</h3>
                <p className="mb-4">
                    Aby Mercedes třídy GLK zůstal v perfektním stavu, doporučujeme následující údržbu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně měňte motorový olej a filtry podle doporučených intervalů, aby motor fungoval hladce.</li>
                    <li>Kontrolujte a udržujte pneumatiky v dobrém stavu, pravidelně kontrolujte jejich tlak a provádějte výměnu pneumatik podle sezóny.</li>
                    <li>Udržujte karoserii auta čistou a pravidelně ji ošetřujte, aby se zabránilo korozi.</li>
                    <li>V zimě zkontrolujte baterii a brzdový systém, aby auto bylo připraveno na studené podmínky.</li>
                    <li>Pravidelně kontrolujte úroveň chladicí kapaliny, zejména při vyšších teplotách nebo před dlouhými cestami.</li>
                    <li>Nezapomínejte na výměnu vzduchových a kabinových filtrů pro zajištění čerstvého vzduchu v interiéru.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["204"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
