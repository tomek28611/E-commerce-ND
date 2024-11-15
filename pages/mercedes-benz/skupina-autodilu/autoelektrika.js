
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Náhradní díly Autoelektrika | lampy, světla</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky (lampy, světla) a další. Rychlá dodávka, skvělé ceny a spolehlivý servis."
                />
                <link rel="canonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/autoelektrika" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly Autoelektrika</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Elektrika v automobilech Mercedes-Benz
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
                <p className="mb-4">
                    Elektrický systém je klíčovou součástí každého moderního automobilu, a Mercedes-Benz není výjimkou. Od osvětlení až po složité elektronické systémy, vše je navrženo pro bezpečnost, komfort a efektivitu. V tomto článku se zaměříme na hlavní elektrické komponenty ve vozidlech Mercedes-Benz, zejména na osvětlovací systémy, které se v průběhu času vyvinuly v sofistikované a vysoce účinné technologie.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Hlavní elektrické komponenty Mercedes-Benz</h3>
                <p className="mb-4">
                    Elektrický systém Mercedes-Benz zahrnuje celou řadu komponent, které zajišťují optimální fungování vozidla. Zde jsou některé z nejdůležitějších:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Světla:</strong> Světla vozidla jsou zásadní pro viditelnost a bezpečnost na silnici. Mercedes-Benz používá pokročilé systémy osvětlení, které zajišťují lepší viditelnost a bezpečnost. Světla zahrnují přední světlomety, zadní světla, blinkry, mlhovky a denní svícení.</li>
                    <li><strong>Multibeam LED:</strong> Jedním z nejnovějších pokroků v oblasti osvětlení je systém Multibeam LED. Tento systém používá několik samostatně ovládaných LED diod pro každý světlomet, což umožňuje dynamické přizpůsobení světla podle situace na silnici. Například ve městě mohou být světlomety zaměřeny tak, aby osvětlovaly pouze oblast před vozidlem, aniž by oslepily ostatní řidiče. Tento systém poskytuje lepší viditelnost a bezpečnost než tradiční halogenová nebo xenonová světla.</li>
                    <li><strong>Adaptivní LED světlomety (Adaptive Headlamps):</strong> Adaptivní světlomety, které se nacházejí u novějších modelů Mercedes-Benz, se automaticky přizpůsobují zatáčkám a změnám v jízdní dráze. Tato technologie zajišťuje, že světlo bude vždy směřovat tam, kde je to nejvíce potřeba, což zlepšuje viditelnost v nočních podmínkách a v zatáčkách.</li>
                    <li><strong>Matrix LED:</strong> Systém Matrix LED představuje další krok vpřed v technologii osvětlování, která umožňuje ještě přesnější a adaptivnější rozdělení světla. Tento systém využívá LED diody, které mohou být individuálně zapínány a vypínány, což poskytuje maximální osvětlení při minimalizaci oslňování ostatních řidičů. Tato technologie je ideální pro dálkové osvětlení, které se automaticky přizpůsobuje aktuálním podmínkám na silnici.</li>
                    <li><strong>MLF (Mercedes Light Function):</strong> Mercedes Light Function je pokročilý systém osvětlení, který se zaměřuje na zlepšení bezpečnosti při parkování a manévrování v úzkých prostorách. MLF aktivuje speciální světelné pásy na přední a zadní části vozidla, které pomáhají řidiči lépe vnímat okolní prostor a vyhnout se nárazům.</li>
                    <li><strong>Osvětlení interiéru:</strong> Mercedes-Benz také klade velký důraz na estetiku interiéru, a proto používá ambientní osvětlení, které umožňuje nastavit barvu a intenzitu světla podle nálady. Tento systém přispívá nejen k pohodlí, ale i k bezpečnosti, protože zajišťuje lepší orientaci uvnitř vozidla při noční jízdě.</li>
                    <li><strong>Elektronická parkovací brzda:</strong> Moderní vozidla Mercedes-Benz jsou vybavena elektronickou parkovací brzdou (EPB), která je ovládána tlačítkem. Tento systém zajišťuje lepší kontrolu nad parkováním a umožňuje snadné a rychlé zajištění vozidla při zastavení.</li>
                    <li><strong>Palubní elektrické systémy:</strong> V moderních vozech Mercedes-Benz je mnoho dalších elektronických systémů, včetně infotainmentu, navigace, automatického řízení, asistenčních systémů a dalších. Všechny tyto systémy jsou propojeny a koordinovány centrálními řídicími jednotkami, které zajišťují jejich bezproblémový chod.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Vývoj osvětlovacích systémů Mercedes-Benz</h3>
                <p className="mb-4">
                    Mercedes-Benz byl průkopníkem v oblasti osvětlovacích systémů a neustále inovuje, aby zlepšil bezpečnost a komfort při jízdě. Vývoj osvětlení v automobilových vozidlech Mercedes-Benz probíhal v několika fázích:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Halogenová světla:</strong> V minulosti byla halogenová světla standardem v automobilových vozidlech. Byla cenově dostupná a poskytovala základní úroveň osvětlení. Halogenová světla stále nalezneme u některých starších modelů, ale postupně byla nahrazena modernějšími technologiemi.</li>
                    <li><strong>Xenonová světla:</strong> Xenonová světla byla revolučním krokem vpřed, protože poskytovala jasnější světlo s nižší spotřebou energie než halogenová světla. Tyto světla byla také adaptivní a mohla se přizpůsobit jízdní dráze. Xenonová světla byla často používána ve středních a vyšších třídách vozidel Mercedes-Benz.</li>
                    <li><strong>LED technologie:</strong> LED technologie přinesla výrazné zlepšení v oblasti efektivity a výkonu osvětlení. Mercedes-Benz začal implementovat LED světlomety ve svých novějších modelech, což vedlo k významnému zlepšení viditelnosti a energetické účinnosti. LED diody také umožnily vývoj nových typů osvětlení, jako je Multibeam LED a Matrix LED, které nabízí adaptivní osvětlení a lepší kontrolu nad světelným polem.</li>
                    <li><strong>Laserová technologie:</strong> V posledních letech se začíná u některých modelů Mercedes-Benz používat laserová technologie pro dálkové světlomety. Tento systém poskytuje extrémně silné a jasné světlo, které umožňuje maximální viditelnost na dlouhé vzdálenosti.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Proč je důležité používat originální elektrické díly</h3>
                <p className="mb-4">
                    Použití originálních elektrických dílů od Mercedes-Benz je klíčové pro správné fungování všech systémů ve vozidle. Originální díly zajišťují:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Kompatibilitu:</strong> Originální díly jsou navrženy tak, aby dokonale zapadly do konstrukce vozidla a byly kompatibilní s ostatními elektrickými systémy.</li>
                    <li><strong>Bezpečnost:</strong> Použití originálních dílů zaručuje, že všechny elektrické systémy fungují správně a jsou bezpečné pro použití.</li>
                    <li><strong>Výkon:</strong> Originální díly jsou vysoce kvalitní a zajišťují optimální výkon všech elektrických funkcí vozidla.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["lampa", "svítilna", "světla", "světlo"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
