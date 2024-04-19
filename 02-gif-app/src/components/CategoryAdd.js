import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const CategoryAdd = ({ setCategories }) => {
  
  const [inputValue, setinputValue] = useState('')

  const handleInputChange = (e)=>{
    setinputValue( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault() //Previente la regarca despues del enter

    if (inputValue.trim().length > 2) {
      setCategories( categories => [ inputValue, ...categories ] )
      setinputValue('')
    }
    
    // console.log('Submit hecho')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}