import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import Button from '../button/Button'
import numberWithCommas from '../../utils/numberWithCommas'

const ProductCard = props => {
  return (
    <div className='product-card'>
        <Link to={`/github_Blackbrother/catalog/${props.slug}`}>
            <div className="product-card__image">
                <img src={props.img01} alt="ass" />
                <img src={props.img02} alt="ass" />
            </div>

            <h3 className="product-card__name">
                {props.title}
            </h3>

            <div className="product-card__price">
                {numberWithCommas(299999)}

                <span className='product-card__price__old'>
                    <del>{numberWithCommas(props.price)}</del>
                </span>
            </div>
        
        </Link>

        <div className="product-card__btn">
            <Link to={`/github_Blackbrother/catalog/${props.slug}`}>
            <Button
                size='sm'
                icon='fa-solid fa-cart-shopping'
                animate={true}
            >
                Chọn mua
            </Button>
            </Link>
        </div>

      
    </div>
  )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard
