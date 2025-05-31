"use client";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Filter, ChevronDown, Grid3X3, LayoutGrid } from "lucide-react";
import { productCategories } from "../../constants/index";
import { Button } from "@/components/atom/button";
import Custom404 from "@/app/custom404/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atom/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atom/sheet";
import ProductGrid from "./product-grid";
import CategoryFilters from "./category-filters";
import CategoryLoading from "./loading";

// This would typically come from a database or API

export default function CategoryPage({ params }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/tasks");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched products:", data);

        const productsData = Array.isArray(data) ? data : data.products || [];
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const category = {
    name: "Products",
    description: "Exploreaza gama noastra de produse.",
    productCount: 30,
  };

  const getAllValidCategories = productCategories.map((item) =>
    item.name.toLocaleLowerCase().replace(" ", "-")
  );

  // if (!getAllValidCategories.includes(slug)) {
  //   return <Custom404 />;
  // }

  return (
    <Suspense fallback={<CategoryLoading />}>
      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 text-sm">
                  Inlatura filtre
                </Button>
              </div>
              <CategoryFilters category={category} />
            </div>
          </div>

          {/* Product Grid and Mobile Filters */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Narrow down your product search with our filters.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <CategoryFilters category={category} />
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline">Inlatura filtre</Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <p className="text-sm text-gray-500">
                  Rezultate <span className="font-medium">1-30</span> din{" "}
                  <span className="font-medium">{category.productCount}</span>{" "}
                  produse
                </p>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <div className="hidden sm:flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>

                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Sorteaza dupa</SelectItem>
                    <SelectItem value="newest">Cele mai noi</SelectItem>
                    <SelectItem value="price-asc">Pret: Crescator</SelectItem>
                    <SelectItem value="price-desc">
                      Pret: Descrescator
                    </SelectItem>
                    <SelectItem value="rating">Populare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {/* <div className="flex flex-wrap gap-2 mb-6">
              <Button
                variant="secondary"
                size="sm"
                className="h-7 rounded-full"
              >
                Under $50
                <span className="ml-1 text-xs">×</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-7 rounded-full"
              >
                Size: M<span className="ml-1 text-xs">×</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="h-7 rounded-full"
              >
                Color: Black
                <span className="ml-1 text-xs">×</span>
              </Button>
            </div> */}

            <ProductGrid products={products} />

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                <Button variant="outline" size="sm" className="h-9 w-9">
                  1
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9">
                  2
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="ghost" size="sm" className="h-9 w-9">
                  8
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
