import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/orders" className="text-muted-foreground hover:text-foreground transition-colors">
                My Orders
              </Link>
              <Link to="/favorites" className="text-muted-foreground hover:text-foreground transition-colors">
                Favorites
              </Link>
              <Link to="/account" className="text-muted-foreground hover:text-foreground transition-colors">
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TmallMart
            </div>
          </Link>
          
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pr-24 h-11 border-2 border-border focus:border-primary transition-colors"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/favorites">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
