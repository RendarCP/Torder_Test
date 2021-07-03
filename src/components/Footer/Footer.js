import React from 'react'
import '../../css/Footer.css'
import cart from '../../images/cart.png'
import Spacer from '../Spacer/Spacer'

function Footer(){
  return(
    <div className="Container">
      <div className="CartMenu">
        <img src={cart} style={{ width: 30, height: 30 }}/>
        <Spacer right={10} />
        <div style={{ color:'white', fontSize: 20 }}>장바구니</div>
      </div>
    </div>
  )
}

export default Footer