import {useState, useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
const mainNav = [
  {
    display: 'Home',
    path: '/github_Blackbrother/'
  },
  {
    display: 'Products',
    path: '/github_Blackbrother/catalog'
  },
  {
    display: 'Blog',
    path: '/github_Blackbrother/blog'
  },
  {
    display: 'Contact',
    path: '/github_Blackbrother/contact'
  }
]


const Header = () => {

  const { pathname } = useLocation()

  const cartItems = useSelector(state => state.cartItems.value)
  
  const [quantity, setQuantity] = useState(0)
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const headerRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('shrink')
      }
      else {
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const menuRight = useRef()

  const menuToggle = () => menuRight.current.classList.toggle('active')

  useEffect( () => {
    setQuantity(cartItems.length)
  }, [cartItems])
  return (
    <div className="header" ref={headerRef}>
      <div className="container">



        <div className="header__logo">
          <Link to='/github_Blackbrother/'>
            MISSOUT
          </Link>
        </div>


        <div className="header__menu">



          <div className="header__menu__center" ref={menuRight}>
            <div
              className="header__menu__center__close"
              onClick={menuToggle}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>

            {
              mainNav.map((item, index) => (
                <div
                  className={`header__menu__item header__menu__center__item ${index === activeNav ? 'active' : ''}`}
                  key={index}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </div>
              ))
            }
          </div>

          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="fa-solid fa-magnifying-glass"></i>

            </div>

            <div className="header__menu__item header__menu__right__item">
              <Link to='/github_Blackbrother/cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <span> ({quantity})</span>
              </Link>

            </div>

            <div className="header__menu__item header__menu__right__item">
              <i className="fa-solid fa-user"></i>
            </div>

            <div
              className="header__menu__item header__menu__right__item header__menu__right__toggle-mobile"
              onClick={menuToggle}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
