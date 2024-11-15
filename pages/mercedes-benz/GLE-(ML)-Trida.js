
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz GLE a ML třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLE-(ML)-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLE / ML</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLE a ML
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy ML, později přejmenovaná na GLE, byla představena jako první SUV značky v roce 1997. Třída ML byla původně zaměřena na americký trh a rychle si získala popularitu díky svému luxusnímu interiéru, terénním schopnostem a pokročilým technologiím. V roce 2015 Mercedes přejmenoval model ML na GLE jako součást nové strategie pojmenování modelů.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>W163 (1997–2005):</strong> První generace ML, s robustní konstrukcí a pohonem 4x4.</li>
                    <li><strong>W164 (2005–2011):</strong> Modernizovaná druhá generace s lepším komfortem a novými motory.</li>
                    <li><strong>W166 (2011–2019):</strong> Třetí generace ML, v roce 2015 přejmenovaná na GLE. Nabízí více luxusu a nových technologií.</li>
                    <li><strong>W167 (2019–současnost):</strong> Současná generace GLE s pokročilými technologiemi a hybridními variantami.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída GLE a ML nabízí širokou škálu motorů, včetně benzínových, dieselových a hybridních verzí:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové: 2.0L čtyřválec, 3.0L a 4.0L V6 a V8 twin-turbo pro sportovní verze AMG.</li>
                    <li>Dieselové: 2.1L a 3.0L šestiválce, které kombinují výkon a úspornost.</li>
                    <li>Hybridní: Plug-in hybridní varianty, které umožňují jízdu na elektřinu až do 100 km.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Nejnovější generace W167 nabízí následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4930 mm</li>
                    <li>Šířka: 1950 mm</li>
                    <li>Výška: 1795 mm</li>
                    <li>Rozvor: 2995 mm</li>
                    <li>Hmotnost: cca 2200 kg (v závislosti na modelu)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLE a ML</h3>
                <p className="mb-4">
                    Pro zachování výkonnosti a luxusu třídy GLE nebo ML je důležité pravidelně dbát o jeho údržbu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Provádějte pravidelné výměny oleje a filtrů podle specifikací výrobce.</li>
                    <li>Kontrolujte systém odpružení a pohon všech kol, aby bylo vozidlo připravené na různé terénní podmínky.</li>
                    <li>Udržujte pneumatiky v dobrém stavu, včetně pravidelných kontrol tlaku a vyvážení.</li>
                    <li>Pečujte o kožený interiér pomocí speciálních přípravků na čištění a ochranu.</li>
                    <li>Servisujte elektronické systémy a pravidelně aktualizujte software, zejména u hybridních variant.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["166", "167", "292"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
