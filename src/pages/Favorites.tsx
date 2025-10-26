import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Heart } from "lucide-react";

const Favorites = () => {
  const favorites = Array.from({ length: 8 }, (_, i) => ({
    id: `fav-${i}`,
    name: `Favorite Product ${i + 1} - Premium Quality Item`,
    price: Math.floor(Math.random() * 800) + 100,
    originalPrice: Math.floor(Math.random() * 1200) + 300,
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 5000}?w=500&q=80`,
    rating: 4.6 + Math.random() * 0.3,
    sales: Math.floor(Math.random() * 4000) + 500
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <div>
            <h1 className="text-3xl font-bold">My Favorites</h1>
            <p className="text-muted-foreground">{favorites.length} items saved</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
