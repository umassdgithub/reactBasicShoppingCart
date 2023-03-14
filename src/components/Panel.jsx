import React, { useEffect } from 'react'
import "./style-panel.css"
import { useState } from 'react'


function formatPrice(a) {
    if (!a.toString().includes(".")) {
      return (<>
        <span className="price">
            {a.toString()}
        </span>
        <span className='price-fraction'>
            00
        </span></>
      );
    } else {
      return (<>
        <span className="price">
            {a.toString().split(".")[0]}
        </span>
        <span className='price-fraction'>
            {a.toString().split(".")[1]}
        </span>
        </>
      );
    }
  }

export default function Panel({data,propCart}) {
    const [cntItem,setCntItem] = useState(0)
  return (
    <div className='card'>
    <img src={data.img} width="80px" height="80px"/>
    <h3>{data.title}</h3>
    <div className="price">{formatPrice(data.price)}</div>
    <span>
        {data.info}
    </span>
    <div className='frm'>
        <button onClick={(d)=>{
            if(cntItem>0){
                setCntItem(cntItem - 1)
                let temp = [...propCart.cartState.items]
                temp.splice(temp.indexOf(data.title),1)
                propCart.setCart({
                    number: propCart.cartState.number - 1,
                    items: temp,
                    totalPrice: propCart.cartState.totalPrice - data.price
                    })
            }
            }}> - </button>
        <div className='itemsAdded'>{cntItem}</div>
        <button onClick={(d)=>{
            setCntItem(cntItem + 1);
            propCart.setCart({
                number: propCart.cartState.number + 1,
                items:[...propCart.cartState.items,data.title],
                totalPrice: propCart.cartState.totalPrice + data.price
                })
            }
            }> + </button>
    </div>
    </div>
  )
}