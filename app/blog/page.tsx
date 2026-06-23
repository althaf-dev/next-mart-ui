import React from "react";
import { SanityClient } from "../lib/sanity";
import BlogCard from "../components/BlogCard";

async function page() {
  const data = await SanityClient.fetch(`*[_type == "post"]{
    title,
    excerpt,
    "featimageUrl": featuredImage.asset->url
  }`);
  console.log("data", data);
  return (
    <div>
      this is blog page
      <div className="flex flex-wrap flex-row gap-4 mx-8 justify-center ">
        {data?.map((item: any) => (
          <BlogCard key={item.title} title={item.title} extract={item.excerpt} featImage={item.featimageUrl} />
        ))}
      </div>
    </div>
  );
}

export default page;
