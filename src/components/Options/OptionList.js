import React from 'react'
import Spacer from '../Spacer/Spacer'
import OptionItem from '../Options/OptionItem'

function OptionList({ options, onClickCheck }) {
  // const options = [
  //   {id: 1, name: '선택안함', price: 0, check: false},
  //   {id: 2, name: '라면사리', price: 1500, check: false},
  //   {id: 3, name: '계란', price: 5000, check: false},
  //   {id: 4, name: '오징어튀김', price: 3000, check: false},
  //   {id: 5, name: '군만두', price: 3000, check: false},
  // ]
  return(
    <div>
      {
        options.map(option => {
          return(
            <div key={option.id}>
              <OptionItem id={option.id} checking={option.check} name={option.name} price={option.price} onClickCheck={onClickCheck}/>
              <Spacer top={15} />
            </div>
          )
        })
      }
    </div>
  )
}

export default OptionList