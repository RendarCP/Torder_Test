import React from 'react'
import Item from '../Items/Item'
import Spacer from '../Spacer/Spacer'

function ItemList(){
  const lists = [
    {id: 1,},
    {id: 2,},
    {id: 3,},
    {id: 4,},
    {id: 5,},
    {id: 6,},
  ]
  return(
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: 10 }}>
      {
        lists.map(list => {
          return(
            <>
              <Item />
              {
                list.id % 4 === 0 ? null : <Spacer right={20} />
              }
            </>
          )
        })
      }
    </div>
  )
}

export default ItemList