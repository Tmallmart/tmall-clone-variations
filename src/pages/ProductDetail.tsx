import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Share2, ShoppingCart, Shield, Truck, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { defaultProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  
  const currentProduct = defaultProducts.find(p => p.id === id) || defaultProducts[0];
  const relatedProducts = defaultProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {defaultProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-primary transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-3">
              <Badge className="bg-gradient-to-r from-primary to-accent">HOT SALE</Badge>
              <Badge variant="outline">Official Store</Badge>
            </div>

            <h1 className="text-3xl font-bold mb-4">
              {currentProduct.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9</span>
              <span className="text-muted-foreground">(5,230 reviews)</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">10,000+ sold</span>
            </div>

            <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">¥{currentProduct.price}</span>
                {currentProduct.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">¥{currentProduct.originalPrice}</span>
                    <Badge className="bg-destructive">-{Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100)}%</Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Limited time offer - Save ¥{(currentProduct.originalPrice || 0) - currentProduct.price}</p>
            </Card>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block font-semibold mb-2">Color</label>
                <div className="flex gap-2">
                  {["Black", "White", "Blue", "Red"].map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      className="hover:border-primary hover:text-primary"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon">-</Button>
                  <span className="w-16 text-center font-semibold">1</span>
                  <Button variant="outline" size="icon">+</Button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Authentic</p>
                <p className="text-xs text-muted-foreground">100% Genuine</p>
              </Card>
              <Card className="p-4 text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Fast Delivery</p>
              </Card>
              <Card className="p-4 text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30 Days</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger value="description" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Description
              </TabsTrigger>
              <TabsTrigger value="specs" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Reviews (5,230)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="mb-4">
                  Experience premium sound quality with our latest wireless headphones featuring active noise cancellation technology.
                  Perfect for music lovers, travelers, and professionals who demand the best audio experience.
                </p>
                <ul className="space-y-2">
                  <li>• Industry-leading noise cancellation</li>
                  <li>• 40-hour battery life with quick charging</li>
                  <li>• Premium comfort with memory foam ear cushions</li>
                  <li>• Bluetooth 5.0 with multipoint connectivity</li>
                  <li>• Built-in microphone for crystal clear calls</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specs" className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">General</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Brand:</span><span>Premium Audio</span></li>
                    <li className="flex justify-between"><span>Model:</span><span>WH-X1000</span></li>
                    <li className="flex justify-between"><span>Type:</span><span>Over-Ear</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>Battery:</span><span>40 hours</span></li>
                    <li className="flex justify-between"><span>Bluetooth:</span><span>5.0</span></li>
                    <li className="flex justify-between"><span>Weight:</span><span>250g</span></li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <Card key={review} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        U{review}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">User {review}</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Amazing product! The sound quality is incredible and the noise cancellation works perfectly.
                          Highly recommended for anyone looking for premium headphones.
                        </p>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
