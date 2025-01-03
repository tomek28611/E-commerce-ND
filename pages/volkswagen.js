
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Volkswagen</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Volkswagen. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="canonical" href="https://www.nahradni-dily.com/volkswagen" />

                <link rel="apple-touch-icon" sizes="180x180" href="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Originální náhradní díly pro Volkswagen. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Volkswagen." />
                <meta property="og:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:image:alt" content="Náhradní díly pro Volkswagen" />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:description" content="Originální náhradní díly pro Volkswagen. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Volkswagen." />
                <meta property="og:url" content="https://www.nahradni-dily.com/" />
                <meta property="og:site_name" content="nahradni-dily.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Originální náhradní díly pro Volkswagen. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Volkswagen." />
                <meta name="twitter:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta name="twitter:image:alt" content="Náhradní díly pro Volkswagen"></meta>
                <meta name="twitter:description" content="Originální náhradní díly pro Volkswagen. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Volkswagen."></meta>

            </Head>
            <div className="dark:bg-slate-700">
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly na vozy Volkswagen</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Náhradní díly na vozy Volkswagen
                </h2>
                <p className="mb-4">
                    Volkswagen je renomovaná německá automobilka, která je známá svou spolehlivostí, kvalitou a inovacemi. Historie značky sahá až do 30. let 20. století a dnes je Volkswagen jedním z největších a nejznámějších výrobců automobilů na světě, známý pro své široké spektrum vozů pro každodenní použití.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Historie značky Volkswagen
                </h3>
                <p className="mb-4">
                    Volkswagen byl založen v roce 1937 a od svého vzniku se stal synonymem pro kvalitní a cenově dostupné automobily. Prvním modelem značky byl legendární Volkswagen Brouk (Beetle), který se stal ikonou automobilového průmyslu. Dnes je Volkswagen součástí koncernu Volkswagen Group, který zahrnuje i další známé značky, jako Audi, Porsche a Škoda.
                </p>
                <p className="mb-4">
                    Volkswagen nabízí širokou škálu modelů, od malých městských vozů, přes rodinné automobily, až po prémiová SUV a elektromobily, jako je Volkswagen ID.4.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Čím jsou vozy Volkswagen charakteristické
                </h3>
                <p className="mb-4">
                    Automobily Volkswagen jsou známé svou spolehlivostí, efektivitou a vynikajícím poměrem cena/výkon. Modely jako Volkswagen Golf, Passat, Tiguan nebo ID.3 jsou oblíbené díky své kvalitní konstrukci, komfortu a moderním technologiím. Volkswagen se také zaměřuje na ekologické technologie a vyvinul řadu elektromobilů, které kombinují nízkou spotřebu s vysokým výkonem.
                </p>
                <p className="mb-4">
                    Volkswagen je známý i svým přístupem k bezpečnosti a inovacím, které zahrnují pokročilé asistenční systémy, autonomní řízení a další moderní technologie.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Jak pečovat o vůz Volkswagen
                </h3>
                <p className="mb-4">
                    Pro udržení vozu Volkswagen v perfektním stavu je důležité pravidelně provádět údržbu a používat originální náhradní díly. Doporučuje se pravidelně měnit olej, kontrolovat stav pneumatik a brzd, a provádět servisní prohlídky podle doporučení výrobce.
                </p>
                <p className="mb-4">
                    Pro zajištění dlouhé životnosti vašeho vozu je doporučeno také pravidelně kontrolovat stav baterie u hybridních a elektrických modelů, a chránit vůz proti korozi, zejména v zimních měsících.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Volkswagen: Symbol spolehlivosti a inovací
                </h3>
                <p>
                    Volkswagen je synonymem pro spolehlivost, efektivitu a inovace. Bez ohledu na to, zda hledáte kompaktní městský vůz, rodinný automobil nebo moderní elektromobil, Volkswagen nabízí modely, které splní požadavky všech řidičů.
                </p>
            </section>




        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["vw", "VW", "Volkswagen"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
