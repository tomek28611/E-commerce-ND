
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { useState, useEffect } from "react";
import Head from "next/head";
import InfoBar from "@/components/InfoBar";

export default function HomePage({ featuredProduct, newProducts }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('message') === 'success') {
      alert('Zpráva byla odeslána!');
    }
  }, []);


  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Originální náhradní díly pro vozy Mercedes, Skoda, BMW, Audi, VW </title>
        <meta name="description" content="Originální náhradní díly pro Mercedes, Skoda, BMW, Audi, VW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz." />



        <link rel="cannonical" href="https://www.nahradni-dily.com/" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.nahradni-dily.com/logo-nerozza.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Originální náhradní díly pro Mercedes, Skoda, BMW, Audi, VW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes, Skoda, BMW, Audi, VW." />
        <meta property="og:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
        <meta property="og:image:alt" content="Náhradní díly pro Mercedes, Skoda, BMW, Audi, VW" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="Originální náhradní díly pro Mercedes, Skoda, BMW, Audi, VW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes, Skoda, BMW, Audi, VW." />
        <meta property="og:url" content="https://www.nahradni-dily.com/" />
        <meta property="og:site_name" content="nahradni-dily.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Originální náhradní díly pro Mercedes, Skoda, BMW, Audi, VW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes, Skoda, BMW, Audi, VW." />
        <meta name="twitter:image" content="https://www.nahradni-dily.com/logo-nerozza.png" />
        <meta name="twitter:image:alt" content="Náhradní díly pro Mercedes, Skoda, BMW, Audi, VW"></meta>
        <meta name="twitter:description" content="Originální náhradní díly pro Mercedes, Skoda, BMW, Audi, VW. Kvalitní autodíly, spolehlivé a kompatibilní, pro váš vůz Mercedes, Skoda, BMW, Audi, VW."></meta>

      </Head>
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <div>
          <div className="new_prod_cont ">
            <NewProducts products={newProducts} productF={featuredProduct} />
            {/* <InfoBar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  const productIds = [
    '671a7784c165d4445e2f9bf5',
    '676bf5779715e0acf0a3165f',
    '676bfd9f9715e0acf0a31788',
    '676c015a9715e0acf0a317e6',
    '6770f87b9715e0acf0a3fe56',
    '6771010e9715e0acf0a3fefd',
    '677106f09715e0acf0a3ff7e',
    '677109ab9715e0acf0a3ffb4',
    '677110459715e0acf0a40041',
    '677113819715e0acf0a4008e',
    '677113e99715e0acf0a40095',
    '677114139715e0acf0a4009a',
    '6771169e9715e0acf0a400ca',
    '6771186a9715e0acf0a400ed',
    '677117409715e0acf0a400d3',
    '676a8f7e9715e0acf0a2ca26',
    '676fd66c9715e0acf0a3e74d',
    '676fdbc39715e0acf0a3e7df',
    '676fdfdd9715e0acf0a3e84a',
    '676fe3829715e0acf0a3e89b',
    '676fe4779715e0acf0a3e8b3',
    '676fe3bc9715e0acf0a3e89d',
    '676e733c9715e0acf0a39999',
    '676e78fb9715e0acf0a39aab',
    '676e7b4e9715e0acf0a39b01',
    '676e800e9715e0acf0a39f18',
    '676e81c99715e0acf0a39f47',
    '676a8eef9715e0acf0a2ca1c',
    '676bdc8c9715e0acf0a3109b',
    '676bdd769715e0acf0a310ba',
    '676be1679715e0acf0a3111a',
    '676bf4c19715e0acf0a313e0',
    '676bfd9f9715e0acf0a31788',
    '676c019f9715e0acf0a317ea',
    '676c02ad9715e0acf0a3180a',
    '676c055e9715e0acf0a31844',
    '671a944d6cf30d38d6cf823e',
    '671b9a46fae024421553c757',
    '67069cce9e750cdadf0fd9e4',
    '670644f1daec693e13cc8e11',
    '66fd0d898087065785241ffa',
    '670556cb0e14cb3e1bdd54dd',
    '6713bb24e118c858405e11d9',
    '670a5c883b416ccb4cc917e0',
    '670a5e183b416ccb4cc917ea',
    '671118ed5712ac9461a3f51d',
    '6724ff9e1c77abfacb131c74',
    '67120790fab5379c13cca3da',
    '6713b403e118c858405e11b1',
    '672c7642f8701e5b4ef9744b',
    '6703d4a830fc9241852871e0',
    '6713a001e66be549916e0187',
    '672c7e72f630b289bfe9cb7d',
    '672903f2e08dbc64c282d676',
    '672685b4ec1ef311433e433b',
    '6723d43ac57076407df34dfe',
    '67237a137017ae288144a2d6',
    '6721f7bd76b9626f911eccc3',
    '671b5f4fecadf7e9ca6bbf35',
    '6712b26ad00e8480070e26e1',
    '6728cd1ec7d4ce386d4ad067',
    '6728ca416941635c692384e3',
    '67322309884332d9965e1901',
    '672b9f9b6e17241d5d2cc357',
    '6723ded7802b64c54ba517f9'

  ];
  const featuredProductId = '6713a001e66be549916e0187';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({
    '_id': { $in: productIds }
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}