"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/atom/button";
import { Separator } from "@/components/atom/separator";
import { Slider } from "@/components/atom/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atom/collapsible";

export default function CategoryFilters({ category }) {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [openSections, setOpenSections] = useState({
    price: true,
    size: true,
    color: true,
    brand: false,
    material: false,
  });

  // Default filters if category doesn't have specific ones
  const filters = category?.filters || {
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Negru", color: "Black" },
      { name: "Alb", color: "White" },
      { name: "Gri", color: "Gray" },
      { name: "Bleumarin", color: "Navy" },
      { name: "Verde", color: "Green" },
      { name: "Roșu", color: "Red" },
      { name: "Maro", color: "Brown" },
    ],
    priceRange: { min: 19.99, max: 199.99 },
  };

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <Collapsible
        open={openSections.price}
        onOpenChange={() => toggleSection("price")}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Filtreaza dupa pret</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openSections.price ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-2">
          <Slider
            defaultValue={[filters.priceRange.min, filters.priceRange.max]}
            max={200}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-6"
          />
          <div className="flex items-center justify-between">
            <div className="border rounded-md px-3 py-1.5">
              <span className="text-sm">$</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([
                    Number.parseInt(e.target.value),
                    priceRange[1],
                  ])
                }
                className="w-12 text-sm border-0 p-0 focus:outline-none focus:ring-0"
              />
            </div>
            <span className="text-sm text-gray-500">to</span>
            <div className="border rounded-md px-3 py-1.5">
              <span className="text-sm">$</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number.parseInt(e.target.value),
                  ])
                }
                className="w-12 text-sm border-0 p-0 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      {/* Color Filter */}
      <Collapsible
        open={openSections.color}
        onOpenChange={() => toggleSection("color")}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Color</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openSections.color ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-2">
          <div className="grid grid-cols-6 gap-2">
            {filters.colors.map(({ name, color }) => (
              <button
                key={color}
                className="flex flex-col items-center gap-1"
                aria-label={color}
              >
                <span
                  className="h-6 w-6 rounded-full border border-gray-200"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
                <span className="text-xs">{name}</span>
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
    </div>
  );
}
