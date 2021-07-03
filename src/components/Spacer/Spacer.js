import React from 'react'

function Spacer({ top, bottom, left, right }){
  return(
    <div style={{ marginTop: top, marginBottom: bottom, marginLeft: left, marginRight: right}}></div>
  )
}

export default Spacer