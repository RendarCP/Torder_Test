import React from 'react'
import '../../css/Item.css'

function Item({ isCart, list, onClickCartList }){
  return(
    <div style={{ marginTop: 10 }} onClick={()=>onClickCartList(list)}>
      <div style={{ backgroundColor: 'black', borderRadius: 10 }}>
      <img
        style={{ width: isCart ? 270 : 400, height: isCart ? 200 : 300, borderRadius: '10px 10px 0 0' }} 
        src={list.itemImageUrl} />
        <div style={{ textAlign: 'center' }}>
          <div className="ItemText">{list.itemName}</div>
          <div className="ItemText">{list.itemPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Item