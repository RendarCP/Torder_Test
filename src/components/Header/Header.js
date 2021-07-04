import React from 'react'
import '../../css/Header.css'
import Spacer from '../Spacer/Spacer'
import LineText from '../LineText'

function Header(){
  return(
    <div className="HeaderContainer">
      <div className="MainMenu">
        {/* 로고, 메뉴 부분 */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="HeaderLogo">구도로 떡볶이</div>
          <Spacer left={20} />
          <div className="MenuItem">튀김</div>
          <Spacer left={20} />
          <div className="MenuItem">과일&디저트</div>
          <Spacer left={20} />
          <div className="MenuItem">탕</div>
          <Spacer left={20} />
          <div className="MenuItem">맛있는추억</div>
        </div>

        {/* 테이블 번호부분 */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ color: '#ffffff', fontSize: 12 }}>구로도통닭(부평본점)</div>
          <Spacer right={10} />
          <div style={{ 
              color: '#ffffff', 
              backgroundColor: '#ff0000', 
              padding:'0 30px', 
              fontSize: 25, 
              fontWeight: 'bold',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px'}}>
            <div style={{ fontSize: 15 }}>테이블명</div>
            <div style={{ fontSize: 50 }}>12</div>
          </div>
        </div>
      </div>

      {/* 메뉴부분 상호명 */}
      <LineText text="구로도떡볶이" />
    </div>
  )
}

export default Header