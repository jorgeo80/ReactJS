import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  // usamos el useState para modificar el arreglo
  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () => {
    
  //   // Usamos el operador spread y despues agregamos el siguiente valor
  //   // setCategories( [...categories, 'HunterXHunter'] )
  //   // Otra opción es usar un callback y traer el edo anterior
  //   setCategories( cats => [...cats, 'HunterXHunter'] )

  // }

  return (
    <>
      <h2>GifExpertApp</h2> 
      <CategoryAdd setCategories={ setCategories } />
      <hr />

      <ol>
      { 
        categories.map( category => (
          <GifGrid 
            key={ category }
            category={ category } 
          />
        ))
      }
      </ol>
    </>
  )
}
