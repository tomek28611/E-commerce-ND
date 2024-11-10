
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { slugify } from "@/utils/slugify"; 

export default function ProductDetails({ product }) {
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { title } = context.params;

  
  const products = await Product.find();
  const product = products.find(
    (p) => slugify(p.title) === title
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
