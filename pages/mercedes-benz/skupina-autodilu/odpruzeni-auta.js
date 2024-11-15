
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Originální Odpružení auta Mercedes Benz| Náprava</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky, Náprava. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/odpruzeni-auta" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly Odpružení auta Mercedes Benz</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Technologie zavěšení Mercedes-Benz
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
                <p className="mb-4">
                    Zavěšení je klíčovou součástí každého vozidla, která zajišťuje pohodlnou jízdu, stabilitu a bezpečnost. Mercedes-Benz je známý pro použití vysoce kvalitních a pokročilých technologií zavěšení, které poskytují výjimečný komfort a výkon. V tomto článku se podíváme na různé technologie zavěšení používané u vozidel Mercedes-Benz, včetně komponent jako jsou tlumiče, vzduchové pružiny AIRMATIC a systém aktivního zavěšení ABC. Prozkoumáme také, jak se tyto komponenty opotřebovávají a jaké jsou typické závady.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Typy zavěšení v Mercedes-Benz</h3>
                <p className="mb-4">
                    Mercedes-Benz používá různé systémy zavěšení, které se liší v závislosti na modelu vozidla, specifikacích a požadavcích na výkon a komfort. Mezi nejběžnější technologie patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Tradiční mechanické zavěšení:</strong> Tato technologie zahrnuje ocelové pružiny a tlumiče, které poskytují základní úroveň komfortu a ovladatelnosti. Tento systém je běžně používaný ve starších modelech nebo základních verzích.</li>
                    <li><strong>Vzduchové zavěšení AIRMATIC:</strong> AIRMATIC je pokročilý vzduchový systém zavěšení, který umožňuje automatickou regulaci výšky vozidla a tuhosti pružení pro optimální komfort a stabilitu.</li>
                    <li><strong>Aktivní zavěšení ABC:</strong> Aktivní zavěšení Mercedes-Benz (ABC - Active Body Control) je vysoce sofistikovaný systém, který aktivně upravuje nastavení tlumičů a stabilizátorů v závislosti na jízdních podmínkách, což umožňuje lepší stabilitu, komfort a ovladatelnost, zejména při rychlých jízdách a zatáčení.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Hlavní komponenty zavěšení Mercedes-Benz</h3>
                <p className="mb-4">
                    Zavěšení Mercedes-Benz se skládá z několika klíčových komponent, které společně zajišťují optimální výkon a komfort jízdy. Zde jsou hlavní součásti, které tvoří systém zavěšení:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>tlumiče :</strong> tlumiče jsou základními komponenty každého zavěšení, které tlumí nárazy a vibrace přenášené na vozidlo. Mercedes-Benz používá tlumiče s různými technologiemi, včetně hydraulických a elektronicky řízených tlumičů, které upravují tuhost v závislosti na jízdních podmínkách.</li>
                    <li><strong>Vzduchové pružiny AIRMATIC:</strong> Systém AIRMATIC využívá vzduchové pružiny namísto tradičních ocelových, což umožňuje automatické přizpůsobení výšky vozidla a tuhosti podle zatížení a podmínek jízdy. To zajišťuje vynikající komfort a stabilitu i při změnách zátěže.</li>
                    <li><strong>Aktivní zavěšení ABC (Active Body Control):</strong> Systém ABC používá elektro-hydraulické komponenty k aktivnímu řízení tlumičů a stabilizátorů. Tato technologie poskytuje vysoký stupeň komfortu a stability, zejména při rychlých jízdách a zatáčení. Zabraňuje naklánění vozidla a zlepšuje ovladatelnost.</li>
                    <li><strong>Stabilizátory:</strong> Stabilizátory jsou součástí zavěšení, které pomáhají snižovat náklony vozidla při zatáčení. Mercedes-Benz používá pokročilé stabilizační systémy, včetně aktivních stabilizátorů u modelů s ABC.</li>
                    <li><strong>Spjovací prvky a silentbloky:</strong> Tyto prvky zajišťují, že všechny součásti zavěšení jsou pevně připojeny k rámu vozidla a zároveň tlumí vibrace a hlučnost během jízdy.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Opotřebení a závady komponent zavěšení</h3>
                <p className="mb-4">
                    Stejně jako všechny ostatní součásti vozidla, komponenty zavěšení se mohou časem opotřebovat. Zde jsou některé běžné problémy a závady, které mohou nastat:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Opotřebení tlumičů (amortizátorů):</strong> Tlumiče mohou ztrácet svou účinnost v průběhu času, což vede k horšímu komfortu jízdy a zhoršené stabilitě vozidla. Typické známky opotřebení zahrnují klepání, nepravidelný pohyb vozu a prodlouženou dobu potřebnou pro ustálení po nárazu.</li>
                    <li><strong>Poškození vzduchových pružin AIRMATIC:</strong> Vzduchové pružiny mohou být náchylné k poškození v důsledku netěsností nebo prasknutí, což vede k ztrátě výšky vozidla a zhoršení komfortu. V některých případech může být třeba vyměnit celé vzduchové pružiny.</li>
                    <li><strong>Závady v systému ABC:</strong> Systém aktivního zavěšení může trpět poruchami elektronických nebo hydraulických komponent. Typické problémy zahrnují varovné kontrolky na palubní desce, problémy s úrovní vozidla nebo nepravidelným chováním při zatáčení.</li>
                    <li><strong>Opotřebení stabilizátorů:</strong> Stabilizátory se mohou postupně opotřebovat a způsobit zvýšené náklony při jízdě. To může vést k horší ovladatelnosti vozidla a negativně ovlivnit jízdní komfort.</li>
                    <li><strong>Porucha silentbloků:</strong> Silentbloky mohou ztrácet svou pružnost a schopnost tlumit vibrace, což vede k hlučnější jízdě a zvýšenému opotřebení ostatních komponent zavěšení.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Údržba a opravy zavěšení</h3>
                <p className="mb-4">
                    Pravidelná údržba je klíčová pro dlouhou životnost komponent zavěšení. Udržování správného tlaku v pneu, kontrola stavu tlumičů a pravidelná kontrola systému AIRMATIC a ABC mohou pomoci předejít vážným problémům. V případě závady je důležité co nejdříve navštívit autorizovaný servis, kde mohou provést diagnostiku a opravu komponent.
                </p>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["rameno", "strana", "náprava", "most"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
