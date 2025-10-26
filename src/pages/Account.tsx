import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, MapPin, CreditCard, Settings } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <Card className="lg:col-span-1 p-6 h-fit">
            <div className="text-center mb-6">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <h2 className="font-bold text-xl mb-1">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@email.com</p>
            </div>

            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Methods
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="orders">My Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="profile">Profile Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <Card key={order} className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">Order #{1000 + order}</h3>
                          <p className="text-sm text-muted-foreground">Placed on Jan {order}, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-primary">¥{299 * order}</p>
                          <span className="text-sm text-green-600 font-semibold">Delivered</span>
                        </div>
                      </div>

                      <div className="flex gap-4 mb-4">
                        <img
                          src={`https://images.unsplash.com/photo-${1505740420928 + order * 1000}?w=200&q=80`}
                          alt="Product"
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Premium Wireless Headphones</h4>
                          <p className="text-sm text-muted-foreground">Quantity: 1</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">View Details</Button>
                        <Button variant="outline" className="flex-1">Buy Again</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wishlist">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${1505740420928 + item * 1000}?w=400&q=80`}
                        alt="Product"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          Wishlist Product {item}
                        </h3>
                        <p className="text-lg font-bold text-primary mb-3">¥{199 + item * 50}</p>
                        <Button className="w-full bg-gradient-to-r from-primary to-accent">
                          Add to Cart
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="profile">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border rounded-lg"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full p-3 border rounded-lg"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent">
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
