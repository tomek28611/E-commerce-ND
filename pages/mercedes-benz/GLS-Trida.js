
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes GLS třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/GLS-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-GLS</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy GLS
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLS, často označována jako "královna SUV", je luxusní velké SUV, které bylo poprvé představeno v roce 2006 pod názvem Mercedes-Benz GL. V roce 2015 byla třída GL přejmenována na GLS, aby lépe odrážela její postavení v hierarchii značky, která byla dříve označena jako třída S v segmentu SUV. Třída GLS se stala synonymem pro luxusní výbavu, výkonnost a komfort v kategorii SUV.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>X164 (2006–2012):</strong> První generace třídy GL, která byla později přejmenována na GLS, byla zaměřena na komfort a výkon s kapacitou pro až sedm cestujících.</li>
                    <li><strong>X166 (2012–2019):</strong> Druhá generace třídy GLS přinesla vylepšený design a větší důraz na technologii, včetně pokročilých asistenčních systémů a luxusního interiéru.</li>
                    <li><strong>V167 (2019–současnost):</strong> Nejnovější generace třídy GLS přináší ještě více luxusu, moderní technologie a elektrifikované motory, včetně plug-in hybridních verzí.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Mercedes-Benz GLS nabízí širokou škálu motorů, včetně benzinových, naftových a hybridních verzí. Mezi motory, které byly k dispozici v různých generacích, patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové motory: 3.0L V6, 4.7L V8, 5.5L V8 a 4.0L V8 twin-turbo (pro verzi AMG).</li>
                    <li>Dieselové motory: 3.0L V6 turbodiesel a 4.0L V8 turbodiesel pro vysoký točivý moment a efektivitu paliva.</li>
                    <li>Hybridní motory: 3.0L V6 plug-in hybrid, který kombinuje výkon s nižší spotřebou paliva a nižšími emisemi.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Třída GLS je známá svými impozantními rozměry a velkorysým prostorem. Některé z hlavních technických specifikací jsou:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 5215 mm</li>
                    <li>Šířka: 1956 mm</li>
                    <li>Výška: 1850 mm</li>
                    <li>Rozvor: 3135 mm</li>
                    <li>Hmotnost: cca 2500–3000 kg (v závislosti na motoru a výbavě)</li>
                    <li>Kapacita zavazadlového prostoru: 680 litrů (po sklopení zadních sedadel až 2300 litrů)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy GLS</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy GLS je luxusní SUV, které si zaslouží pravidelnou péči, aby zachovalo svůj vysoký standard komfortu a výkonu. Následující kroky vám pomohou udržet vaše GLS v perfektním stavu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně měňte motorový olej a filtry, aby motor běžel hladce a efektivně.</li>
                    <li>Kontrolujte a udržujte pneumatiky v dobrém stavu. S třídy GLS by měla být vybavena kvalitními pneumatikami, které zajistí bezpečnou jízdu i v náročných podmínkách.</li>
                    <li>Udržujte karoserii auta čistou a pravidelně ji ošetřujte proti korozi, zejména po zimních měsících.</li>
                    <li>V zimě je důležité pravidelně kontrolovat baterii a brzdový systém, aby auto bylo připraveno na náročné podmínky. Používejte kvalitní zimní pneumatiky pro maximální trakci.</li>
                    <li>Pravidelně kontrolujte úroveň chladicí kapaliny, brzdové kapaliny a dalších kapalin, aby všechny systémy fungovaly bez problémů.</li>
                    <li>Výměna vzduchového a kabinového filtru pro zajištění čistého a zdravého prostředí uvnitř vozu.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["X166", "X167"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
