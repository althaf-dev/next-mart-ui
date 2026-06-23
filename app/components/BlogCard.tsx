import React from "react";
import Card, { CardProps } from "./Card";

function BlogCard({ ...props }: CardProps) {
  return (
    <Card card={props}>
      <Card.Title />
      <Card.Image />
      <Card.Excerpt />
    </Card>
  );
}

export default BlogCard;
