import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import HowWeWork from './pages/HowWeWork';
import EnquiryForm from './pages/EnquiryForm';

/**
 * Main App Component
 * MenCryToo - Purpose-driven clothing brand
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col debug">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/enquiry-form" element={<EnquiryForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
