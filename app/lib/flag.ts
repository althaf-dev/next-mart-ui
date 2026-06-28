import { growthbookAdapter } from "@flags-sdk/growthbook";
import { flag } from "flags/next";

export const buyButtonFlag = flag<string>({
  key: "buy-buytton",
  adapter: growthbookAdapter.feature<string>(),
  defaultValue: "add to cart",
  identify:()=>({
    id:"1",
    country:"IN"
  })
});