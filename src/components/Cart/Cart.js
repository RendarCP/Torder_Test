import React, { useState } from 'react'
import Spacer from '../Spacer/Spacer'
import CartItem from '../Cart/CartItem'
import '../../css/Cart.css'

function Cart({ onClickCart, cartLists, onDeleteCart, onPlusCart, onMinusCart, onClickOrder, price, onClickCount }){
  return(
    <div className="CartConatainer">
      <div style={{ fontSize: 30, fontWeight: 'bold'}}>장바구니</div>
      <Spacer top={20} />
      {
        cartLists?.map((cartList) => {
          return(
            <CartItem 
              key={cartList.id} 
              cartList={cartList} 
              onDeleteCart={onDeleteCart}
              onPlusCart={onPlusCart}
              onMinusCart={onMinusCart}
              onClickCount={onClickCount}
            />
          )
        })
      }
      <div className="CartFixedButton">
        <div style={{ display:'flex', justifyContent:'space-between', padding: 30 }}>
          <div className="CartFont">총 {cartLists?.length}가지</div>
          <div className="CartFont" style={{ color: '#fc0000'}}>합계 {price}원</div>
        </div>
        <div style={{ display: 'flex'}}>
          <div 
            className="Buttons" 
            style={{ width: 96, backgroundColor:'#636363' }}
            onClick={onClickCart}
          >닫기</div>
          <div
            onClick={onClickOrder} 
            className="Buttons" 
            style={{ width: 260, backgroundColor: '#fc0000' }}>주문하기</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
