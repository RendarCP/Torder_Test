import React from 'react'
import '../../css/Option.css'

function OptionPrice({ name, price }){
  return(
    <div className="OptionPriceContainer">
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div style={{ fontSize: 20, color: '#0080ff' }}>+</div>
        <div style={{ fontSize: 20, color: '#0080ff' }}>{name}</div>
      </div>
      <div style={{ fontSize: 20, fontWeight: 'bold', color: '#0080ff'}}>{price}원</div>
    </div>
  )
}

export default OptionPrice