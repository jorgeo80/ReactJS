import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
      name: '',
      email: ''
    })
    const {name, email} = formState
    
    // con el useEffect podemos escuchar cambios especificos en alguna
    // parte del state, de la aplicacion, funciones u objectos
    useEffect(() => {
      // console.log('Hey!!!')
    }, []) // con [] evitamos que se cargue cada vez el use effect
    
    useEffect(() => {
      // console.log('formState cambio')
    }, [formState]) // aplica para los cambios en el formState
    
    useEffect(() => {
      // console.log('email cambio')
    }, [email]) // aplica para los cambios en el formState
    
    const handleInputChange = ({ target }) => {
      // console.log(e.target)
      // console.log(e.target.name)
      // console.log(e.target.value)
      setFormState({
        ...formState,
        [ target.name ]: target.value
      })
    }
    
    return (
      <>
      <h1> useEffect </h1>
      <hr />
      <div className="from-group">
        <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
          />
      </div>
      <br />
      <div className="from-group">
        <input 
          type="text"
          name="email"
          className="form-control"
          placeholder="user@email.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
          />
      </div>

      {(name === '123') && <Message /> }

    </>
  )
}
