import React, { useState, useEffect } from "react";
import "./App.css";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListOfProduct from "./Components/ProductList/ListOfProduct";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const savedProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("product_")) {
        const product = JSON.parse(localStorage.getItem(key));
        savedProducts.push(product);
      }
    }
    setProductList(savedProducts);
  }, []); 

  const addProductHandler = (productId, productPrice, productName) => {
    const newProduct = {
      id: productId,
      price: parseFloat(productPrice),
      name: productName,
    };

    localStorage.setItem(`product_${productId}`, JSON.stringify(newProduct));

    setProductList([...productList, newProduct]);
  };

  const deleteProductHandler = (productId) => {
    const updatedProducts = productList.filter(
      (product) => product.id !== productId
    );
    setProductList(updatedProducts);
    localStorage.removeItem(`product_${productId}`);
  };

  return (
    <div className="App">
      <AddProduct onAddProduct={addProductHandler} />
      <ListOfProduct products={productList} onDelete={deleteProductHandler} />
    </div>
  );
}

export default App;
