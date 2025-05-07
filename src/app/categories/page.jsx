export default async function productscategories({ params }) {
  const productId = (await params).productId;
  return <h1>{productId}</h1>;
}
