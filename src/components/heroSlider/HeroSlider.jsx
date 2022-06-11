import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import Button from '../button/Button'

const HeroSlider = props => {

  const data = props.data

  const [activeSlide, setActiveSlide] = useState(0)

  const prevSlide = useCallback(() => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
    setActiveSlide(index)
  }, [activeSlide, data])

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
    setActiveSlide(index)
  },   [activeSlide, data])



  return (
    <div className='hero-slider'>
      {
        data.map( (item, index) => (
          <HeroSliderItem key={index} item ={item} active = {activeSlide === index}/>
        ))
      }

      {
        props.control ? (
          <div className="hero-slider__control">
            <div 
              className="hero-slider__control__item"
              onClick = {prevSlide}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="hero-slider__control__item">
                <div className="index">
                  {activeSlide + 1}/{data.length}
                </div>
            </div>
            <div 
              className="hero-slider__control__item"
              onClick={nextSlide}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}


const HeroSliderItem = ({item, active}) => (
  <div className={`hero-slider__item ${active ? 'active' : ''}`}>
  
    <div className="hero-slider__item__info">
        <div className={`hero-slider__item__info__title color-${item.color}`} >
            <span>{item.title}</span>

        </div>
        <div className="hero-slider__item__info__description">
          <span>{item.description}</span>
        </div>

        <div className="hero-slider__item__info__btn">

          <Link to={item.path}>
              <Button
                backgroundColor={item.color}
                icon = 'fa-solid fa-cart-shopping'
                animate={true}
              >
                Xem chi tiết
              </Button>
          </Link>

        </div>
    </div>

    <div className="hero-slider__item__image">
          <div className={`shape bg-${item.color}`}></div>
          <img src={item.img} alt="wfsa" />
    </div>
  </div>
)

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool
}

export default HeroSlider
