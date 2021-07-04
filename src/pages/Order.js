import React, { useState } from 'react'
// component
import LineText from '../components/LineText'
import Spacer from '../components/Spacer/Spacer'
import OptionList from '../components/Options/OptionList'
import OptionPrice from '../components/Options/OptionPrice'
// image
import check from '../images/check.png'
import uncheck from '../images/uncheck.png'
// css
import '../css/Order.css'
import '../css/Option.css'

function Order(){
  const [options, setOptions] = useState([
    {id: 1, name: '선택안함', price: 0, check: false},
    {id: 2, name: '라면사리', price: 1500, check: false},
    {id: 3, name: '계란', price: 5000, check: false},
    {id: 4, name: '오징어튀김', price: 3000, check: false},
    {id: 5, name: '군만두', price: 3000, check: false},
  ])
  const [carts, setCarts] = useState([
    {id: 1, name: '라면사리', price: 1200},
    {id: 2, name: '계란', price: 5000}
  ])

  const onClickCheck = (id) => {
    setOptions(options.map(
      option => option.id === id ? {...option, check: !option.check} : option
    ))
    options.map(option => {
      if(option.id === id && !carts.includes(option.name)){
        setCarts([...carts, { name: option.name, price: option.price}])
      }
    })
  }

  const onTestClick = () => {
  }

  return(
    console.log(carts),
    console.log(options),
    <div className="OrderContainer">
      {/* order 헤더 부분 */}
      <div className="OrderHeader">
        <LineText text="부산국제시장떡볶이 (밀가래떡)" />
        <div style={{ display:'flex'}}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>X</div>
          <Spacer right={10} />
          <div style={{ color: 'white', fontSize: 30 }}>닫기</div>
        </div>
      </div>

      {/* option 부분 */}
      <div className="OrderContent">
        <div className="OrderItem">
          <div>*20개까지 선택할 수 있습니다.</div>
          <OptionList options={options} onClickCheck={onClickCheck}/>
        </div>
        <Spacer right={20} />
        {/* order 가격부분 */}
        <div className="OrderPrice">
          {/* 추가가격부분 */}
          <div style={{ padding: 50, height: '60%' }}>
            <div style={{ fontWeight: 'bold', fontSize: 30 }}>부산국제시장떡볶이 (밀가래떡)</div>
            <Spacer top={20} />
            <div style={{ borderBottom: '3px solid black' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
              <div style={{ fontSize: 20 }}>기본가격</div>
              <div style={{ fontSize: 20, fontWeight: 'bold'}}>8,900원</div>
            </div>
            {
              carts.map(cart => {
                return(
                  <OptionPrice key={cart.id} name={cart.name} price={cart.price}/>
                )
              })
            }
          </div>
          {/* 합계부분 */}
          <div style={{ height: '25%', borderTop: '2px solid gray', padding: '30px 50px' }}>
            <div style={{ display:'flex', justifyContent: 'space-between'}}>
              <div style={{ fontSize: 20 }}>합계</div>
              <div style={{ fontSize: 30 ,fontWeight: 'bold', color: '#fc0000'}}>15100원</div>
            </div>
            <Spacer top={10}/>
            <div className="OrderButton">장바구니 담기</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order