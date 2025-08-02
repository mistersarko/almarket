import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { PointsProvider } from "./contexts/PointsContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        AlMarket açylýar...
      </div>
    );
  }

  return (
    <LanguageProvider>
      <PointsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/order/:orderId" element={<OrderStatusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </PointsProvider>
    </LanguageProvider>
  );
}

export default App;
