import React from 'react'
import "./style-panel.css"

export default function Checkout({cart}) {
    let shipping = 0
    if(cart.totalPrice>0){
        shipping=12;
    }
  return (
    <div className='checkOut'>
    <div className='checkOutItems'>
    <div>Subtotal:{
        (cart.totalPrice).toFixed(2)
        }</div>
    <div>Shipping:{
        shipping
        }</div>
    <div>Est. Tax:{
        (cart.totalPrice*.12).toFixed(2)}</div>
    <div>Total:{
       Number(cart.totalPrice+cart.totalPrice*.12+shipping).toFixed(2)
        }</div>

    </div>
    </div>
  )
}