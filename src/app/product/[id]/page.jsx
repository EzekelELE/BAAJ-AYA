import { Suspense } from "react"
import { Star, Truck, ShoppingCart, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageGallery from "./product-image-gallery"
import ProductReviews from "./product-reviews"
import RelatedProducts from "./related-products"
import ProductLoading from "./loading"

// This would typically come from a database or API
const product = {
  id: "1",
  name: "Premium Comfort Hoodie",
  price: 89.99,
  rating: 4.5,
  reviewCount: 127,
  description:
    "Our Premium Comfort Hoodie is crafted from high-quality organic cotton with a soft brushed interior for maximum comfort. Features a relaxed fit, adjustable hood, and convenient front pocket. Perfect for everyday wear or lounging at home.",
  features: [
    "100% organic cotton",
    "Soft brushed interior",
    "Relaxed fit",
    "Adjustable hood",
    "Front pocket",
    "Machine washable",
  ],
  colors: ["Black", "Navy", "Gray", "Burgundy"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  stock: 15,
  sku: "HC-1001-BLK",
  shipping: "Free shipping on orders over $50",
  delivery: "2-4 business days",
}

export default function ProductPage({ params }) {
  return (
    <Suspense fallback={<ProductLoading />}>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image Gallery */}
          <div className="sticky top-24 h-fit">
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <Separator className="my-4" />

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 ${index === 0 ? "border-black" : "border-transparent"}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color} />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Size</h3>
                <button className="text-sm text-gray-600 underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={size}
                    className={`py-2 border rounded-md ${index === 2 ? "border-black bg-black text-white" : "border-gray-300 hover:border-gray-400"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center">
                <span className="mr-4">Quantity:</span>
                <div className="flex border border-gray-300 rounded-md">
                  <button className="px-3 py-1 border-r border-gray-300">-</button>
                  <span className="px-4 py-1">1</span>
                  <button className="px-3 py-1 border-l border-gray-300">+</button>
                </div>
                <span className="ml-4 text-sm text-gray-600">{product.stock} available</span>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-2">
                <Truck className="w-5 h-5 mt-0.5 text-gray-600" />
                <div>
                  <p className="font-medium">{product.shipping}</p>
                  <p className="text-sm text-gray-600">Estimated delivery: {product.delivery}</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-6">
              <Tabs defaultValue="details">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="p-4">
                  <p>SKU: {product.sku}</p>
                  <p>Material: 100% organic cotton</p>
                  <p>Care: Machine wash cold, tumble dry low</p>
                </TabsContent>
                <TabsContent value="features" className="p-4">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="p-4">
                  <p>Free standard shipping on orders over $50</p>
                  <p>Express shipping available for an additional fee</p>
                  <p>International shipping available to select countries</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <ProductReviews productId={params.id} />
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <RelatedProducts currentProductId={params.id} />
        </section>
      </main>
    </Suspense>
  );
}
