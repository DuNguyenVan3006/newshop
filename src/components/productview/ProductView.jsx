import React, { useEffect, useState } from 'react'

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import Button from '../button/Button'

import numberWithCommas from '../../utils/numberWithCommas'

import { addItem } from '../../redux/shopping-cart/cartItemSlice'

const ProductView = props => {

  const product = props.product

  const dispatch = useDispatch()


  const [previewImg, setPreviewImg] = useState(product.image01)

  const [descriptionExpand, setDescriptionExpand] = useState(false)

  const [color, setColor] = useState(null)

  const [size, setSize] = useState(null)

  const [quantity, setQuantity] = useState(1)

  const updateQuantity = (type) => {
    if ( type === 'plus')
    {
      setQuantity(quantity + 1)
    }
    else
    {
      setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
    }
  }

  useEffect( () => {
    setPreviewImg(product.image01)
    setQuantity(1)
    setColor(null)
    setSize(null)
  }, [product])


  const check = () => {
    if ( !color )
    {
      alert("Vui lòng chọn màu !!! ")
      return false
    }

    if ( !size )
    {
      alert("Vui lòng chọn size !!! ")
      return false
    }

    return true
  }

  const addToCart = () => {
    if ((check())) 
    {
        dispatch(addItem(
        {
          slug: product.slug,
          price: product.price,
          color: color,
          size: size,
          quantity: quantity
        }
      ))
      alert('success')
    }
  
  }
  
  const navigate = useNavigate()
  const goToCart = () => {
      if(check()){
        navigate('/github_Blackbrother/cart')
      }
  }

  return (
    <div className='product'>
      <div className="product__images">
          <div className="product__images__list">
            <div 
              className="product__images__list__item"
              onClick={() => setPreviewImg(product.image01)}
            >
                  <img src={product.image01} alt="" />
            </div>

            <div 
              className="product__images__list__item"
              onClick={() => setPreviewImg(product.image02)}
            >
                  <img src={product.image02} alt="" />
            </div>
          </div>

          <div className="product__images__main">
              <img src={previewImg} alt="" /> 

          </div>

          <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
              <div className="product-description__title">
                    Chi tiết sản phẩm 
              </div>

              <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}>

              </div>

              <div className="product-description__toggle">
                <Button
                  size = 'sm'
                  onClick={() => setDescriptionExpand(!descriptionExpand)}
                >
                  {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                </Button>
              </div>

          </div>

      </div>


      <div className="product__info">
          <div className="product__info__title">
              {product.title}
          </div>

          <div className="product__info__item">
            <div className="product__info__item__price">
                {numberWithCommas(Number(product.price))}
            </div>
          </div>

          <div className="product__info__item">
            <div className="product__info__item__title">
                Màu sắc
            </div>

            <div className="product__info__item__list">
              {
                product.colors.map((item, index) => (
                  <div 
                    className={`product__info__item__list__item ${color === item ? 'active' : ""}`}
                    key={index}
                    onClick = {() => setColor(item)}
                  >
                    <span className={`cricle bg-${item}`}></span>
                  </div>
                ))
              }

            </div>  
          </div>



          <div className="product__info__item">
            <div className="product__info__item__title">
                Kích cỡ
            </div>

            <div className="product__info__item__list">
              {
                product.size.map((item, index) => (
                  <div 
                    className={`product__info__item__list__item ${size === item ? 'active' : ""}`}
                    key={index}
                    onClick = {() => setSize(item)}
                  >
                    <span className="product__info__item__list__item__size">
                      {item}
                    </span>
                  </div>
                ))
              }

            </div>  
          </div>


          <div className="product__info__item">
            <div className="product__info__item__title">
              Số lượng
            </div>

            <div className="product__info__item__quantity">
              <div 
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity('minus')}
              >

                  <i className="fa-solid fa-minus"></i>
              </div>

              <div className="product__info__item__quantity__input">
                  {quantity}
              </div>

              <div 
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity('plus')}
              >
                    <i className="fa-solid fa-plus"></i>
              </div>
            </div>


          </div>

          

          <div className="product__info__item">
            <Button
              onClick={() => addToCart()}
            >
              Thêm vào giỏ hàng
            </Button>

            <Button
              onClick={() => goToCart()}
            >
              Mua ngay
            </Button>
          </div>

          <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
              <div className="product-description__title">
                    Chi tiết sản phẩm
              </div>

              <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}>

              </div>

              <div className="product-description__toggle">
                <Button
                  size = 'sm'
                  onClick={() => setDescriptionExpand(!descriptionExpand)}
                >
                  {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
                </Button>
              </div>

          </div>


      </div>
    </div>
  )
}


export default ProductView
