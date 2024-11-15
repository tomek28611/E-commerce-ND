
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz SL třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/SL-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-SL</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Mercedes-Benz třídy SL
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy SL je jedním z nejikoničtějších sportovních automobilů na světě, který byl poprvé představen v roce 1952 pod názvem 300 SL (W194). Tento model se stal legendou díky své technologii, designu a výkonu, zejména díky inovativnímu zavěšení, které umožnilo rychlostní rekordy. Třída SL byla od svého vzniku symbolem luxusu a sportovního výkonu, přičemž každý nový model přinášel novinky v oblasti technologie, designu a pohodlí. V průběhu let se třída SL vyvinula, ale její základní charakteristika - perfektní kombinace výkonu a elegance - zůstala zachována.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>W194 (1952–1955):</strong> První generace Mercedesu SL, která se proslavila svou unikátní technologií a neuvěřitelnými výkonovými parametry.</li>
                    <li><strong>R107 (1971–1989):</strong> Druhá generace třídy SL, která se stala velmi populární, zejména díky pohodlí a modernizovaným motorům. Tento model byl vyráběn dlouhých 18 let.</li>
                    <li><strong>R129 (1989–2001):</strong> Třetí generace SL přinesla moderní design, vylepšené technologie a výkonné motory. Stala se populární mezi milovníky sportovních aut i mezi celebritami.</li>
                    <li><strong>R230 (2001–2011):</strong> Čtvrtá generace přinesla plně automatizovanou střechu, inovace v oblasti bezpečnosti a výkonu, a také novou úroveň komfortu.</li>
                    <li><strong>R231 (2012–2020):</strong> Pátá generace SL byla ještě více zaměřena na výkon a technologii, s novými motory a vylepšeným interiérem, který spojuje luxus s moderními technologiemi.</li>
                    <li><strong>R232 (2020–současnost):</strong> Nejnovější generace SL, která je dostupná pouze v konfiguraci se skládací střechou a výkonem AMG. Tento model je sportovním autem pro náročné s výrazným zaměřením na výkon a inovace.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
                <p className="mb-4">
                    Třída SL nabízí širokou škálu motorů, od efektivních šestiválců po výkonné osmiválce a motory AMG pro nejvyšší výkon. Mezi typy motorů používané v různých generacích SL patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Benzínové motory: 3.0L V6, 4.7L V8, 5.5L V8 a 6.0L V12 pro různé úrovně výkonu.</li>
                    <li>Motory AMG: 4.0L V8 twin-turbo a 6.0L V12 pro vysoký výkon a zrychlení.</li>
                    <li>Elektrifikované motory: Nejnovější modely SL zahrnují hybridní možnosti, které kombinují elektrický pohon s výkonem tradičních motorů.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy SL je známý nejen pro svůj výkon, ale i pro své impozantní rozměry a luxusní vybavení. Některé z hlavních technických specifikací jsou:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Délka: 4560 mm</li>
                    <li>Šířka: 1895 mm</li>
                    <li>Výška: 1310 mm</li>
                    <li>Rozvor: 2560 mm</li>
                    <li>Hmotnost: cca 1700–1800 kg (v závislosti na motoru a výbavě)</li>
                    <li>Kapacita zavazadlového prostoru: 200 litrů (při zavřené střeše, 335 litrů u varianty s pevným stropem)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy SL</h3>
                <p className="mb-4">
                    Mercedes-Benz třídy SL je sportovní auto, které vyžaduje pravidelnou údržbu, aby si zachovalo svůj výkon a luxusní vzhled. Následující tipy vám pomohou udržet vaše SL v perfektním stavu:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Pravidelně měňte motorový olej a filtry pro udržení vysokého výkonu motoru.</li>
                    <li>Kontrolujte pneumatiky, zejména u sportovních modelů, aby zajistily optimální trakci a bezpečnost na silnici.</li>
                    <li>Pečujte o interiér, zejména o kožené sedadla a panely, a pravidelně je ošetřujte, aby zůstaly v dobrém stavu.</li>
                    <li>V zimních měsících je důležité zkontrolovat stav baterie, brzdový systém a používat kvalitní zimní pneumatiky pro maximální bezpečnost na kluzkých silnicích.</li>
                    <li>Výměna vzduchového filtru a kabinového filtru pro zajištění čistého a zdravého prostředí uvnitř vozu.</li>
                    <li>Pravidelně kontrolujte kapacity chladicí kapaliny a brzdové kapaliny, abyste zajistili, že všechny systémy fungují správně.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["232", "231", "230"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
