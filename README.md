// AlMarket Full Frontend Setup (React + TailwindCSS + All Pages)

import React from "react"; import { createRoot } from "react-dom/client"; import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

// Pages import Home from "./pages/Home"; import Catalog from "./pages/Catalog"; import Checkout from "./pages/Checkout"; import AdminPanel from "./pages/AdminPanel"; import OrderTracking from "./pages/OrderTracking"; import Chat from "./pages/Chat"; import PaymentSuccess from "./pages/PaymentSuccess"; import PaymentCancel from "./pages/PaymentCancel"; import NotFound from "./pages/NotFound";

// Components import Layout from "./components/Layout";

// Styles import "./index.css";

const App = () => ( <Router> <Layout> <Routes> <Route path="/" element={<Home />} /> <Route path="/catalog" element={<Catalog />} /> <Route path="/checkout" element={<Checkout />} /> <Route path="/admin" element={<AdminPanel />} /> <Route path="/order/:orderId" element={<OrderTracking />} /> <Route path="/chat/:orderId" element={<Chat />} /> <Route path="/payment-success" element={<PaymentSuccess />} /> <Route path="/payment-cancel" element={<PaymentCancel />} /> <Route path="*" element={<NotFound />} /> </Routes> </Layout> </Router> );

const container = document.getElementById("root"); const root = createRoot(container); root.render(<App />);

