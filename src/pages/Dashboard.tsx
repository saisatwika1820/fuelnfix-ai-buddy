import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, Wrench, Clock, CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Order {
  id: string;
  service_type: string;
  location: string;
  status: string;
  fuel_type?: string;
  fuel_quantity?: number;
  total_amount?: number;
  created_at: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'default';
      case 'confirmed':
        return 'secondary';
      case 'in_progress':
        return 'outline';
      case 'completed':
        return 'default';
      case 'cancelled':
        return 'destructive';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email}! Manage your fuel delivery and roadside assistance orders.
          </p>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>No Orders Yet</CardTitle>
              <CardDescription>
                You haven't placed any orders yet. Get started by ordering fuel delivery or roadside assistance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Place Your First Order</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">Your Orders</h2>
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {order.service_type === 'fuel_delivery' ? (
                        <Fuel className="h-5 w-5 text-primary" />
                      ) : (
                        <Wrench className="h-5 w-5 text-accent" />
                      )}
                      <CardTitle className="text-lg">
                        {order.service_type === 'fuel_delivery' ? 'Fuel Delivery' : 'Roadside Assistance'}
                      </CardTitle>
                    </div>
                    <Badge variant={getStatusColor(order.status) as any} className="flex items-center gap-1">
                      {getStatusIcon(order.status)}
                      {order.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <CardDescription>
                    Ordered on {new Date(order.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 text-sm">
                    <div>
                      <span className="font-medium">Location:</span> {order.location}
                    </div>
                    {order.fuel_type && (
                      <div>
                        <span className="font-medium">Fuel Type:</span> {order.fuel_type}
                      </div>
                    )}
                    {order.fuel_quantity && (
                      <div>
                        <span className="font-medium">Quantity:</span> {order.fuel_quantity} liters
                      </div>
                    )}
                    {order.total_amount && (
                      <div>
                        <span className="font-medium">Total:</span> ₹{order.total_amount}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;