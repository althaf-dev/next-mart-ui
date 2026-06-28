"use client"

import React from 'react'
import Button from './Button'

function PlaceOrder() {

  const clickHandler = ()=>{
    window.gtag('event', 'purchase'); 
  }

  return (
    <div>
      <Button onClick={clickHandler}>Place Order</Button>
    </div>
  )
}

export default PlaceOrder
