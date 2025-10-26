import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Laptop, 
  Watch, 
  Shirt, 
  Home, 
  Utensils,
  Gamepad2,
  Baby,
  Dumbbell,
  Sparkles
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, path: "/category/electronics" },
  { name: "Computers", icon: Laptop, path: "/category/computers" },
  { name: "Fashion", icon: Shirt, path: "/category/fashion" },
  { name: "Watches", icon: Watch, path: "/category/watches" },
  { name: "Home", icon: Home, path: "/category/home" },
  { name: "Food", icon: Utensils, path: "/category/food" },
  { name: "Gaming", icon: Gamepad2, path: "/category/gaming" },
  { name: "Baby", icon: Baby, path: "/category/baby" },
  { name: "Sports", icon: Dumbbell, path: "/category/sports" },
  { name: "Beauty", icon: Sparkles, path: "/category/beauty" },
];

const CategoryNav = () => {
  return (
    <div className="bg-card border-b sticky top-[120px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all whitespace-nowrap group"
            >
              <category.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
