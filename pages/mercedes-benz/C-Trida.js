
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Náhradní díly pro Mercedes Benz C třídy</title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />
        <link rel="cannonical" href="https://www.nahradni-dily.com/mercedes-benz/C-Trida" />
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

        <h1 className="text-center mb-4  font-manrope font-bold text-2xl dark:text-slate-200">Náhradní díly pro model Mercedes-Benz Třída-C</h1>
        <ProductsGrid products={products} />
      </div>
      {

        <section className="bg-gray-300 text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Mercedes-Benz třídy C
          </h2>

          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Historie</h3>
          <p className="mb-4">
            Mercedes-Benz třídy C byl představen v roce 1993 jako nástupce modelu 190 (W201). Třída C se stala oblíbeným modelem
            mezi luxusními kompaktními sedany díky své kombinaci elegance, výkonu a pokročilých technologií. Od svého uvedení
            prošel tento model několika generacemi, z nichž každá přinesla modernizace v designu a technologiích.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Modely a generace</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>W202 (1993–2000):</strong> První generace s nabídkou benzínových i dieselových motorů.</li>
            <li><strong>W203 (2000–2007):</strong> Modernější design a lepší bezpečnostní prvky.</li>
            <li><strong>W204 (2007–2014):</strong> Výrazný pokrok v technologii a výbavě.</li>
            <li><strong>W205 (2014–2021):</strong> Lehčí konstrukce díky hliníku, pokročilé technologie.</li>
            <li><strong>W206 (2021–současnost):</strong> Nejnovější generace s hybridními pohony a inovativními funkcemi.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Používané motory</h3>
          <p className="mb-4">
            Mercedes-Benz třídy C nabízel širokou škálu motorů, od benzínových čtyřválců po výkonné šestiválce a dieselové jednotky.
            V posledních generacích se přidaly také hybridní pohony. Mezi nejoblíbenější varianty patří:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Benzínové: 1.8L, 2.0L, 3.0L (např. modely C200, C300, C43 AMG).</li>
            <li>Dieselové: 2.0L, 2.2L, 3.0L (např. modely C220d, C250d).</li>
            <li>Hybridní: 2.0L benzínový motor spojený s elektromotorem (např. C300e).</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Technické údaje a rozměry</h3>
          <p className="mb-4">
            Technické údaje se liší podle generace a konkrétního modelu. Například u modelu W206 (2021):
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Délka: 4751 mm</li>
            <li>Šířka: 1820 mm</li>
            <li>Výška: 1437 mm</li>
            <li>Rozvor: 2865 mm</li>
            <li>Objem kufru: 455 litrů</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Jak pečovat o Mercedes třídy C</h3>
          <p className="mb-4">
            Pro udržení vašeho Mercedesu třídy C v perfektním stavu doporučujeme:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Pravidelně měnit motorový olej a filtry podle pokynů výrobce.</li>
            <li>Kontrolovat stav brzdového systému a pneumatik.</li>
            <li>V zimním období používat kvalitní zimní pneumatiky a chránit lak před solí.</li>
            <li>Pravidelně aktualizovat software vozidla u autorizovaného servisu.</li>
            <li>Dbát na čistotu interiéru a používat ochranné prostředky na kůži a textilie.</li>
          </ul>
        </section>

      }

    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

  const modelNumbers = ["W204", "W205", "W206"];

  const filteredProducts = allProducts.filter(product =>
    modelNumbers.some(model => product.title.includes(model))
  );

  return {
    props: {
      products: JSON.parse(JSON.stringify(filteredProducts)),
    },
  };
}
