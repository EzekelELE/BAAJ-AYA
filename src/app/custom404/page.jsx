"use client";

import { Search, Home, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
  const popularCategories = [
    { name: "Electronics", href: "/electronics", icon: "📱" },
    { name: "Clothing", href: "/clothing", icon: "👕" },
    { name: "Home & Garden", href: "/home-garden", icon: "🏠" },
    { name: "Sports", href: "/sports", icon: "⚽" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      image: "/placeholder.svg?height=200&width=200",
      href: "/products/wireless-headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199.99",
      image: "/placeholder.svg?height=200&width=200",
      href: "/products/smart-watch",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$49.99",
      image: "/placeholder.svg?height=200&width=200",
      href: "/products/laptop-stand",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 mt-12">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Oops! Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off. Don't
              worry, our best products are still here waiting for you!
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-3"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Browse Products
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/categories">View Categories</Link>
            </Button>
          </div>
        </div>

        {/* Popular Categories */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Link href={category.href}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h4 className="font-semibold">{category.name}</h4>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-8">
            You Might Like These
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <Link href={product.href}>
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-2">{product.name}</h4>
                    <p className="text-lg font-bold text-primary">
                      {product.price}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                Our customer support team is here to assist you
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/faq">View FAQ</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/help">Help Center</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
