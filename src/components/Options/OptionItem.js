import React from 'react'
import '../../css/Option.css'

import check from '../../images/check.png'
import uncheck from '../../images/uncheck.png'
import Spacer from '../Spacer/Spacer'

function OptionItem({ id, name, checking, price, onClickCheck }) {
  return(
    <div className={checking ? "CheckoptionContatiner" :"OptionItemContainer"} onClick={() => onClickCheck(id)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={ checking ? check : uncheck} className="OptionItemImage" />
        <Spacer left={15} />
        <div style={{ fontSize: 25, color: checking ? '#fc0000' : '#000000' }}>{name}</div>
      </div>
      <div style={{ fontWeight: checking ? 'bold' : null, fontSize: 25 }}>+{price} 원</div>
    </div>
  )
}

export default OptionItem