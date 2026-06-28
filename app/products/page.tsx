import React from 'react'
import { SanityClient } from '../lib/sanity';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import { buyButtonFlag } from '../lib/flag';
import { growthbookAdapter } from "@flags-sdk/growthbook";
async function page() {

  const data = await SanityClient.fetch(`*[_type == "products"]{
    title,
    "featimageUrl": featureImage.asset->url
  }`);
  await growthbookAdapter.initialize();
  const buttonText = await buyButtonFlag();
  console.log("buttonText",buttonText)
  return (
    <div>
       <h1>Products</h1>

       <div className="flex flex-wrap flex-row gap-4 mx-8 justify-center ">
        {data?.map((item: any) => (
          <ProductCard 
           key={item.title} 
           title={item.title}  
           featImage={item.featimageUrl}
           buttonText={buttonText}
           />
        ))}
      </div>
    </div>
  )
}

export default page
