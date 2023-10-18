import React, { useState } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

const AddProduct = (props) => {
  const [productId, SetProductId] = useState("");
  const [productPrice, SetProductPrice] = useState("");
  const [productName, SetProductName] = useState("");

  const productIdHandler = (event) => {
    SetProductId(event.target.value);
  };
  const productPriceHandler = (event) => {
    SetProductPrice(event.target.value);
  };
  const ProductNameHandler = (event) => {
    SetProductName(event.target.value);
  };
  const fromSubmitHandler = (event) => {
    event.preventDefault();

    props.onAddProduct(productId, productPrice, productName);
//     console.log(productId,productPrice,productName);
    SetProductId("");
    SetProductPrice("");
    SetProductName("");
  };

  return (
    <Card>
      <form onSubmit={fromSubmitHandler}>
        <Input
          type="number"
          label="Product ID:"
          onChange={productIdHandler}
          value={productId}
        />
        <Input
          type="number"
          label="Product Price:"
          onChange={productPriceHandler}
          value={productPrice}
        />
        <Input
          type="text"
          label="Product Name:"
          value={productName}
          onChange={ProductNameHandler}
        />
        <Button type="submit">Add Product</Button>
      </form>
    </Card>
  );
};

export default AddProduct;
