import React from 'react'
import Item from '../Items/Item'
import Spacer from '../Spacer/Spacer'

function ItemList({ isCart, lists, onClickCartList }){
  return(
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: 1, width: isCart ? '70%' : '100%' }}>
        {
          lists.map((list,index) => {
            return(
              <>
                <Item key={index} list={list} isCart={isCart} onClickCartList={onClickCartList}/>
                {
                  list.id % 4 === 0 ? null : <Spacer right={20} />
                }
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemList