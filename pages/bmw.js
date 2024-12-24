
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro BMW</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="canonical" href="https://www.nahradni-dily.com/mercedes-benz/A-Trida" />

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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly na vozy BMW</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Náhradní díly na vozy BMW
                </h2>
                <p className="mb-4">
                    BMW je renomovaná německá automobilka, která se proslavila svým důrazem na kvalitu, inovace a sportovní výkon. Historie značky sahá až do počátku 20. století a dnes je synonymem pro luxusní a dynamické automobily, které jsou uznávány po celém světě.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Historie značky BMW
                </h3>
                <p className="mb-4">
                    BMW (Bayerische Motoren Werke) byla založena v roce 1916 v Mnichově jako výrobce leteckých motorů. Po první světové válce se zaměřila na výrobu motocyklů a automobilů, přičemž první automobil značky BMW byl představen v roce 1928. Od té doby se BMW etablovalo jako výrobce výkonných vozů.
                </p>
                <p className="mb-4">
                    V průběhu desetiletí se BMW stalo synonymem pro luxus, výkon a inovaci. Dnes je součástí koncernu BMW Group, který zahrnuje značky jako Mini a Rolls-Royce.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Čím jsou vozy BMW charakteristické
                </h3>
                <p className="mb-4">
                    Automobily BMW jsou známé svým ikonickým designem, výkonnými motory a precizním zpracováním. Modely jako BMW 3, 5 a 7 řada nebo SUV X5 a X6 spojují luxus, sportovní charakter a technologické inovace. Každý model je navržen tak, aby poskytoval skvělý zážitek z jízdy.
                </p>
                <p className="mb-4">
                    BMW je také synonymem pro „Ultimate Driving Machine“, což znamená zaměření na dokonalý zážitek z jízdy díky vysoce kvalitním materiálům a preciznímu inženýrství.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Jak pečovat o vůz BMW
                </h3>
                <p className="mb-4">
                    Aby váš vůz BMW zůstal v perfektním stavu, je nezbytné pravidelně provádět údržbu a používat originální náhradní díly. Doporučuje se pravidelně měnit olej, kontrolovat stav pneumatik a brzd a provádět pravidelné servisní prohlídky.
                </p>
                <p className="mb-4">
                    Pro zajištění dlouhověkosti vašeho vozu je důležité používat kvalitní palivo a pečovat o interiér, včetně častého čištění a ochrany kůže a textilií.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    BMW: Symbol luxusu a výkonu
                </h3>
                <p>
                    BMW představuje spojení luxusu, výkonu a inovací. Bez ohledu na to, zda hledáte sportovní vůz, rodinný automobil nebo prémiové SUV, značka BMW nabízí modely, které splní požadavky i těch nejnáročnějších řidičů.
                </p>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["bmw", "Bmw", "BMW"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
