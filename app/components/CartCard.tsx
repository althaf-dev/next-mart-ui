"use client"
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'

function CartCard() {

  const router = useRouter();

  const clickHandler = ()=>{
    window.gtag('event', 'begin_checkout');
    router.push("/placeOrder")
  }


  return (
    <div>
    <Button onClick={clickHandler}  >checkout </Button>
 </div>
  )
}

export default CartCard
