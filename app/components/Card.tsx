"use client"

import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  extract: string;
  featImage:string;
}


function Card({ title, extract,featImage }: CardProps) {

  const handleButtonCLick = ()=>{
      window.gtag("event","block_read" ,{
        title,
        category:"cms",
    
      })
  }
  

  return (
    <div className="border border-blue-100 m-2 p-0 rounded w-1/4 flex flex-col gap-4 pb-2">
      <img src={featImage} alt="featured image" className="object-cover w-full h-[240px] rounded-top"/>
      <p onClick={handleButtonCLick} className="cursor-pointer font-bold p-2 text-2xl">{title}</p>
      <p className="p-2">{extract}</p>
    </div>
  );
}

export default Card;
