
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz S třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/S-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-S</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy S
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy S je vlajková loď mezi luxusními vozy německého výrobce, představená poprvé v roce 1972. Třída S vždy představovala špičkové technologie, nejvyšší komfort a inovace v oblasti bezpečnosti. S každou novou generací přináší tento model řadu průkopnických prvků, které později pronikají do celého automobilového průmyslu.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>W116 (1972–1980):</strong> První generace s průkopnickými prvky v oblasti bezpečnosti a komfortu.</li>
                    <li><strong>W126 (1979–1991):</strong> Úspěšný model s elegantním designem a lepší aerodynamikou.</li>
                    <li><strong>W140 (1991–1998):</strong> Luxusní model s pokročilými technologiemi, jako jsou dvojitá okna.</li>
                    <li><strong>W220 (1998–2005):</strong> Modernizovaný design s novými elektronickými prvky.</li>
                    <li><strong>W221 (2005–2013):</strong> Technologie jako DISTRONIC a Night Vision.</li>
                    <li><strong>W222 (2013–2020):</strong> Model s inovativními prvky jako Magic Body Control.</li>
                    <li><strong>W223 (2020–současnost):</strong> Nejnovější generace s rozšířenou realitou a elektrifikovanými motory.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída S nabízí širokou škálu motorů, které zahrnují benzínové, dieselové a hybridní jednotky:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové: 3.0L V6, 4.0L V8 twin-turbo, 6.0L V12 pro modely AMG.</li>
                    <li>Dieselové: 3.0L řadový šestiválec.</li>
                    <li>Hybridní: Plug-in hybridní verze s elektrickým dojezdem až 100 km.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Nejnovější generace W223 nabízí následující specifikace:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 5179 mm</li>
                    <li>Šířka: 1954 mm</li>
                    <li>Výška: 1503 mm</li>
                    <li>Rozvor: 3106 mm</li>
                    <li>Hmotnost: cca 2000 kg (v závislosti na modelu)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy S</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy S je sofistikované vozidlo, které vyžaduje pravidelnou péči, aby si udrželo svou výkonnost a luxusní vzhled:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Provádějte pravidelné výměny oleje a filtrů podle doporučení výrobce.</li>
                    <li>Udržujte systém klimatizace a ventilace pro maximální komfort.</li>
                    <li>Kontrolujte brzdový systém a pneumatiky, aby byly v perfektním stavu.</li>
                    <li>Čistěte kožený interiér a chráníte ho před opotřebením.</li>
                    <li>Servisujte technologické systémy, jako je DISTRONIC a Magic Body Control, v autorizovaných servisech.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["221", "222"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
