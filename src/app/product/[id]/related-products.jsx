import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

// This would typically come from a database or API
const relatedProducts = [
  {
    id: "2",
    name: "Classic Crewneck Sweatshirt",
    price: 69.99,
    rating: 4.3,
    reviewCount: 98,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Lightweight Zip Jacket",
    price: 79.99,
    rating: 4.7,
    reviewCount: 64,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Relaxed Fit T-Shirt",
    price: 34.99,
    rating: 4.5,
    reviewCount: 112,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Slim Fit Joggers",
    price: 59.99,
    rating: 4.6,
    reviewCount: 87,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function RelatedProducts({ currentProductId }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div
            className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105" />
          </div>
          <h3 className="font-medium text-gray-900 group-hover:underline">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>
          <p className="mt-1 font-medium">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
}
