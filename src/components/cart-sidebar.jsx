"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/atom/button";
import { ScrollArea } from "@/components/atom/scroll-area";
import { Separator } from "@/components/atom/separator";

// Sample cart data - in a real app, this would come from your state management
const initialCartItems = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 65.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 249.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Wooden Bookshelf",
    price: 129.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Wooden Bookshelf",
    price: 129.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Wooden Bookshelf",
    price: 129.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Wooden Bookshelf",
    price: 129.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Wooden Bookshelf",
    price: 129.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function CartSidebar() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex h-full w-full flex-col border-l bg-background">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <div className="text-sm text-muted-foreground">
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center space-y-2 p-4">
          <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          <div className="text-xl font-medium">Your cart is empty</div>
          <Button variant="outline" className="mt-4">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1">
            <div className="space-y-4 p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex justify-between">
                      <span className="line-clamp-1 text-sm font-medium">
                        {item.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Shipping</span>
                  <span className="text-sm font-medium">
                    Calculated at checkout
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-base font-medium">Total</span>
                <span className="text-base font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
