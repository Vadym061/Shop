import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
import Shop from "./pages/Shop/Shop";
import Favorite from "./pages/Favorite/Favorite";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Men from "./pages/Man/Men";
import Woman from "./pages/Woman/Woman";
import Clothes from "./pages/Clothes/Clothes";
import Footwear from "./pages/Footwear/Footwear";
import Backpack from "./pages/Backpack/Backpack";
import Accessories from "./pages/Accessories/Accessories";
import NewProduct from "./pages/NewProduct/NewProduct";
import Sale from "./pages/Sale/Sale";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";

import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]); // Очистити кошик
  };

  return (
    <Router>
      <Header />
      <Navigation cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateCartItemQuantity={updateCartItemQuantity}
              removeCartItem={removeCartItem}
              clearCart={clearCart} // Передаємо clearCart у компонент Cart
            />
          }
        />
        <Route path="/Чоловічий" element={<Men />} />
        <Route path="/Жіночий" element={<Woman />} />
        <Route path="/Одяг" element={<Clothes />} />
        <Route path="/Взуття" element={<Footwear />} />
        <Route path="/Рюкзаки" element={<Backpack />} />
        <Route path="/Аксесуари" element={<Accessories />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/new-product" element={<NewProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;