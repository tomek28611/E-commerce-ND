
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Audi</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Audi. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="canonical" href="https://www.nahradni-dily.com/audi" />

                <link rel="apple-touch-icon" sizes="180x180" href="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Originální náhradní díly pro BMW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz BMW." />
                <meta property="og:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta property="og:image:alt" content="Náhradní díly pro BMW" />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:description" content="Originální náhradní díly pro BMW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz BMW." />
                <meta property="og:url" content="https://www.nahradni-dily.com/" />
                <meta property="og:site_name" content="nahradni-dily.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Originální náhradní díly pro BMW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz BMW." />
                <meta name="twitter:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
                <meta name="twitter:image:alt" content="Náhradní díly pro BMW"></meta>
                <meta name="twitter:description" content="Originální náhradní díly pro BMW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz BMW."></meta>

            </Head>
            <div className="dark:bg-slate-700">
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly na vozy Audi</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Náhradní díly na vozy Audi
    </h2>
    <p className="mb-4">
        Audi je renomovaná německá automobilka, která je známá svou precizní výrobou, luxusními vozy a technologickými inovacemi. Historie značky sahá až do počátku 20. století a dnes je Audi symbolem pro vysoký výkon, komfort a moderní design.
    </p>

    <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        Historie značky Audi
    </h3>
    <p className="mb-4">
        Audi bylo založeno v roce 1909 Augustem Horchem a jeho cílem bylo vyrábět automobily, které by představovaly vrchol techniky a kvality. Společnost se rychle etablovala jako lídr na poli automobilového průmyslu, přičemž dnes je součástí koncernu Volkswagen Group.
    </p>
    <p className="mb-4">
        Audi se od svého vzniku stalo synonymem pro luxusní, výkonné a technologicky vyspělé automobily. Mezi nejznámější modely značky patří A3, A4, A6, A8 nebo SUV Q5 a Q7.
    </p>

    <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        Čím jsou vozy Audi charakteristické
    </h3>
    <p className="mb-4">
        Audi je známé pro své elegantní a aerodynamické designy, které kombinují luxus a sportovní charakter. Automobily Audi nabízejí vysoký výkon díky pokročilým motorům a inovativním technologiím, jako je pohon všech kol quattro nebo systém Audi Virtual Cockpit.
    </p>
    <p className="mb-4">
        Audi se také zaměřuje na udržitelnost, což dokazuje široká nabídka modelů s elektrickým pohonem, jako je Audi e-tron, které spojují ekologické vlastnosti s vysokým výkonem a luxusem.
    </p>

    <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        Jak pečovat o vůz Audi
    </h3>
    <p className="mb-4">
        Pro udržení vozu Audi v perfektním stavu je důležité pravidelně provádět údržbu a používat originální náhradní díly. Doporučuje se pravidelně měnit olej, kontrolovat stav pneumatik a brzd a provádět servisní prohlídky podle doporučení výrobce.
    </p>
    <p className="mb-4">
        V zimě nezapomínejte na ochranu proti soli a časté mytí vozu, aby se zabránilo korozi. Audi také nabízí moderní diagnostické systémy, které vám včas upozorní na potřebu servisu nebo výměny dílů.
    </p>

    <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        Audi: Symbol luxusu a inovace
    </h3>
    <p>
        Audi je synonymem pro inovace, luxus a výkon. Bez ohledu na to, zda hledáte sportovní vůz, rodinný automobil nebo prémiové SUV, Audi nabízí modely, které uspokojí potřeby i těch nejnáročnějších zákazníků.
    </p>
</section>



        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["audi", "Audi", "AUDI"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
