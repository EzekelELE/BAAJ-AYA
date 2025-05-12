"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  CreditCard,
  Edit,
  Heart,
  MapPin,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/atom/avatar";
import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Separator } from "@/components/atom/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atom/tabs";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Member since 2022</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>12 Orders</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Button>
            </CardFooter>
          </Card>
        </aside>

        <main className="flex-1">
          <Tabs
            defaultValue="info"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-4 w-full mb-6">
              <TabsTrigger value="info">
                <User className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block">Information</span>
              </TabsTrigger>
              <TabsTrigger value="orders">
                <ShoppingBag className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist">
                <Heart className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Full Name
                        </h3>
                        <p>John Doe</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Email
                        </h3>
                        <p>john.doe@example.com</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Phone
                        </h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Date of Birth
                        </h3>
                        <p>January 15, 1985</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">
                        Shipping Address
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <p className="font-medium">Home</p>
                          <p className="text-muted-foreground">
                            123 Main Street, Apt 4B
                            <br />
                            New York, NY 10001
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">
                        Payment Methods
                      </h3>
                      <div className="grid gap-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <CreditCard className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">
                              Expires 04/2025
                            </p>
                          </div>
                          <Badge className="ml-auto">Default</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View and track your recent orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border rounded-lg overflow-hidden"
                      >
                        <div className="bg-muted/40 p-4 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : "outline"
                              }
                            >
                              {order.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Package className="mr-2 h-4 w-4" />
                              Track Order
                            </Button>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="grid gap-4">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
                                  <Image
                                    src={`/placeholder.svg?height=64&width=64`}
                                    alt={item.name}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium truncate">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Qty: {item.quantity} × $
                                    {item.price.toFixed(2)}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">
                                    ${(item.quantity * item.price).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-muted/40 p-4 flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Total
                            </p>
                            <p className="font-medium">
                              ${order.total.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Reorder
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">View All Orders</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>Wishlist</CardTitle>
                  <CardDescription>
                    Items you've saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="group relative">
                        <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                          <Image
                            src={`/placeholder.svg?height=300&width=300`}
                            alt={item.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white"
                          >
                            <Heart className="h-4 w-4 fill-primary text-primary" />
                            <span className="sr-only">
                              Remove from wishlist
                            </span>
                          </Button>
                        </div>
                        <div className="mt-3 flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.category}
                            </p>
                          </div>
                          <p className="font-medium">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-3">
                          <Button className="w-full">Add to Cart</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Email Notifications
                      </h3>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Order updates</p>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about your orders
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              On
                            </Button>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Promotions and deals</p>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about new promotions
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              Off
                            </Button>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Account activity</p>
                            <p className="text-sm text-muted-foreground">
                              Receive emails for login attempts
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              On
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Privacy Settings
                      </h3>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Profile visibility</p>
                            <p className="text-sm text-muted-foreground">
                              Control who can see your profile
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              Private
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Account Actions
                      </h3>
                      <div className="grid gap-4">
                        <Button variant="outline">Change Password</Button>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

// Sample data
const orders = [
  {
    id: "ORD-5523",
    date: "May 2, 2023",
    status: "Delivered",
    total: 129.95,
    items: [
      {
        name: "Wireless Headphones",
        quantity: 1,
        price: 89.99,
      },
      {
        name: "Phone Case",
        quantity: 1,
        price: 19.99,
      },
      {
        name: "Screen Protector",
        quantity: 1,
        price: 19.97,
      },
    ],
  },
  {
    id: "ORD-4298",
    date: "April 15, 2023",
    status: "Shipped",
    total: 249.99,
    items: [
      {
        name: "Smart Watch Series 7",
        quantity: 1,
        price: 249.99,
      },
    ],
  },
  {
    id: "ORD-3187",
    date: "March 22, 2023",
    status: "Delivered",
    total: 59.97,
    items: [
      {
        name: "Cotton T-Shirt 3-Pack",
        quantity: 1,
        price: 29.99,
      },
      {
        name: "Socks Bundle",
        quantity: 1,
        price: 19.99,
      },
      {
        name: "Leather Belt",
        quantity: 1,
        price: 9.99,
      },
    ],
  },
];

const wishlistItems = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: 49.99,
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 129.99,
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 24.95,
  },
  {
    id: 4,
    name: "Fitness Tracker",
    category: "Electronics",
    price: 89.99,
  },
  {
    id: 5,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 79.95,
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
  },
];
