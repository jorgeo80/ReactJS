import { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    console.log(categories)

  return (
    <>
      
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      
      {/* Input */}
      
      {/* Listado de Gifs */}
      <ol>
        {categories.map(category => {return <li key={category}> {category} </li>})}        
      </ol>
      
      {/* Gif Item */}

    </>
  )
}
