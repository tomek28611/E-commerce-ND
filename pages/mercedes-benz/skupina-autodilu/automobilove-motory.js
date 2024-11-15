
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Automobilové motory Mercedes Benz</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/automobilove-motory" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly Automobilové motory Mercedes Benz</h1>
                <ProductsGrid products={products} />
            </div>

            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Technologie motorů Mercedes-Benz
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
                <p className="mb-4">
                    Mercedes-Benz je jednou z nejuznávanějších značek automobilů na světě, která již léta investuje do inovativních technologií motorů. Společnost vyrábí širokou škálu pohonných jednotek, které jsou odpovědné za výkon, sílu a komfort jízdy. Motory Mercedes-Benz jsou synonymem spolehlivosti, síly a ekologičnosti, díky použití nejnovějších technologických řešení. V tomto článku představíme různé technologie motorů používané v automobilech Mercedes-Benz a prozkoumáme jejich konstrukci a fungování.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Typy motorů v Mercedes-Benz</h3>
                <p className="mb-4">
                    Mercedes-Benz nabízí různé motory, které se liší výkonem, účinností a typem pohonu. Mezi nejběžnější typy motorů používané v automobilech této značky patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Benzínové motory:</strong> Používané v široké škále vozidel, od malých automobilů až po sportovní modely AMG. Tyto motory nabízejí vynikající dynamiku, velký výkon a plynulost chodu.</li>
                    <li><strong>Dieselové motory:</strong> Známé svou úsporností a dlouhou životností. Jsou běžně používány v modelech s větším točivým momentem, zejména v SUV a limuzínách.</li>
                    <li><strong>Elektrické a hybridní motory:</strong> Mercedes-Benz také klade důraz na udržitelnost, nabízí vozidla s elektrickým pohonem (EQ) a hybridními technologiemi, které kombinují spalovací motor a elektrický pohon.</li>
                    <li><strong>Motory AMG:</strong> Motory vyvinuté specialisty Mercedes-AMG, které nabízejí výjimečné výkony a technologie, jako jsou turbodmychadla a systémy správy energie.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Konstrukce motorů Mercedes-Benz</h3>
                <p className="mb-4">
                    Motory Mercedes-Benz se skládají z mnoha precizně navržených komponent, které zajišťují vysokou kvalitu, spolehlivost a výkon. Zde jsou hlavní části, které tvoří motory této značky:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Motorový blok:</strong> Motorový blok je hlavní částí, která drží všechny ostatní komponenty. Je vyroben z litiny nebo hliníku, aby byla zajištěna lehkost a odolnost. Uvnitř se nacházejí válce, v nichž probíhá spalování palivové směsi.</li>
                    <li><strong>Válce:</strong> Válce jsou komory, ve kterých probíhá spalování. Mercedes-Benz nabízí motory se 4, 6, 8 a 12 válci, v závislosti na modelu a požadavcích vozidla.</li>
                    <li><strong>Písty:</strong> Písty se pohybují ve válcích a jsou zodpovědné za přeměnu chemické energie na mechanickou. Písty jsou spojeny s ojnicemi, které přeměňují pohyb pístů na otáčení klikového hřídele.</li>
                    <li><strong>Klikový hřídel:</strong> Klikový hřídel přeměňuje pohyb pístů na otáčení, což umožňuje pohon vozidla. Klikový hřídel je jednou z nejdůležitějších součástí motoru a je vystaven obrovským zátěžím.</li>
                    <li><strong>Rozvodový systém:</strong> Rozvodový systém reguluje otevírání a zavírání ventilů ve správných okamžicích. Ventily kontrolují přívod vzduchu a paliva a odvod spalin. Mercedes-Benz používá pokročilé rozvodové systémy, jako je VVT (Variable Valve Timing), které optimalizují výkon.</li>
                    <li><strong>Turbodmychadlo:</strong> Turbodmychadlo je zodpovědné za zvýšení výkonu motoru tím, že stlačuje vzduch vstupující do válců. Motory AMG a jiné výkonné motory Mercedes-Benz často používají turbodmychadla pro zvýšení účinnosti.</li>
                    <li><strong>Systém chlazení:</strong> Systém chlazení zajišťuje udržení správné teploty motoru. Systém zahrnuje chladiče, vodní čerpadla a termostaty, které regulují tok chladicí kapaliny.</li>
                    <li><strong>Palivový systém:</strong> Palivový systém dodává palivo do válců. Mercedes-Benz používá moderní vstřikovače, které přesně dávkují množství paliva, čímž zajišťují optimální směs pro spalování.</li>
                    <li><strong>Výfukový systém:</strong> Výfukový systém odvádí spaliny z motoru a snižuje emise škodlivých látek. Mercedes-Benz používá pokročilé katalyzátory a filtry pevných částic (DPF) pro splnění ekologických norem.</li>
                    <li><strong>Elektronika motoru:</strong> Moderní motory Mercedes-Benz jsou vybaveny pokročilou elektronikou, včetně řídicího počítače, senzorů a řídicích systémů motoru (ECU), které optimalizují činnost motoru, řídí emisní parametry a zlepšují výkon.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Nové technologie motorů Mercedes-Benz</h3>
                <p className="mb-4">
                    Mercedes-Benz neustále vyvíjí nové technologie motorů, které zlepšují výkon, úsporu paliva a dopad na životní prostředí. Zde jsou některé z nových technologií používaných v motorech této značky:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Turbodmychadlo:</strong> Mercedes-Benz používá turbodmychadla v mnoha motorech k zvýšení výkonu bez zvětšení objemu motoru.</li>
                    <li><strong>Hybridizace:</strong> Hybridní technologie umožňují kombinovat spalovací motor s elektrickým, což vede k nižší spotřebě paliva a emisím.</li>
                    <li><strong>AMG Performance:</strong> Motory AMG jsou navrženy s cílem maximalizovat výkon a efektivitu. Mercedes-AMG používá systémy variabilního časování ventilů, turbodmychadla s vysokým výkonem a pokročilé chladicí systémy.</li>
                    <li><strong>EQ Power:</strong> Mercedes-Benz zavádí plně elektrické pohony v rámci série EQ. Modely EQ nabízejí vynikající výkon a nulové emise, což zajišťuje dynamickou jízdu bez výfukových plynů.</li>
                    <li><strong>BlueEFFICIENCY:</strong> Technologie BlueEFFICIENCY ve motorech Mercedes-Benz se zaměřují na snížení spotřeby paliva a emisí CO2, optimalizací spalovacích procesů a zlepšením aerodynamiky vozidel.</li>
                </ul>
            </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["motor"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
