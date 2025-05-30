import { Suspense } from "react";
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
const categories = {
  "mens-clothing": {
    name: "Men's Clothing",
    description:
      "Shop our collection of men's clothing, from casual essentials to formal wear.",
    productCount: 30,
    filters: {
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray", "Navy", "Green", "Red", "Brown"],
      priceRange: { min: 19.99, max: 199.99 },
    },
  },
  "womens-clothing": {
    name: "Women's Clothing",
    description:
      "Discover our latest women's clothing collection for every occasion.",
    productCount: 30,
    filters: {
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Gray", "Navy", "Pink", "Red", "Blue"],
      priceRange: { min: 19.99, max: 199.99 },
    },
  },
  accessories: {
    name: "Accessories",
    description:
      "Complete your look with our range of accessories for every style.",
    productCount: 30,
    filters: {
      colors: ["Black", "White", "Gray", "Brown", "Gold", "Silver"],
      priceRange: { min: 9.99, max: 149.99 },
    },
  },
};

export default async function CategoryPage({ params }) {
  const category = categories[params.slug] || {
    name: "Products",
    description: "Browse our collection of products.",
    productCount: 30,
  };

  const getAllValidCategories = productCategories.map((item) =>
    item.name.toLocaleLowerCase().replace(" ", "-")
  );

  if (!getAllValidCategories.includes(params.slug)) {
    return <Custom404 />;
  }
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
                  Clear All
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
                      <Button variant="outline">Clear All</Button>
                      <Button>Apply Filters</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <p className="text-sm text-gray-500">
                  Showing <span className="font-medium">1-30</span> of{" "}
                  <span className="font-medium">{category.productCount}</span>{" "}
                  products
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
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
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
            </div>

            {/* Product Grid */}
            <ProductGrid slug={params.slug} />

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
