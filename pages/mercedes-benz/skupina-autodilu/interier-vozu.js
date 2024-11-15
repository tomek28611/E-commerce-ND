
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Interiér vozu Mercedes Benz | palubní konzole, sedačky, airbag</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme palubní konzole, sedačky, airbag. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
                />
                <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/skupina-autodilu/interier-vozu" />
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
                <h1 className="text-center mb-4 font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly Interiér vozu Mercedes Benz</h1>
                <ProductsGrid products={products} />
            </div>


            <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
                    Interiér vozidel Mercedes-Benz: Komfort a Elegance
                </h2>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Úvod</h3>
                <p className="mb-4">
                    Interiér automobilů Mercedes-Benz spojuje luxus, moderní technologie a vynikající komfort. Každý prvek interiéru, od sedadel po audio systémy, je navržen tak, aby poskytoval nejvyšší kvalitu zážitku z jízdy. Mercedes-Benz nabízí různé možnosti vybavení interiéru, včetně standardních a limitovaných verzí, které se přizpůsobují preferencím majitelů.
                </p>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Prvky interiéru Mercedes-Benz</h3>
                <p className="mb-4">
                    Interiér každého modelu Mercedes-Benz se skládá z mnoha vysoce technologických a luxusních prvků, které zajišťují výjimečný komfort a styl. Některé z nich zahrnují:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Sedadla:</strong> Sedadla v automobilech Mercedes-Benz poskytují vynikající podporu a komfort. Sportovní sedadla jsou dostupná v mnoha modelech, jako je AMG, a poskytují lepší oporu těla při jízdě v zatáčkách. V limitovaných verzích jsou sedadla potažena kůží nejvyšší kvality a disponují funkcí masáže a ventilace.</li>
                    <li><strong>Palubní deska:</strong> Palubní desky Mercedes-Benz se vyznačují elegantním, minimalistickým designem, s velkými dotykovými obrazovkami a inovativními informačně-zábavními systémy. V limitovaných verzích může být palubní deska potažena kůží, přírodním dřevem nebo jinými luxusními materiály, což dodává interiéru ještě exkluzivnější vzhled.</li>
                    <li><strong>Audio systémy:</strong> Mercedes-Benz nabízí různé audio systémy, včetně standardního audia a vysoce kvalitních systémů, jako je Burmester® Surround Sound System, který poskytuje ohromující zvukovou kvalitu. V limitovaných verzích bývají audio systémy s vyšším výkonem pro ještě lepší akustické zážitky.</li>
                    <li><strong>Ambientní osvětlení:</strong> Mercedes-Benz nabízí systém ambientního osvětlení, který umožňuje přizpůsobení barev a intenzity světla v kabině, vytvářející atmosféru odpovídající náladě řidiče. V limitovaných verzích jsou možnosti osvětlení LED s širokou paletou barev.</li>
                    <li><strong>Exkluzivní materiály:</strong> Mercedes-Benz používá vysoce kvalitní materiály, jako je kůže Nappa, dřevo, hliník a uhlíková vlákna. V limitovaných verzích je interiér ještě vylepšen detaily, jako jsou exkluzivní prošívání nebo pravé dřevěné prvky.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Standardní vs. limitované verze</h3>
                <p className="mb-4">
                    Mercedes-Benz nabízí různé verze vybavení, které se liší jak technologiemi, tak i kvalitou provedení interiéru. Standardní verze poskytují vynikající komfort, zatímco limitované verze představují pravý luxus.
                </p>

                <h4 className="text-xl font-semibold text-blue-700 mb-3">Standardní verze</h4>
                <p className="mb-4">
                    Standardní verze Mercedes-Benz nabízí velmi vysoký komfort a technologii, která splňuje potřeby většiny uživatelů. Standardní vybavení obvykle zahrnuje:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Kůže základní kvality na sedadlech</li>
                    <li>Palubní deska vyrobená z kvalitních materiálů (např. plast, syntetická kůže)</li>
                    <li>Standardní audio systém (např. 8 reproduktorů)</li>
                    <li>Omezené ambientní osvětlení s několika barvami</li>
                    <li>Interiér vyrobený z materiálů jako kůže, látka, umělé dřevo</li>
                </ul>

                <h4 className="text-xl font-semibold text-blue-700 mb-3">Limitované verze</h4>
                <p className="mb-4">
                    Limitované verze Mercedes-Benz představují skutečný luxus a sofistikovanost. Nabízejí další vybavení, které činí jízdu ještě vzrušující a komfortní. Mezi charakteristiky limitovaných verzí patří:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Sedadla z vysoce kvalitní kůže Nappa s funkcí masáže a ventilace</li>
                    <li>Palubní deska potažená pravým dřevem, hliníkem nebo kůží</li>
                    <li>Pokročilý audio systém, jako je Burmester® Surround Sound System s vyšším výkonem</li>
                    <li>Multibarevné ambientní osvětlení s možností personalizace intenzity světla</li>
                    <li>Exkluzivní detaily interiéru, jako jsou prvky z uhlíkových vláken, zlaté akcenty nebo luxusní čalounění</li>
                    <li>Pokročilé technologie, jako jsou multimediální systémy s OLED obrazovkami a hlasovými ovládacími systémy</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-700 mb-3">Závěr</h3>
                <p>
                    Interiér Mercedes-Benz spojuje eleganci, komfort a moderní technologie. Bez ohledu na to, zda si vyberete standardní nebo limitovanou verzi, můžete se těšit na výjimečný zážitek z jízdy. Limitované verze nabízejí exkluzivní doplňky a luxusní detaily, které dělají interiér ještě více prestižní. Na druhou stranu standardní verze poskytují vynikající kvalitu a komfort, který činí jízdu automobilem Mercedes-Benz skutečným potěšením.
                </p>
            </section>

        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

    const modelNumbers = ["palubní", "konzole", "airbag", "sedačka"];

    const filteredProducts = allProducts.filter(product =>
        modelNumbers.some(model => product.title.includes(model))
    );

    return {
        props: {
            products: JSON.parse(JSON.stringify(filteredProducts)),
        },
    };
}
