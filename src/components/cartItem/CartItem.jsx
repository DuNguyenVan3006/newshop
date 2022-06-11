import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import numberWithCommas from '../../utils/numberWithCommas'
import {updateItem, deleteItem} from '../../redux/shopping-cart/cartItemSlice'

const CartItem = props => {

    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])


    const removeItemCart = () => {
        dispatch(deleteItem(item))
    }


    return (

        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.product.image01} alt="" />
            </div>

            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/github_Blackbrother/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.size} - ${item.color}`}
                    </Link>
                </div>

                <div className="cart__item__info__price">
                    {numberWithCommas(Number(item.price))}
                </div>

                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick= {() => dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))}
                        >
                            <i className="fa-solid fa-minus"></i>
                        </div>

                        <div className="product__info__item__quantity__input" >
                            {quantity}
                        </div>

                        <div
                            className="product__info__item__quantity__btn"
                            onClick= {() => dispatch(updateItem({...item, quantity: quantity + 1}))}
                        >
                            <i className="fa-solid fa-plus"></i> 
                        </div>
                    </div>
                </div>

                <div className="cart__item__info__del">
                    <i 
                        className="fa-solid fa-trash-can"
                        onClick={() => removeItemCart(item)}
                    ></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
