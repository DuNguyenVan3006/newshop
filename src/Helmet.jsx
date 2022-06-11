import React, { useEffect } from 'react'
import PropsType from 'prop-types'

const Helmet = props => {

    document.title = 'Missout - ' + props.title

    useEffect( () => {
        window.scroll(0,0)
    }, [])
  return (
    <div>
      {props.children}
    </div>
  )
}

Helmet.propType = {
    title: PropsType.string.isRequired
}

export default Helmet
