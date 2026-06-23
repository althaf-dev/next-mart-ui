import React from "react";
import Card, { CardProps } from "./Card";

function ProductCard(props: CardProps) {
  return (
    <>
      <Card card={props}>
        <Card.Title />
        <Card.Image />
        <Card.Button
          onClick={() => {
            alert("test");
          }}
        >
          Add to cart
        </Card.Button>
      </Card>
    </>
  );
}

export default ProductCard;
