import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  sales?: number;
  badge?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating = 4.8, 
  sales = 1000,
  badge 
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border transition-all hover:shadow-lg">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-2 py-1 rounded text-xs font-bold">
              {badge}
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
              -{discount}%
            </div>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/80 backdrop-blur-sm hover:bg-card"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({sales}+ sold)</span>
        </div>

        <div className="flex items-end gap-2 mb-3">
          <span className="text-lg font-bold text-primary">¥{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">¥{originalPrice}</span>
          )}
        </div>

        <Button 
          size="sm" 
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
