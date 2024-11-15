
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Kola, ráfky, pneumatiky pro váš Mercedes Benz</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/kola-auta" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Kompletni kola a disky pro vozy Mercedes-Benz</h1>
                <ProductsGrid products={products} />
            </div>

    <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Kompletni kola a disky pro vozy Mercedes-Benz
      </h2>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
      <p className="mb-4">
        Správný výběr kol a pneumatik je klíčový pro optimální výkon, bezpečnost a vzhled vašeho vozidla. Mercedes-Benz nabízí širokou škálu kol, která jsou přizpůsobena různým modelům a požadavkům. V tomto článku se zaměříme na různé typy kol a pneumatik pro vozy Mercedes-Benz, včetně standardních disků, disků AMG a Brabus, a jak správně vybrat rozměry a typy pneumatik pro různé modely.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Komplet kola pro Mercedes-Benz</h3>
      <p className="mb-4">
        Kompletní kolo zahrnuje nejen ráfek, ale i pneumatiku, která je k němu namontována. Správná volba těchto komponentů je zásadní pro jízdu, komfort a bezpečnost vozidla.
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Standardní disky Mercedes-Benz</h3>
      <p className="mb-4">
        Standardní disky Mercedes-Benz jsou navrženy tak, aby poskytovaly optimální výkon, trvanlivost a estetiku pro každodenní jízdu. Tyto disky jsou často vyrobeny z hliníkové slitiny, což zajišťuje lehkost a pevnost. Nabízejí široký výběr rozměrů a designů, které vyhovují různým modelům Mercedes-Benz.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Rozměry:</strong> Standardní disky jsou k dispozici v různých velikostech, od 16 palců až po 19 palců, v závislosti na modelu vozidla. Některé modely, jako například třída A, B nebo C, obvykle používají ráfky o průměru 16–18 palců, zatímco větší modely, jako S-Class nebo GLE, mohou mít ráfky o průměru 18–19 palců.</li>
        <li><strong>Typy pneumatik:</strong> Standardní disky Mercedes-Benz jsou obvykle kombinovány s pneumatikami, které odpovídají specifikacím výrobce. Pro modely třídy A a B jsou ideální pneumatiky typu 205/55 R16 nebo 225/45 R17. Pro třídu C a E se doporučují pneumatiky 225/50 R17 nebo 245/40 R18. Pro větší modely, jako je S-Class nebo GLE, se používají pneumatiky 245/45 R19 nebo 275/40 R20.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">disky AMG</h3>
      <p className="mb-4">
        disky AMG jsou vysoce výkonné disky, které byly vyvinuty pro sportovní a luxusní modely Mercedes-Benz. AMG, což je zkratka pro „Aufrecht, Melcher, and Großaspach“ (zakladatelé značky), je známé svou specializací na výkonná a sportovní vozidla. disky AMG mají výrazný design a jsou vyrobeny z vysoce kvalitních materiálů, aby poskytovaly maximální pevnost při minimální hmotnosti.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Design:</strong> disky AMG mají často agresivní, vícezdířkové nebo křížové designy, které zajišťují lepší ventilaci brzdového systému a zvyšují estetiku vozidla. Jsou navrženy tak, aby odpovídaly sportovnímu charakteru vozidel Mercedes-Benz, jako jsou třídy A 45 AMG, C 63 AMG nebo SLS AMG.</li>
        <li><strong>Rozměry:</strong> disky AMG jsou k dispozici ve velikostech od 18 do 21 palců, přičemž větší modely sportovních vozidel, jako jsou AMG GTR nebo AMG GT, často používají ráfky o průměru 19–21 palců. To umožňuje lepší přilnavost pneumatik a optimální stabilitu při vysokých rychlostech.</li>
        <li><strong>Typy pneumatik:</strong> Pro sportovní vozy AMG jsou obvykle použity pneumatiky širšího profilu pro lepší přilnavost a výkon na silnici. Typické rozměry pro modely AMG jsou například 255/35 R19 na přední nápravu a 285/30 R19 na zadní nápravu pro modely, jako je AMG C 63.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">disky Brabus</h3>
      <p className="mb-4">
        Brabus je exkluzivní tuningová firma, která se specializuje na výkonná vylepšení pro vozidla Mercedes-Benz. disky Brabus jsou určeny pro ty, kteří hledají ještě vyšší úroveň výkonu a luxusu. Tyto disky jsou známé svým elegantním vzhledem a vynikající kvalitou. Brabus nabízí disky v různých velikostech a stylech, které odpovídají sportovnímu charakteru vozidel Brabus.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Design:</strong> disky Brabus mají jedinečný design s většími průměry, které podporují stabilitu při vysokých rychlostech. Často jsou dodávány v černé nebo matné barvě, což dodává vozu sportovní vzhled. Některé modely mají design se zlatými nebo stříbrnými detaily pro zvýšení luxusního vzhledu.</li>
        <li><strong>Rozměry:</strong> disky Brabus se často nacházejí ve velikostech 20, 21 a 22 palců, což je ideální pro sportovní a luxusní modely jako S-Class, G-Class nebo AMG GT.</li>
        <li><strong>Typy pneumatik:</strong> Brabus disky jsou kombinovány s vysoce výkonnými pneumatikami, které zajišťují perfektní přilnavost a stabilitu. Běžné rozměry pro pneumatiky Brabus jsou například 275/35 R21 nebo 295/30 R22 pro modely Brabus G-Wagon.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Výběr správného kompletního kola pro Mercedes-Benz</h3>
      <p className="mb-4">
        Při výběru kompletního kola pro Mercedes-Benz je důležité zvážit několik faktorů:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Velikost disku:</strong> Výběr správné velikosti disku závisí na modelu vašeho vozidla a jeho specifikacích. Množství prostoru v podběhu a požadavky na stabilitu a komfort jízdy určují optimální velikost disku.</li>
        <li><strong>Typ pneumatiky:</strong> Zvolte pneumatiku, která odpovídá vašemu stylu jízdy. Pro městské jízdy jsou ideální pneumatiky s nízkým odporem, zatímco pro sportovní jízdu je lepší zvolit širší a výkonnější pneumatiku pro lepší přilnavost.</li>
        <li><strong>Kompatibilita:</strong> Ujistěte se, že vámi zvolená kola a pneumatiky jsou kompatibilní s vaším vozidlem, včetně správného průměru, šířky a ET (odchylky od osy).</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Ovlivnění bezpečnosti: Opony a disky v létě a zimě</h3>
      <p className="mb-4">
        Opony a disky mají klíčový vliv na bezpečnost jízdy a výkon vozidla, zejména v různých ročních obdobích. V létě i v zimě je důležité, aby pneumatiky a kola byly správně přizpůsobeny podmínkám na silnici.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Létne podmínky:</strong> V létě, kdy jsou teploty vyšší, pneumatiky s letním vzorkem zajišťují lepší přilnavost a kratší brzdnou dráhu na suchých i mokrých silnicích. Oproti zimním pneumatikám mají letní pneumatiky tvrdší směs, která poskytuje lepší výkon při vyšších teplotách.</li>
        <li><strong>Zimní podmínky:</strong> V zimě, kdy jsou silnice kluzké a mohou být pokryté sněhem nebo ledem, jsou zimní pneumatiky nezbytné. Mají hlubší vzorek a měkčí směs, která zajišťuje lepší přilnavost na sněhu a ledu. Zimní pneumatiky také snižují riziko aquaplaningu na mokrých silnicích.</li>
        <li><strong>disky a bezpečnost:</strong> disky, zejména ty vyrobené z hliníkových slitin, hrají důležitou roli v bezpečnosti, protože jsou lehčí a mají lepší schopnost odvádět teplo z brzdového systému, což snižuje riziko přehřátí brzd během intenzivního brzdění. Vysoce kvalitní disky také poskytují lepší stabilitu a odolnost vůči poškození při jízdě na nerovných silnicích.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Závěr</h3>
      <p>
        Výběr správného kompletního kola pro váš vůz Mercedes-Benz je klíčový pro optimální výkon, bezpečnost a vzhled vozidla. Ať už se rozhodnete pro standardní disky, disky AMG nebo Brabus, vždy se ujistěte, že splňují vaše požadavky na jízdní vlastnosti a bezpečnost. Důležité je také přizpůsobit pneumatiky podmínkám počasí, aby vaše jízda byla co nejbezpečnější a nejpohodlnější.
      </p>
    </section>


        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["kola",];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
