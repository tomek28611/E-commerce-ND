
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { slugify } from "@/utils/slugify"; 
import Image from "next/image";

export default function ProductDetails({ product }) {
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <Image 
      src={product.images[0]} 
      width={500}
      height={500}
      alt="product image" />
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
