import React from 'react'
import Spacer from '../components/Spacer/Spacer'

function LineText({ text }) {
  return(
    <div style={{ display: 'flex', marginTop: 30 }}>
      <div style={{ borderLeft: 'solid red'}}></div>
      <Spacer right={20} />
      <div style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{text}</div>
    </div>
  )
}

export default LineText