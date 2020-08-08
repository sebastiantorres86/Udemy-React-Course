import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  // Crear listado de productos
  const [products, saveProducts] = useState([
    { id: 1, name: "Shirt ReactJS", price: 50 },
    { id: 2, name: "Shirt VueJS", price: 40 },
    { id: 3, name: "Shirt Node.JS", price: 30 },
    { id: 4, name: "Shirt Angular", price: 20 },
  ]);

  // State para un carrito de compras
  const [cart, addProduct] = useState([]);

  // Obtener la fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="On-line Shop" />

      <h1>Product List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          addProduct={addProduct}
        />
      ))}

      <Cart cart={cart} addProduct={addProduct} />

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
