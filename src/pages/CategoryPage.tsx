import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `cat-${i}`,
    name: `${category} Product ${i + 1} - High Quality with Premium Features`,
    price: Math.floor(Math.random() * 1000) + 100,
    originalPrice: Math.floor(Math.random() * 1500) + 200,
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=500&q=80`,
    rating: 4.5 + Math.random() * 0.4,
    sales: Math.floor(Math.random() * 5000) + 500,
    badge: i % 3 === 0 ? "HOT" : i % 3 === 1 ? "NEW" : undefined
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold capitalize mb-2">{category}</h1>
          <p className="text-muted-foreground">
            Showing {products.length} products
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-32">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <Slider defaultValue={[0, 100]} className="mb-3" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>¥0</span>
                  <span>-</span>
                  <span>¥5000+</span>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Brand</h3>
                <div className="space-y-3">
                  {["Apple", "Samsung", "Sony", "LG", "Xiaomi"].map((brand) => (
                    <div key={brand} className="flex items-center gap-2">
                      <Checkbox id={brand} />
                      <label htmlFor={brand} className="text-sm cursor-pointer">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="space-y-3">
                  {[5, 4, 3].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                        {rating}★ & Above
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent">
                Apply Filters
              </Button>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
