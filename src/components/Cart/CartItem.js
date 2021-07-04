import React from 'react'
import Spacer from '../Spacer/Spacer'
import '../../css/Cart.css'

import plus from '../../images/plus.png'
import minus from '../../images/minus.png'

function CartItem({ cartList }){
  return(
    <>
      <div className="CartItemContainer">
        <div style={{ fontSize: 20 }}>{cartList.itemName}</div>
        <Spacer left={20} />
        <div className="ItemDeleteBtn">삭제</div>
      </div>
      <Spacer top={30} />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>기본</div>
        <div>1개</div>
        <div style={{ fontWeight:'bold'}}>{cartList.itemPrice}원</div>
      </div>

      <Spacer top={30} />
      {/* cartItem */}
      <div className="CartItemContainer">
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <img src={plus} className="CartItemImage" />
          <Spacer right={10} />
          <div style={{ fontSize: 30 }}>1개</div>
          <Spacer right={10} />
          <img src={minus} className="CartItemImage"/>
        </div>
        <div style={{ fontSize: 30 ,fontWeight: 'bold', color: '#fc0000'}}>{cartList.itemPrice}원</div>
      </div>
    </>
  )
}

export default CartItem