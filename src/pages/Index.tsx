import Navbar from "@/components/Navbar";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap, TrendingUp, Gift, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { defaultProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = defaultProducts;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CategoryNav />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-semibold">Double 11 Sale - Up to 70% OFF</span>
              </div>
              <h1 className="text-5xl font-bold mb-4">
                Mega Shopping Festival
              </h1>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Unbeatable deals on millions of products. Limited time only!
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Deals
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Gift className="h-10 w-10 mb-3 text-white" />
                <h3 className="font-bold text-2xl mb-1">50M+</h3>
                <p className="text-sm text-primary-foreground/80">Products Available</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Store className="h-10 w-10 mb-3 text-white" />
                <h3 className="font-bold text-2xl mb-1">100K+</h3>
                <p className="text-sm text-primary-foreground/80">Trusted Brands</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <TrendingUp className="h-10 w-10 mb-3 text-white" />
                <h3 className="font-bold text-2xl mb-1">200M+</h3>
                <p className="text-sm text-primary-foreground/80">Happy Customers</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <Zap className="h-10 w-10 mb-3 text-white" />
                <h3 className="font-bold text-2xl mb-1">24/7</h3>
                <p className="text-sm text-primary-foreground/80">Customer Support</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Flash Deals</h2>
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
              Ending Soon
            </div>
          </div>
          <Link to="/deals">
            <Button variant="ghost">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <Link to="/trending">
            <Button variant="ghost">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.slice().reverse().map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">Company Info</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/press" className="hover:text-foreground transition-colors">Press Center</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Help Center</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground transition-colors">Customer Service</Link></li>
                <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-foreground transition-colors">Returns & Refunds</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shopping</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/deals" className="hover:text-foreground transition-colors">Today's Deals</Link></li>
                <li><Link to="/categories" className="hover:text-foreground transition-colors">All Categories</Link></li>
                <li><Link to="/brands" className="hover:text-foreground transition-colors">Top Brands</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 TmallMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
