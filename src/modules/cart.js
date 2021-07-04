const SAVE_CART = 'cart/SAVE_CART';
const DELETE_CART = 'cart/DELETE_CART';
const CHANGE_CART = 'cart/CHANGE_CART'

export const save_cart = (data) => ({ 
  type: SAVE_CART, 
  cartLists: {
    itemName: data.itemName,
    itemPrice: data.itemPrice,
    count: 1,
  }
});

export const change_cart = (id) => ({
  type: CHANGE_CART,
  id
})

export const delete_cart = id => ({
  type: DELETE_CART,
  id
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
    case CHANGE_CART:
      return state.map(
        list => list.id === action.id ? {...list, count: action.count+1} : list
      )
    default:
      return state;
  }
}