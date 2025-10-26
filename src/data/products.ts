import headphones from "@/assets/products/headphones-1.jpg";
import smartwatch from "@/assets/products/smartwatch-1.jpg";
import handbag from "@/assets/products/handbag-1.jpg";
import tv from "@/assets/products/tv-1.jpg";
import laptop from "@/assets/products/laptop-1.jpg";
import camera from "@/assets/products/camera-1.jpg";
import earbuds from "@/assets/products/earbuds-1.jpg";
import sneakers from "@/assets/products/sneakers-1.jpg";

export const productImages = {
  headphones,
  smartwatch,
  handbag,
  tv,
  laptop,
  camera,
  earbuds,
  sneakers
};

export const defaultProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones - Noise Cancelling with 40H Battery Life",
    price: 299,
    originalPrice: 599,
    image: headphones,
    badge: "HOT",
    rating: 4.9,
    sales: 5230
  },
  {
    id: "2",
    name: "Smart Watch Pro - Fitness Tracker with Heart Rate Monitor",
    price: 199,
    originalPrice: 399,
    image: smartwatch,
    badge: "NEW",
    rating: 4.8,
    sales: 3120
  },
  {
    id: "3",
    name: "Luxury Leather Handbag - Designer Collection 2024",
    price: 899,
    originalPrice: 1299,
    image: handbag,
    rating: 4.7,
    sales: 890
  },
  {
    id: "4",
    name: "4K Ultra HD Smart TV - 55 inch with HDR10+ Support",
    price: 1299,
    originalPrice: 1999,
    image: tv,
    badge: "SALE",
    rating: 4.9,
    sales: 2100
  },
  {
    id: "5",
    name: "Gaming Laptop - RTX 4080, 32GB RAM, 1TB SSD",
    price: 2499,
    originalPrice: 3199,
    image: laptop,
    badge: "HOT",
    rating: 4.8,
    sales: 1560
  },
  {
    id: "6",
    name: "Professional Camera Kit - 24MP DSLR with Lenses",
    price: 1899,
    originalPrice: 2599,
    image: camera,
    rating: 4.9,
    sales: 780
  },
  {
    id: "7",
    name: "Wireless Earbuds Pro - Active Noise Cancellation",
    price: 149,
    originalPrice: 249,
    image: earbuds,
    badge: "NEW",
    rating: 4.7,
    sales: 4200
  },
  {
    id: "8",
    name: "Designer Sneakers - Limited Edition Colorway",
    price: 399,
    originalPrice: 599,
    image: sneakers,
    rating: 4.8,
    sales: 2340
  }
];
