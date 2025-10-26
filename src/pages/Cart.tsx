import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { defaultProducts } from "@/data/products";

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299,
      quantity: 1,
      image: defaultProducts[0].image
    },
    {
      id: "2",
      name: "Smart Watch Pro",
      price: 199,
      quantity: 2,
      image: defaultProducts[1].image
    },
    {
      id: "3",
      name: "Wireless Earbuds",
      price: 149,
      quantity: 1,
      image: defaultProducts[6].image
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <Checkbox />
                <span className="font-semibold">Select All ({cartItems.length} items)</span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg hover:border-primary transition-colors">
                    <Checkbox />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-bold text-primary mb-4">¥{item.price}</p>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-5 w-5" />
                      </Button>
                      <p className="font-bold text-lg">¥{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-32">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold">¥{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary text-2xl">¥{total}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg font-semibold mb-4">
                Proceed to Checkout
              </Button>

              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
