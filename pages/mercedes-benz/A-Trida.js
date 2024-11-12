
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid"
import Head from "next/head";


const seoTextContent = `
  Vítejte na naší stránce zaměřené na <strong>náhradní díly pro automobily Mercedes A třídy</strong>. 
  Nabízíme široký sortiment kvalitních autodílů, které splňují nejvyšší standardy kvality a spolehlivosti. 
  Mezi naše produkty patří motorové díly, brzdové součástky, karosářské prvky a další klíčové komponenty potřebné pro opravy a údržbu vašeho vozu.

  Díky naší rychlé dodávce a výhodným cenám si můžete být jisti, že naleznete přesně to, co potřebujete. 
  Naším cílem je poskytnout vám prvotřídní zákaznický servis a pomoci vám udržet vaše auto v perfektním stavu. 
  Objevte naši nabídku a vyberte si z našich produktů, které jsou ideální pro všechny modely Mercedes A třídy.
`;

export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Auto Dily Express | Náhradní díly pro Mercedes A třídy</title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />
        <link rel="canonical" href="https://autodilyexpress.cz/A-Trida" />
        <link rel="apple-touch-icon" sizes="180x180" href="/auto-dily-logo.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:image" content="/auto-dily-logo.png" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:url" content="https://autodilyexpress.cz" />
        <meta property="og:site_name" content="autodilyexpress.cz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta name="twitter:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka"></meta>
      </Head>
      <ProductsGrid products={products} />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });

  const modelNumbers = ["169", "176", "177"];

  const filteredProducts = allProducts.filter(product =>
    modelNumbers.some(model => product.title.includes(model))
  );

  return {
    props: {
      products: JSON.parse(JSON.stringify(filteredProducts)),
    },
  };
}
