import React from 'react'
import { SanityClient } from '../lib/sanity';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
async function page() {

  const data = await SanityClient.fetch(`*[_type == "products"]{
    title,
    "featimageUrl": featureImage.asset->url
  }`);
  return (
    <div>
       <h1>Products</h1>

       <div className="flex flex-wrap flex-row gap-4 mx-8 justify-center ">
        {data?.map((item: any) => (
          <ProductCard key={item.title} title={item.title}  featImage={item.featimageUrl} />
        ))}
      </div>
    </div>
  )
}

export default page
