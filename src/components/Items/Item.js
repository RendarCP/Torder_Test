import React from 'react'
import '../../css/Item.css'

function Item(){
  return(
    <div style={{ marginTop: 10 }}>
      <div style={{ backgroundColor: 'black', borderRadius: 10 }}>
      <img
        style={{ width: 400, height: 300, borderRadius: '10px 10px 0 0' }} 
        src="https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR008/M00427/1620354409item_700X700_toJPEGBot.jpg" />
        <div style={{ textAlign: 'center' }}>
          <div className="ItemText">부산국제시장 떡볶이</div>
          <div className="ItemText">(밀가래떡)</div>
          <div className="ItemText">8,900원</div>
        </div>
      </div>
    </div>
  )
}

export default Item