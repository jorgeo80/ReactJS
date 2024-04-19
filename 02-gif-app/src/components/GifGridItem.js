import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
  
  // console.log( props ) --> En lugar del props usamos desestructuracion
  // console.log( { id, title, url } )
  return (
    <div className="card">
      <h5>{ title.toUpperCase() }</h5>
      <img src={ url } alt={title} />
    </div>
  )

}
