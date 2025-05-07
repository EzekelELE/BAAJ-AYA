export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  console.log(productId);
  console.log(productId + "eadwa");
  return <h1>Details about product {productId} </h1>;
}
