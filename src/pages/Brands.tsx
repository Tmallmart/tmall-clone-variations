import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, ChevronRight } from "lucide-react";

const Brands = () => {
  const brands = [
    { name: "Apple", products: 1234, logo: "🍎" },
    { name: "Samsung", products: 2345, logo: "📱" },
    { name: "Sony", products: 890, logo: "🎮" },
    { name: "LG", products: 1567, logo: "📺" },
    { name: "Nike", products: 3421, logo: "👟" },
    { name: "Adidas", products: 2987, logo: "⚽" },
    { name: "Canon", products: 654, logo: "📷" },
    { name: "Nikon", products: 543, logo: "📸" },
    { name: "Dell", products: 987, logo: "💻" },
    { name: "HP", products: 1876, logo: "🖨️" },
    { name: "Lenovo", products: 1234, logo: "⌨️" },
    { name: "Asus", products: 876, logo: "🎮" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Top Brands</h1>
          <p className="text-muted-foreground">
            Shop from the world's most trusted brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="p-6 hover:shadow-lg transition-all group cursor-pointer">
              <Link to={`/brand/${brand.name.toLowerCase()}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{brand.logo}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {brand.products.toLocaleString()} products
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <Store className="mr-2 h-4 w-4" />
                    Visit Store
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
