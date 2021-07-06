import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import Header from '../components/Header/Header'
import ItemList from '../components/Items/ItemList'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import OrderMessage from '../components/OrderMessage'
// css
import '../css/Torder.css'

import { save_cart, plus_cart, minus_cart, delete_cart, delete_all} from '../modules/cart'

function Torder(){
  const ItemLists = [{
    "categories": [
      {
        "categoryId": 1,
        "categoryName": "맛있는 추억",
        "categoryItems": [
          {
            "itemId": 1,
            "itemName": "부산국제시장 떡볶이(밀가래떡)",
            "itemPrice": 8900,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR008/M00427/1620354409item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 2,
            "itemName": "쫑라면",
            "itemPrice": 3000,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 3,
            "itemName": "계란찜",
            "itemPrice": 5900,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00179/1596180154item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 4,
            "itemName": "엄마손주먹밥",
            "itemPrice": 4000,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00180/1596180192item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 5,
            "itemName": "밥",
            "itemPrice": 1000,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/C00089/1600410691item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 6,
            "itemName": "찹쌀바삭치즈누룽지",
            "itemPrice": 3000,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00148/1604145260item_700X700_toJPEGBot.jpg"
          }
        ]
      },
      {
        "categoryId": 2,
        "categoryName": "튀김",
        "categoryItems": [
          {
            "itemId": 7,
            "itemName": "치즈갈릭감자",
            "itemPrice": 6900,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00184/1596181048item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 8,
            "itemName": "튀김쥐포",
            "itemPrice": 4500,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00186/1596181076item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 9,
            "itemName": "대만우유튀김",
            "itemPrice": 4900,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR005/C00094/1605329843item_700X700.png"
          },
          {
            "itemId": 10,
            "itemName": "대왕치즈볼",
            "itemPrice": 6900,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00185/1596181071item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 11,
            "itemName": "진미채튀김",
            "itemPrice": 7500,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00188/1596181089item_700X700_toJPEGBot.jpg"
          },
          {
            "itemId": 12,
            "itemName": "어니언링",
            "itemPrice": 5500,
            "itemSoldOutFlag": false,
            "itemImageUrl": "https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/TPAY_GDR003/M00187/1596181082item_700X700_toJPEGBot.jpg"
          }
        ]
      }
    ]
  }]
  const lists = useSelector(state => state)
  const dispatch = useDispatch();

  const onCreateCart = useCallback(data => dispatch(save_cart(data)), [dispatch]);
  const onPlusCart = useCallback(id => dispatch(plus_cart(id)), [dispatch]);
  const onMinusCart = useCallback(id => dispatch(minus_cart(id)), [dispatch]);
  const onDeleteCart = useCallback(id => dispatch(delete_cart(id)), [dispatch]);
  const onDeleteAll = useCallback(()=> dispatch(delete_all()), [dispatch]); 
  const [isCart, setIsCart] = useState(false)
  const [isMessage, setIsMessage] = useState(false)
  const [price, setPrice] = useState(0)
  const onClickCart = () => {
    setIsCart(!isCart)
    let priceCount = 0;
    lists.cart.map(list => {
      priceCount += list.itemPrice
    })
    setPrice(priceCount)
  }
  const onClickOrder = () => {
    onDeleteAll()
    setIsMessage(true);
    setIsCart(false)
    setTimeout(()=> {
      setIsMessage(false)
    }, 3000)
  }
  const onClickCount = () => {
    let clickCount = 0;
    lists.cart.map(list => {
      clickCount += list.itemPrice * list.count
    })
    setPrice(clickCount)
  }
  return(
    <div>
      <Header />
      {
        ItemLists[0].categories.map(list => {
          return(
            <div>
              <div style={{ padding: 20, color: 'white', fontSize: 30, fontWeight: 'bold'}}>{list.categoryName}</div>
              <ItemList 
                lists={list.categoryItems} 
                isCart={isCart}
                onClickCartList={onCreateCart}
              />
            </div>
          )
        })
      }
      <Footer onClickCart={onClickCart}/>
      {
        isCart ? <Cart 
          onClickCart={onClickCart}
          cartLists={lists.cart}
          onDeleteCart={onDeleteCart}
          onPlusCart={onPlusCart}
          onMinusCart={onMinusCart}
          onClickOrder={onClickOrder}
          onClickCount={onClickCount}
          price={price}
        /> : null
      }
      {
        isMessage ? <OrderMessage /> : null
      }
    </div>
  )
}

export default Torder
