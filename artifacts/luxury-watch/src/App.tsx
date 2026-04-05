import { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import useThemeStore from './store/themeStore';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import FloatingConcierge from './components/FloatingConcierge';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import WishlistPage from './pages/WishlistPage';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import OrdersPage from './pages/OrdersPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import JournalPage from './pages/JournalPage';
import JournalArticlePage from './pages/JournalArticlePage';
import SustainabilityPage from './pages/SustainabilityPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import ShippingPage from './pages/ShippingPage';
import WarrantyPage from './pages/WarrantyPage';
import WatchCarePage from './pages/WatchCarePage';

import AdminPage from './pages/AdminPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminOrdersPage from './pages/AdminOrdersPage';

const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
    <div className="text-center px-4">
      <p className="text-8xl font-bold font-serif text-amber-500 mb-4">404</p>
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Page Not Found</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-colors">
        Return Home
      </a>
    </div>
  </div>
);

const noLayoutPaths = ['/checkout', '/login', '/register', '/order-confirmation'];

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <FloatingConcierge />
    </div>
  );
}

function MinimalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {children}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Switch>
      <Route path="/login">
        <MinimalLayout><LoginPage /></MinimalLayout>
      </Route>
      <Route path="/register">
        <MinimalLayout><RegisterPage /></MinimalLayout>
      </Route>
      <Route path="/checkout">
        <MinimalLayout><CheckoutPage /></MinimalLayout>
      </Route>
      <Route path="/order-confirmation">
        <MinimalLayout><OrderConfirmationPage /></MinimalLayout>
      </Route>

      <Route path="/">
        <AppLayout><HomePage /></AppLayout>
      </Route>
      <Route path="/shop/:category">
        <AppLayout><ShopPage /></AppLayout>
      </Route>
      <Route path="/shop">
        <AppLayout><ShopPage /></AppLayout>
      </Route>
      <Route path="/product/:id">
        <AppLayout><ProductDetailPage /></AppLayout>
      </Route>
      <Route path="/cart">
        <AppLayout><CartPage /></AppLayout>
      </Route>
      <Route path="/wishlist">
        <AppLayout><WishlistPage /></AppLayout>
      </Route>

      <Route path="/account/orders">
        <AppLayout><OrdersPage /></AppLayout>
      </Route>
      <Route path="/account">
        <AppLayout><AccountPage /></AppLayout>
      </Route>

      <Route path="/about">
        <AppLayout><AboutPage /></AppLayout>
      </Route>
      <Route path="/contact">
        <AppLayout><ContactPage /></AppLayout>
      </Route>
      <Route path="/faq">
        <AppLayout><FAQPage /></AppLayout>
      </Route>
      <Route path="/journal/:slug">
        <AppLayout><JournalArticlePage /></AppLayout>
      </Route>
      <Route path="/journal">
        <AppLayout><JournalPage /></AppLayout>
      </Route>
      <Route path="/sustainability">
        <AppLayout><SustainabilityPage /></AppLayout>
      </Route>
      <Route path="/careers">
        <AppLayout><CareersPage /></AppLayout>
      </Route>
      <Route path="/press">
        <AppLayout><PressPage /></AppLayout>
      </Route>
      <Route path="/shipping">
        <AppLayout><ShippingPage /></AppLayout>
      </Route>
      <Route path="/warranty">
        <AppLayout><WarrantyPage /></AppLayout>
      </Route>
      <Route path="/watch-care">
        <AppLayout><WatchCarePage /></AppLayout>
      </Route>

      <Route path="/admin/products">
        <AdminProductsPage />
      </Route>
      <Route path="/admin/orders">
        <AdminOrdersPage />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>

      <Route>
        <AppLayout><NotFound /></AppLayout>
      </Route>
    </Switch>
  );
}
