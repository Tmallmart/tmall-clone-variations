import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Zap, Clock } from "lucide-react";

const Deals = () => {
  const flashDeals = Array.from({ length: 12 }, (_, i) => ({
    id: `deal-${i}`,
    name: `Flash Deal Product ${i + 1} - Limited Time Offer`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 1000) + 200,
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 10000}?w=500&q=80`,
    badge: "FLASH",
    rating: 4.5 + Math.random() * 0.4,
    sales: Math.floor(Math.random() * 10000) + 1000
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      {/* Flash Sale Banner */}
      <section className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Zap className="h-5 w-5" />
              <span className="font-bold">FLASH SALE</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Limited Time Deals</h1>
            <p className="text-xl mb-6">Up to 70% OFF - Hurry, while stocks last!</p>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-4">
              <Clock className="h-6 w-6" />
              <div className="flex gap-2">
                {["12", "34", "56", "78"].map((time, i) => (
                  <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{time}</div>
                    <div className="text-xs opacity-80">{["HRS", "MIN", "SEC", "MS"][i]}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
