import React from 'react'

function OrderMessage(){
  return(
    <div style={{ 
      position:'absolute', 
      top: 300, 
      left: 200, 
      backgroundColor: 'red', 
      color: 'white', 
      fontSize: 150,
      padding: 30,
      borderRadius: 10,
    }}>
      주문이 완료 되었습니다
    </div>
  )
}

export default OrderMessage