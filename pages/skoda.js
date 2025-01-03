
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly na vozy Škoda</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Škoda. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="canonical" href="https://www.nahradni-dily.com/skoda" />

                <link rel="apple-touch-icon" sizes="180x180" href="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Originální náhradní díly pro Škoda. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Škoda." />
                <meta property="og:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:image:alt" content="Náhradní díly pro Škoda" />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:description" content="Originální náhradní díly pro Škoda. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Škoda." />
                <meta property="og:url" content="https://www.nahradni-dily.com/" />
                <meta property="og:site_name" content="nahradni-dily.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Originální náhradní díly pro Škoda. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Škoda." />
                <meta name="twitter:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta name="twitter:image:alt" content="Náhradní díly pro Škoda"></meta>
                <meta name="twitter:description" content="Originální náhradní díly pro Škoda. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Škoda."></meta>

            </Head>
            <div className="dark:bg-slate-700">
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly na vozy Škoda</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Náhradní díly na vozy Škoda
                </h2>
                <p className="mb-4">
                    Škoda Auto je jednou z nejznámějších českých automobilových značek, jejíž historie sahá až do konce 19. století. Díky kombinaci tradice a moderních technologií si vozy Škoda získaly celosvětové uznání jako spolehlivé, funkční a ekonomické automobily.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Historie značky Škoda
                </h3>
                <p className="mb-4">
                    Historie značky Škoda začala v roce 1895, kdy Václav Laurin a Václav Klement založili firmu na výrobu jízdních kol. První automobil, Voiturette A, byl představen v roce 1905. Spojením s plzeňskou Škodovkou v roce 1925 vznikla ikonická značka Škoda.
                </p>
                <p className="mb-4">
                    V průběhu desetiletí se Škoda stala symbolem kvality a spolehlivosti. Po roce 1991, kdy se stala součástí koncernu Volkswagen, získala přístup k moderním technologiím a pokročilým inovacím, které uspokojují nároky dnešních zákazníků.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Čím jsou vozy Škoda charakteristické
                </h3>
                <p className="mb-4">
                    Automobily Škoda se vyznačují nadčasovým designem, spolehlivými motory a praktickými řešeními. Populární modely, jako jsou Octavia, Fabia nebo Kodiaq, nabízejí širokou škálu výbavy, která uspokojí jak rodiny, tak firemní zákazníky.
                </p>
                <p className="mb-4">
                    Typickým znakem vozů Škoda je koncept „Simply Clever“, který zahrnuje chytrá řešení, jako například deštníky ukryté ve dveřích, odnímatelné LED svítilny v zavazadlovém prostoru nebo praktické držáky na lahve.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Jak pečovat o vůz Škoda
                </h3>
                <p className="mb-4">
                    Aby váš vůz Škoda zůstal ve výborném stavu, je důležité pravidelně provádět údržbu. Doporučuje se měnit olej podle pokynů výrobce, kontrolovat stav pneumatik a brzd a používat originální náhradní díly.
                </p>
                <p className="mb-4">
                    V zimním období nezapomínejte na ochranu proti soli a pravidelné mytí podvozku. Moderní vozy Škoda jsou vybaveny diagnostickými systémy, které vás včas upozorní na potřebu servisu nebo výměny dílů.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Škoda: Symbol kvality a inovace
                </h3>
                <p>
                    Škoda Auto je synonymem pro kvalitu, spolehlivost a inovaci. Bez ohledu na to, zda hledáte rodinný vůz, městský hatchback nebo SUV, značka Škoda nabízí modely, které splní potřeby každého řidiče.
                </p>
            </section>

        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["Skoda", "Škoda"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
