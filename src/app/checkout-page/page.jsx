"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Truck, Shield, Minus, Plus, X } from "lucide-react";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Set 123 baloane latex si metalizate , tip arcada , alb si albastru pal , 5 m",
      price: 99.99,
      quantity: 1,
      image: "https://petrecereamea.ro/wp-content/uploads/2021/07/2-1.jpg",
      color: "Negru",
    },
    {
      id: "2",
      name: "Set baloane din latex , galben , 25 cm",
      price: 49.99,
      quantity: 2,
      image:
        "https://petrecereamea.ro/wp-content/uploads/2021/09/Set-baloane-din-latex-galben-25-cm-scaled.jpg",
      size: "M",
      color: "Bleumarin",
    },
    {
      id: "3",
      name: "Set 50 baloane cromate , auriu , 30 cm",
      price: 89.99,
      quantity: 1,
      image:
        "https://petrecereamea.ro/wp-content/uploads/2021/02/admin-ajax-3-fotor-2025022641942.png",
      color: "Maro",
    },
  ]);

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    shippingMethod === "express"
      ? 15.99
      : shippingMethod === "overnight"
      ? 29.99
      : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Finalizare comandă
          </h1>
          <p className="text-gray-600 mt-2">Completați comanda mai jos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  Informații de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prenume</Label>
                    <Input id="firstName" placeholder="Ion" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nume</Label>
                    <Input id="lastName" placeholder="Popescu" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ion.popescu@exemplu.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Număr de telefon</Label>
                  <Input id="phone" type="tel" placeholder="+40 722 123 456" />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  Adresa de livrare
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Adresa</Label>
                  <Input id="address" placeholder="Strada Principală 123" />
                </div>
                <div>
                  <Label htmlFor="apartment">
                    Apartament, scară, etc. (opțional)
                  </Label>
                  <Input id="apartment" placeholder="Ap. 4B" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">Oraș</Label>
                    <Input id="city" placeholder="București" />
                  </div>
                  <div>
                    <Label htmlFor="state">Județ</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectează județul" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ab">Alba</SelectItem>
                        <SelectItem value="ar">Arad</SelectItem>
                        <SelectItem value="ag">Argeș</SelectItem>
                        <SelectItem value="bc">Bacău</SelectItem>
                        <SelectItem value="bh">Bihor</SelectItem>
                        <SelectItem value="bn">Bistrița-Năsăud</SelectItem>
                        <SelectItem value="bt">Botoșani</SelectItem>
                        <SelectItem value="bv">Brașov</SelectItem>
                        <SelectItem value="br">Brăila</SelectItem>
                        <SelectItem value="bz">Buzău</SelectItem>
                        <SelectItem value="cs">Caraș-Severin</SelectItem>
                        <SelectItem value="cl">Călărași</SelectItem>
                        <SelectItem value="cj">Cluj</SelectItem>
                        <SelectItem value="ct">Constanța</SelectItem>
                        <SelectItem value="cv">Covasna</SelectItem>
                        <SelectItem value="db">Dâmbovița</SelectItem>
                        <SelectItem value="dj">Dolj</SelectItem>
                        <SelectItem value="gl">Galați</SelectItem>
                        <SelectItem value="gr">Giurgiu</SelectItem>
                        <SelectItem value="gj">Gorj</SelectItem>
                        <SelectItem value="hr">Harghita</SelectItem>
                        <SelectItem value="hd">Hunedoara</SelectItem>
                        <SelectItem value="il">Ialomița</SelectItem>
                        <SelectItem value="is">Iași</SelectItem>
                        <SelectItem value="if">Ilfov</SelectItem>
                        <SelectItem value="mm">Maramureș</SelectItem>
                        <SelectItem value="mh">Mehedinți</SelectItem>
                        <SelectItem value="ms">Mureș</SelectItem>
                        <SelectItem value="nt">Neamț</SelectItem>
                        <SelectItem value="ot">Olt</SelectItem>
                        <SelectItem value="ph">Prahova</SelectItem>
                        <SelectItem value="sj">Sălaj</SelectItem>
                        <SelectItem value="sm">Satu Mare</SelectItem>
                        <SelectItem value="sb">Sibiu</SelectItem>
                        <SelectItem value="sv">Suceava</SelectItem>
                        <SelectItem value="tr">Teleorman</SelectItem>
                        <SelectItem value="tm">Timiș</SelectItem>
                        <SelectItem value="tl">Tulcea</SelectItem>
                        <SelectItem value="vs">Vaslui</SelectItem>
                        <SelectItem value="vl">Vâlcea</SelectItem>
                        <SelectItem value="vn">Vrancea</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zip">Cod poștal</Label>
                    <Input id="zip" placeholder="010001" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  Metodă de livrare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={shippingMethod}
                  onValueChange={setShippingMethod}
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="standard" id="standard" />
                    <div className="flex-1">
                      <Label
                        htmlFor="standard"
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>Livrare standard</span>
                        </div>
                        <span className="font-semibold">5.99 LEI</span>
                      </Label>
                      <p className="text-sm text-gray-600 ml-6">
                        5-7 zile lucrătoare
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex-1">
                      <Label
                        htmlFor="express"
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>Livrare express</span>
                        </div>
                        <span className="font-semibold">15.99 LEI</span>
                      </Label>
                      <p className="text-sm text-gray-600 ml-6">
                        2-3 zile lucrătoare
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <div className="flex-1">
                      <Label
                        htmlFor="overnight"
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>Livrare în 24h</span>
                        </div>
                        <span className="font-semibold">29.99 LEI</span>
                      </Label>
                      <p className="text-sm text-gray-600 ml-6">
                        Următoarea zi lucrătoare
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  Metodă de plată
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label
                      htmlFor="cash"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span>💵</span>
                      Plată în numerar la livrare
                    </Label>
                  </div>
                </RadioGroup>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Notă:</strong> Veți plăti în numerar la primirea
                    comenzii. Vă rugăm să aveți suma exactă pregătită.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Sumar comandă</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {(item.price * item.quantity).toFixed(2)} LEI
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Order Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} LEI</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livrare</span>
                    <span>{shippingCost.toFixed(2)} LEI</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA</span>
                    <span>{tax.toFixed(2)} LEI</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{total.toFixed(2)} LEI</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Shield className="w-4 h-4 mr-2" />
                  Finalizează comanda
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p className="flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4" />
                    Checkout securizat cu criptare SSL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
