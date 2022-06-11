import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import Helmet from '../../components/Helmet'
import Button from '../../components/button/Button'
import CartItem from '../../components/cartItem/CartItem'


import productData from '../../assets/fake-data/products'
import numberWithCommas from '../../utils/numberWithCommas'

const Cart = () => {



  const cartItems = useSelector(state => state.cartItems.value)

  
  const [cartProducts, setCartProducts] = useState([])
  
  const [totalPrice, setTotalPrice] = useState(0)

  
 const [totalProducts, setTotalProduct] = useState(0)


  useEffect( () => {
    setCartProducts(productData.getCartItemsDetail(cartItems))
    setTotalPrice(cartItems.reduce( (total, item) => total + (Number(item.price)*Number(item.quantity)),0))
    setTotalProduct(cartItems.reduce( (total, item) => total + Number(item.quantity), 0))
  }, [cartItems])

  // console.log(cartProducts)
  // console.log(totalPrice)
  // console.log(totalProducts)


  return (
    <Helmet title= 'Giỏ hàng'>
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} trong trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>

          <div className="cart__info__btn">
            <Button
              size = 'block'
            >
              Đặt hàng
            </Button>

            <Link to='/catalog'>
              <Button
                size = 'block'
              >
                Tiếp tục mua hàng
              </Button>
            </Link>
          </div>
        </div>

        <div className="cart__list">
          {
            cartProducts.map((item, index) => (
              <CartItem 
                key={index} 
                item= {item}
              /> 
            ))
          }
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
