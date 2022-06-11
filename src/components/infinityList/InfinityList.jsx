import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '../Grid'
import ProductCard from '../productCard/ProductCard'

const InfinityList = props => {

    const perLoad = 6

    const refList = useRef(null)

    const [data, setData] = useState([]) 

    const [index, setIndex] = useState(0)

    const [load, setLoad] = useState(true)

    useEffect( () => {
      setData(props.data.slice(0, perLoad))
      setIndex(1)
    }, [props.data])

    useEffect( () => {

      const handleScroll = () => {
        if(refList && refList.current)
        {
          if( window.scrollY + window.innerHeight >= refList.current.clientHeight + refList.current.offsetTop + 200)
          {
              setLoad(true)
          }
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scrool', handleScroll)
      }
    }, [refList])

    useEffect( () => {
      const getItem = () => {
        const pages = Math.floor(props.data.length / perLoad)

        const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

        if (load && index <= maxIndex){
          const start = perLoad * index
          const end = start + perLoad

          setData(data.concat(props.data.slice(start, end)))
          setIndex(index + 1)
        }

      }

      getItem()
      setLoad(false)
    }, [load, index, data, props.data])

    
   
  return (
    <div ref={refList}> 
      <Grid
        col = {3}
        mdCol = {2}
        smCol = {1}
        gap = {20}
      >
          {
              data.map((item, index) => (
                <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    title={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                />
              ))
          }


      </Grid>
    </div>
  )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired
}

export default InfinityList
