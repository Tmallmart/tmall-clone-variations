import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Truck, CheckCircle, XCircle } from "lucide-react";
import { defaultProducts } from "@/data/products";

const Orders = () => {
  const orders = [
    {
      id: "1001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299,
      items: [
        { name: "Premium Wireless Headphones", qty: 1, image: defaultProducts[0].image }
      ]
    },
    {
      id: "1002",
      date: "2024-01-12",
      status: "In Transit",
      total: 598,
      items: [
        { name: "Smart Watch Pro", qty: 2, image: defaultProducts[1].image }
      ]
    },
    {
      id: "1003",
      date: "2024-01-08",
      status: "Processing",
      total: 149,
      items: [
        { name: "Wireless Earbuds", qty: 1, image: defaultProducts[6].image }
      ]
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "In Transit":
        return <Truck className="h-5 w-5 text-blue-600" />;
      case "Processing":
        return <Package className="h-5 w-5 text-orange-600" />;
      default:
        return <XCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600";
      case "In Transit":
        return "text-blue-600";
      case "Processing":
        return "text-orange-600";
      default:
        return "text-red-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="transit">In Transit</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex justify-between items-start mb-4 pb-4 border-b">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">Order #{order.id}</h3>
                      {getStatusIcon(order.status)}
                      <span className={`font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Total</p>
                    <p className="font-bold text-2xl text-primary">¥{order.total}</p>
                  </div>
                </div>

                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Quantity: {item.qty}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 pt-4 border-t">
                  <Button variant="outline" className="flex-1">Track Order</Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                  {order.status === "Delivered" && (
                    <Button className="flex-1 bg-gradient-to-r from-primary to-accent">
                      Buy Again
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="processing">
            {orders.filter(o => o.status === "Processing").map((order) => (
              <Card key={order.id} className="p-6 mb-4">
                <p className="text-muted-foreground">Order #{order.id} - Processing</p>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="transit">
            {orders.filter(o => o.status === "In Transit").map((order) => (
              <Card key={order.id} className="p-6 mb-4">
                <p className="text-muted-foreground">Order #{order.id} - In Transit</p>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="delivered">
            {orders.filter(o => o.status === "Delivered").map((order) => (
              <Card key={order.id} className="p-6 mb-4">
                <p className="text-muted-foreground">Order #{order.id} - Delivered</p>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;
