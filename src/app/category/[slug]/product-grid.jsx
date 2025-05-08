import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";

import { Button } from "@/components/atom/button";
import { Badge } from "@/components/atom/badge";

// This would typically come from a database or API based on the category
const generateProducts = (slug, count = 30) => {
  const categories = {
    "mens-clothing": {
      names: [
        "Classic Fit Oxford Shirt",
        "Slim Fit Chino Pants",
        "Merino Wool Sweater",
        "Lightweight Puffer Jacket",
        "Stretch Denim Jeans",
        "Cotton Polo Shirt",
        "Tailored Blazer",
        "Casual Linen Shirt",
        "Performance Golf Polo",
        "Relaxed Fit T-Shirt",
      ],
      priceRange: { min: 24.99, max: 199.99 },
    },
    "womens-clothing": {
      names: [
        "Wrap Midi Dress",
        "High-Rise Skinny Jeans",
        "Cashmere Cardigan",
        "Tailored Blazer",
        "Silk Blouse",
        "Pleated Midi Skirt",
        "Cropped Trousers",
        "Oversized Knit Sweater",
        "Fitted Sheath Dress",
        "Relaxed Linen Shirt",
      ],
      priceRange: { min: 29.99, max: 189.99 },
    },
    accessories: {
      names: [
        "Leather Crossbody Bag",
        "Aviator Sunglasses",
        "Woven Leather Belt",
        "Cashmere Scarf",
        "Minimalist Watch",
        "Leather Wallet",
        "Structured Tote Bag",
        "Beaded Necklace",
        "Stainless Steel Bracelet",
        "Silk Neck Tie",
      ],
      priceRange: { min: 19.99, max: 149.99 },
    },
  };

  const category = categories[slug] || categories["mens-clothing"];
  const products = [];

  for (let i = 1; i <= count; i++) {
    const nameIndex = (i - 1) % category.names.length;
    const price =
      category.priceRange.min +
      Math.random() * (category.priceRange.max - category.priceRange.min);
    const rating = 3 + Math.random() * 2;
    const reviewCount = Math.floor(Math.random() * 200) + 5;
    const isNew = Math.random() > 0.8;
    const isSale = !isNew && Math.random() > 0.8;
    const salePercentage = isSale ? Math.floor(Math.random() * 30) + 10 : 0;

    products.push({
      id: `${slug}-${i}`,
      name: category.names[nameIndex],
      price: price,
      originalPrice: isSale ? price * (1 + salePercentage / 100) : null,
      rating: rating,
      reviewCount: reviewCount,
      image: `/placeholder.svg?height=400&width=400&text=Product+${i}`,
      isNew: isNew,
      isSale: isSale,
      salePercentage: salePercentage,
    });
  }

  return products;
};

export default function ProductGrid({ slug }) {
  const products = generateProducts(slug);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          {/* Product Badge */}
          {product.isNew && (
            <Badge className="absolute top-2 left-2 z-10 bg-black text-white hover:bg-black">
              New
            </Badge>
          )}
          {product.isSale && (
            <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white hover:bg-red-500">
              {product.salePercentage}% Off
            </Badge>
          )}

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Product Image */}
          <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Quick Add Button */}
            <div className="absolute inset-x-0 bottom-0 flex-col items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button className="w-full gap-2 bg-white text-black hover:bg-white/90">
                <ShoppingCart className="h-4 w-4" />
                Quick Add
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Link href={`/product/${product.id}`} className="block">
              <h3 className="font-medium text-gray-900 group-hover:underline">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
