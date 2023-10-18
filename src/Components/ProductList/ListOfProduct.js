import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './ListOfProduct.css'

const ListOfProduct = ({ products, onDelete }) => {
  let total = 0;
  for (const product of products) {
    parseFloat((total += product.price));
  }
  return (
    <Card>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <Button
              type="submit"
              id={product.id}
              onClick={() => onDelete(product.id)}
            >
              Delete Product
            </Button>
          </li>
        ))}
      </ul>
      <h2>
        {" "}
        Total Value worth of Products:
        <span>&#128184; {parseFloat(total)}</span>
      </h2>
    </Card>
  );
};

export default ListOfProduct;
