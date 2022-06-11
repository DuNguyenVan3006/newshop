import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

  const inputRef = useRef(null)

  const onchange = () => {
    if(props.onchange){
      props.onchange(inputRef.current)
    }
  }
    // console.log(props.checked)
  
  return (
    <div>
      <label className='custom-checkbox'>
        <input 
          type="checkbox" 
          ref={inputRef}
          checked = {props.checked}
          onChange={onchange}
        />
      
        <span className='custom-checkbox__checkmark'>
            <i className="fa-solid fa-check"></i>
        </span>
        {props.label}
      </label>
    </div>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
}



export default CheckBox
