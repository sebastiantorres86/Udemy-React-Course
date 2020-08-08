import React from "react";

const Product = ({ product, cart, addProduct, products }) => {
  const { name, price, id } = product;

  // Add a product to the cart
  const selectProduct = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addProduct([...cart, product]);
  };

  // Delete a product
  const deleteProduct = id => {
    const products =  cart.filter(product => product.id !== id)

    // Add product in the State
    addProduct(products)
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>

      {products ? (
        <button type="button" onClick={() => selectProduct(id)}>
          Buy
        </button>
      ) : (
        <button type="button" onClick={() => deleteProduct(id)}>Delete</button>
      )}
    </div>
  );
};

export default Product;
