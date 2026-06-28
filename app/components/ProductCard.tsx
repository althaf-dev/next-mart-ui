"use client"
import React from "react";
import Card, { CardProps } from "./Card";
import { buyButtonFlag } from "../lib/flag";


function ProductCard(props: CardProps) {



  return (
    <>
      <Card card={props}>
        <Card.Title />
        <Card.Image />
        <Card.Button
          onClick={() => {
            window.gtag('event', 'add_to_cart', {
              product_id: 'WM001',
              product_name: props.title
            });
          }}
        >
          {props.buttonText}
        </Card.Button>
      </Card>
    </>
  );
}

export default ProductCard;
