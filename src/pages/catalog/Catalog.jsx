import React, { useCallback, useEffect, useRef, useState } from 'react'

import InfinityList from '../../components/infinityList/InfinityList'
import CheckBox from '../../components/checkbox/CheckBox'
import Button from '../../components/button/Button'
import Helmet from '../../components/Helmet'
 
import productData from '../../assets/fake-data/products'
import colors from '../../assets/fake-data/product-color'
import size from '../../assets/fake-data/product-size'
import category from '../../assets/fake-data/category'

const Catalog = () => {

  const initFilter = {
    category: [],
    colors: [],
    size: []
  }

  const productList = productData.getAllProducts()

  const [product, setProduct] = useState(productList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    console.log(checked)
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
          break
        case "COLORS":
          setFilter({ ...filter, colors: [...filter.colors, item.color] })
          break
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] })
          break
        default:
      }
    }
    else {
      switch (type) {
        case "CATEGORY":
          const newCatagory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({ ...filter, category: newCatagory })
          break;
        case "COLORS":
          const newColors = filter.colors.filter(e => e !== item.color)
          setFilter({ ...filter, colors: newColors })
          break;
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size)
          setFilter({ ...filter, size: newSize })
          break;
        default:
      }
    }
  }


  const clearFilter = () => {
    setFilter(initFilter)
  }

  const updateProducts = useCallback(() => {

    let temp = productList

    if (filter.category.length > 0) {
      temp = temp.filter(e => filter.category.includes(e.categorySlug))
      
    }

    if (filter.colors.length > 0) {
      temp = temp.filter(e => {
        const check = e.colors.find(color => filter.colors.includes(color))
        //  console.log(check !== undefined)
        return check !== undefined
        //find: những cái nào không thỏa thì sẽ trả về undefine
      }
      )
    }

    if (filter.size.length > 0) {
      temp = temp.filter(e => {
        const check = e.size.find(size => filter.size.includes(size))
        return check !== undefined
      })
    }

    setProduct(temp)
  }, [filter, productList])

  useEffect(() => {
    updateProducts()
  }, [updateProducts])


  const filterRef = useRef()

  const showHideFilter = () => filterRef.current.classList.toggle('active')
  return (

    <Helmet title="Sản phẩm">
      <div className='catalog'>
        {/* {console.log(filter)} */}
        <div className="catalog__filter" ref={filterRef}>
          <div
            className="catalog__filter__close"
            onClick={() => showHideFilter()}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh mục sản phẩm
            </div>

            <div className="catalog__filter__widget__content">
              {
                category.map((item, index) => (
                  <div className="catalog__filter__widget__content__item" key={index}>
                    <CheckBox
                      label={item.display}
                      onchange={(input) => filterSelect("CATEGORY", input.checked, item)}
                      checked={filter.category.includes(item.categorySlug)}
                    />


                  </div>
                ))
              }
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Màu sắc
            </div>

            <div className="catalog__filter__widget__content">
              {
                colors.map((item, index) => (
                  <div className="catalog__filter__widget__content__item" key={index}>
                    <CheckBox
                      label={item.display}
                      onchange={(input) => filterSelect("COLORS", input.checked, item)}
                      checked={filter.colors.includes(item.color)}
                    />


                  </div>
                ))
              }
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Size
            </div>

            <div className="catalog__filter__widget__content">
              {
                size.map((item, index) => (
                  <div className="catalog__filter__widget__content__item" key={index}>
                    <CheckBox
                      label={item.display}
                      onchange={(input) => filterSelect("SIZE", input.checked, item)}
                      checked={filter.size.includes(item.size)}
                    />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button
                size='sm'
                onClick={clearFilter}
              >
                xóa bộ lọc
              </Button>
            </div>
          </div>


        </div>

        <div className="catalog__filter__toggle">
          <Button
            size='sm'
            onClick={showHideFilter}
          >
            Bộ lọc
          </Button>
        </div>

        <div className="catalog__content">
          <InfinityList
            data={product}
          />
        </div>

      </div>
    </Helmet>
  )
}

export default Catalog
