
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly pro Mercedes Benz B třídy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/B-Trida" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-B</h1>
                <ProductsGrid products={products} />
            </div>
            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg  mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Náhradní díly pro Mercedes-Benz třídy A
                </h2>
                <p className="mb-4">
                    Mercedes-Benz třídy A je kompaktní automobil vyráběný německou automobilkou Mercedes-Benz. První generace byla uvedena na trh v roce 1997, a od té doby se stala jedním z nejoblíbenějších modelů v segmentu prémiových malých vozů. Třída A se vyznačuje moderním designem, pokročilými technologiemi a vysokou úrovní komfortu.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Historie Mercedes-Benz třídy A
                </h3>
                <p className="mb-4">
                    Historie třídy A začala v roce 1997, kdy Mercedes-Benz představil svůj první model této řady. Třída A byla navržena jako malý hatchback s vysokým komfortem a bezpečností, což se stalo charakteristickým znakem této modelové řady. V průběhu let prošla několika generacemi, každá z nich přinesla inovace v designu, technologiích a motorech.
                </p>
                <p className="mb-4">
                    První generace třídy A byla známá svým jedinečným designem a revolučním konceptem, který zahrnoval kompaktní rozměry a vysokou bezpečnostní úroveň. Druhá generace přinesla sportovnější vzhled, zatímco třetí a čtvrtá generace se zaměřily na moderní a luxusní prvky, které odpovídaly požadavkům dnešních zákazníků.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Silní motory a variabilní karoserie
                </h3>
                <p className="mb-4">
                    Mercedes-Benz třídy A je známý širokou nabídkou motorů, které vyhovují různým požadavkům zákazníků. Zákazníci mohou vybírat mezi benzinovými, naftovými motory i hybridními verzemi, které nabízejí kombinaci výkonu a úspornosti. Výkon motorů se pohybuje od 100 do více než 400 koní v závislosti na modelu a verzi.
                </p>
                <p className="mb-4">
                    Co se týče karoserie, třída A je k dispozici nejen jako hatchback, ale i jako sedán, což rozšiřuje možnosti výběru pro různé typy zákazníků. Tento model je známý svou sportovností, ale zároveň poskytuje komfortní jízdu, což je ideální pro každodenní použití.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Mercedes-Benz třídy A: Vynikající technologie a bezpečnost
                </h3>
                <p className="mb-4">
                    Mercedes-Benz třídy A vždy kladl důraz na inovace a technologie. Moderní modely jsou vybaveny nejnovějšími asistenty pro řidiče, pokročilými systémy infotainmentu a bezpečnostními technologiemi, které zahrnují automatické nouzové brzdění, adaptivní tempomat a další.
                </p>
                <p className="mb-4">
                    Tento model také disponuje inovativními motory, které jsou nejen výkonné, ale také úsporné a ekologické. Díky těmto technologiím a designu se třída A stala symbolem moderního a luxusního auta pro každodenní použití.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                    Mercedes-Benz třídy A: Záruka kvality
                </h3>
                <p>
                    Mercedes-Benz třídy A je synonymem pro kvalitu a spolehlivost. Tento model kombinuje výkon, styl a technologické inovace, které přitahují širokou škálu zákazníků. Ať už jde o městské dojíždění nebo dlouhé cesty, třída A nabízí vše, co si můžete přát od moderního luxusního automobilu.
                </p>
            </section>
        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["W246", "W247"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
