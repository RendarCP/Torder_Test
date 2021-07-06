const SAVE_CART = 'cart/SAVE_CART';
const DELETE_CART = 'cart/DELETE_CART';
const PLUS_CART = 'cart/PLUS_CART'
const MINUS_CART = 'cart/MINUS_CART'
const DELETE_ALL = 'cart/DELETE_ALL'

let nextId = 1;
export const save_cart = (data) => ({ 
  type: SAVE_CART, 
  cartLists: {
    id: nextId++,
    itemName: data.itemName,
    itemPrice: data.itemPrice,
    count: 1
  }
});

export const plus_cart = (id) => ({
  type: PLUS_CART,
  id
})

export const minus_cart = (id) => ({
  type: MINUS_CART,
  id
})

export const delete_cart = id => ({
  type: DELETE_CART,
  id
});

export const delete_all = () => ({
  type: DELETE_ALL,
});


const initialstate = []

export default function cart(state = initialstate, action){
  switch(action.type){
    case SAVE_CART:
      return state.concat(action.cartLists)
    case DELETE_CART:
      return state.filter(
        list => list.id !== action.id
      )
    case PLUS_CART:
      return state.map(
        list => list.id === action.id ? {...list, count: list.count+1 } : list
      )
    case MINUS_CART:
      return state.map(
        list => list.id === action.id ? {...list, count: list.count-1 } : list
      )
    case DELETE_ALL:
      return state.splice(0, state.length)
    default:
      return state;
  }
}