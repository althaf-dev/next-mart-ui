import React from 'react'
import Button from '../components/Button'
import PlaceOrder from '../components/PlaceOrder'

function page() {
  return (
    <div>
      this is  place order page

     <PlaceOrder/>
    </div>
  )
}

export default page

// import { growthbookAdapter } from '@flags-sdk/growthbook';
// import { flag } from 'flags/next';
// import { identify } from '@/lib/identify';

// export const myFeatureFlag = flag<string>({
//   key: "buy-buytton",
//   adapter: growthbookAdapter.feature<string>(),
//   defaultValue: "fallback",
//   identify,
// });

// import { myFeatureFlag } from '@/flags';

// function MyComponent() {
//   const value = await myFeatureFlag();
//   // value is: "fallback"

//   return (
//     <div>{value}</div>
//   );
// }

// sdk-SyDt3BJqFhkfJL8U