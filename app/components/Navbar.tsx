"use client";
import Link from "next/link";
import React from "react";

function Navbar() {
  const handleBlogClick = () => {
    window.gtm("event", "blog_clciked");
  };

  return (
    <div className="border-1 border-blue-100 bg-blue-800 text-white flex gap-4 p-2">
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link onClick={handleBlogClick} href={"/blog"}>
        Blog
      </Link>
    </div>
  );
}

export default Navbar;
