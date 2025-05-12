"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronDown,
  X,
} from "lucide-react";

import { Button } from "@/components/atom/button";
import { Input } from "@/components/atom/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/atom/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atom/dropdown-menu";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import CartSidebar from "@/components/cart-sidebar";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const cartItemCount = 3; // This would come from your cart state

  const categories = [
    { name: "Home", href: "/category/home", subcategories: [] },
    {
      name: "Women",
      href: "/category/womens-clothing",
      subcategories: ["Clothing", "Shoes", "Accessories", "New Arrivals"],
    },
    {
      name: "Men",
      href: "/category/mens-clothing",
      subcategories: ["Clothing", "Shoes", "Accessories", "New Arrivals"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        Free shipping on orders over $50 | Use code WELCOME10 for 10% off your
        first order
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet defaultOpen>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="border-b py-4">
                  {showSearch ? (
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Search for products..."
                        className="flex-1"
                        autoFocus
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowSearch(false)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base"
                      onClick={() => setShowSearch(true)}
                    >
                      <Search className="mr-2 h-5 w-5" />
                      Search
                    </Button>
                  )}
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <ul className="space-y-4">
                    {categories.map((category) => (
                      <li key={category.name} className="px-2">
                        {category.subcategories.length > 0 ? (
                          <div className="space-y-2">
                            <div className="font-medium">{category.name}</div>
                            <ul className="pl-4 space-y-2">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory}>
                                  <SheetClose asChild>
                                    <Link
                                      href={`${category.href}/${subcategory
                                        .toLowerCase()
                                        .replace(" ", "-")}`}
                                      className="text-gray-600 hover:text-gray-900"
                                    >
                                      {subcategory}
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={category.href}
                              className="font-medium hover:text-gray-900"
                            >
                              {category.name}
                            </Link>
                          </SheetClose>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t py-4 space-y-4">
                  <SheetClose asChild>
                    <Link
                      href="/account"
                      className="flex items-center gap-2 px-2"
                    >
                      <User className="h-5 w-5" />
                      <span>Account</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-2 px-2"
                    >
                      <Heart className="h-5 w-5" />
                      <span>Wishlist</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">STYLISH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                {category.subcategories.length > 0 ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-sm font-medium">
                        {category.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {category.subcategories.map((subcategory) => (
                        <DropdownMenuItem key={subcategory} asChild>
                          <Link
                            href={`${category.href}/${subcategory
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {subcategory}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={category.href}
                    className="text-sm font-medium hover:text-gray-600"
                  >
                    {category.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-[250px]">
                <div className="flex flex-col h-full justify-center items-center max-w-lg mx-auto">
                  <h2 className="text-xl font-semibold mb-4">
                    Search our store
                  </h2>
                  <div className="flex w-full max-w-md">
                    <Input
                      placeholder="Search for products..."
                      className="flex-1"
                      autoFocus
                    />
                    <Button className="ml-2">Search</Button>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Popular searches: T-shirts, Dresses, Jackets
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Search - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Wishlist - Desktop only */}
            <Link href="/wishlist" className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>

            {/* Account */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={"flex flex-col items-start p-2 gap-1"}
              >
                {true ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="ghost">Sign In</Button>
                        </SheetTrigger>
                        <SheetContent>
                          <LoginForm />
                        </SheetContent>
                      </Sheet>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="ghost">Register</Button>
                        </SheetTrigger>
                        <SheetContent>
                          <RegisterForm />
                        </SheetContent>
                      </Sheet>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href={"./userProfile"}>My orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={"./userProfile"}>Log out</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                  <span className="sr-only">Cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <CartSidebar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for products..."
              className="w-full pl-10"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
