import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Listing from "./pages/singleListing/Listing";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/CheckOut";
import Checked from "./pages/checked/Checked";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listing/" element={<Listing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checked" element={<Checked />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
