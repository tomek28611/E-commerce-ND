
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Části karoserie auta Mercedes Benz | dveře, blatník, nárazník, kapota, chladič, blatníky, lampy</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Prvky karoserie, dveře, blatník, nárazník, kapota, světla, chladič, blatníky, střecha."
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/casti-karoserie-auta" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly Části karoserie auta Mercedes Benz</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Díly karoserie Mercedes-Benz
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
                <p className="mb-4">
                    Karoserie je základem každého vozidla, chrání jeho mechanické komponenty a poskytuje strukturu pro všechny vnější části. Mercedes-Benz je známý svou vysokou kvalitou a precizností výroby, a proto je důležité při opravách používat originální díly. V tomto článku se zaměříme na různé komponenty karoserie, které jsou běžně používány u vozidel Mercedes-Benz, včetně dveří, blatníků, kapot, kufrů, nárazníků, světel a dalších součástí. Po kolizích často poskytujeme originální díly, které odpovídají specifikacím vozu a častokrát i barvě, což eliminuje nutnost lakování.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Hlavní komponenty karoserie Mercedes-Benz</h3>
                <p className="mb-4">
                    Karoserie Mercedes-Benz je složena z mnoha dílů, které jsou navrženy pro vysokou odolnost, bezpečnost a estetiku. Zde jsou některé z nejběžnějších součástí:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Dveře:</strong> Dveře vozidla jsou jedním z nejdůležitějších prvků karoserie, které slouží nejen pro vstup a výstup z vozidla, ale i pro ochranu cestujících při nehodách. U Mercedes-Benz jsou dveře často vyrobeny z lehkých, ale pevných materiálů, jako je hliník, což zajišťuje jejich dlouhou životnost a bezpečnost.</li>
                    <li><strong>Blatníky:</strong> Blatníky chrání vozidlo před nečistotami, vodou a dalšími vnějšími vlivy. Při nehodě jsou často prvním místem, které je poškozeno. U Mercedes-Benz jsou blatníky navrženy tak, aby absorbovaly nárazy a minimalizovaly poškození ostatních částí karoserie.</li>
                    <li><strong>Kapot:</strong> Kapota slouží jako ochrana motoru a dalších důležitých komponent pod ní. Originální kapoty jsou vyrobeny z materiálů, které zajišťují odolnost proti korozi a vysoké teploty.</li>
                    <li><strong>Klapy zavazadlového prostoru (kufry):</strong> Klapky zavazadlového prostoru jsou navrženy tak, aby umožnily snadný přístup do zavazadlového prostoru. Mercedes-Benz často používá pokročilé mechanismy otevírání, které zajišťují tichý a plynulý pohyb.</li>
                    <li><strong>Nárazníky:</strong> Nárazníky jsou klíčové pro ochranu vozidla při nárazech a kolizích. U Mercedes-Benz se nárazníky často vyrábějí z vysoce odolných plastů nebo kompozitních materiálů, které absorbují nárazy a minimalizují poškození.</li>
                    <li><strong>Světla:</strong> Světla, včetně předních světlometů, zadních světel a blinkrů, jsou nezbytná pro bezpečnost jízdy. Mercedes-Benz používá moderní technologii, jako je LED a adaptivní světlomety, které zajišťují optimální viditelnost za všech podmínek.</li>
                    <li><strong>Nosné elementy:</strong> Nosné elementy zahrnují rám, příčníky a další struktury, které podporují celkovou stabilitu vozidla. Tyto části jsou navrženy tak, aby byly silné, lehké a odolné vůči stresu a nárazům.</li>
                    <li><strong>Střecha:</strong> Střecha vozidla chrání cestující před povětrnostními vlivy. U vozidel Mercedes-Benz jsou střechy vyrobeny z pevných materiálů, včetně hliníku, a mohou být vybaveny skleněnými panely nebo panoramatickými střechami pro lepší zážitek z jízdy.</li>
                    <li><strong>Čtvrtiny karoserie (boční panely):</strong> Čtvrtiny karoserie zahrnují boční panely vozidla, které poskytují strukturu a ochranu. Tyto panely jsou obvykle vyrobeny z kovu nebo kompozitních materiálů a jsou navrženy tak, aby absorbovaly nárazy a minimalizovaly poškození v případě kolize.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Vozidla po kolizích</h3>
                <p className="mb-4">
                    Při nehodách je často nutné vyměnit poškozené části karoserie. Mercedes-Benz klade důraz na kvalitu a bezpečnost, a proto používá pouze originální díly pro opravy. Všechny náhradní díly jsou vyrobeny tak, aby dokonale zapadly do konstrukce vozidla, což zajišťuje nejen jejich správnou funkčnost, ale i estetický vzhled.
                </p>
                <p className="mb-4">
                    V případě oprav po kolizi máme k dispozici originální náhradní díly, které jsou přesně takové, jaké byly v původním vozidle. Často se stává, že dokonce i barva dílů odpovídá požadavkům zákazníka, což znamená, že opravené části není potřeba lakovat, pokud není poškození příliš rozsáhlé. To zajišťuje, že vozidlo vypadá, jakoby nikdy nebylo havarováno.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Důvody pro použití originálních dílů</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Kvalita a bezpečnost:</strong> Originální díly jsou navrženy a vyrobeny tak, aby splňovaly vysoké standardy kvality a bezpečnosti. Použití těchto dílů zajišťuje, že vozidlo bude fungovat tak, jak bylo zamýšleno, a bude stále chráněno v případě další nehody.</li>
                    <li><strong>Dokonalá kompatibilita:</strong> Originální díly jsou navrženy tak, aby perfektně zapadly do konstrukce vozidla, což zajišťuje snadnou instalaci a bezproblémové fungování.</li>
                    <li><strong>Estetický vzhled:</strong> Originální díly jsou vyráběny ve stejné barvě a s toutéž povrchovou úpravou jako původní díly, což znamená, že opravené vozidlo vypadá jako nové.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["dveře", "blatník", "nárazník", "schody", "kapota", "světla", "chladič", "blatníky", "střecha"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
