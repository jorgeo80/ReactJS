import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
      if( categories.includes(newCategory) ) return;
      // console.log(newCategory);
      setCategories([ newCategory, ...categories ]);
    }

  return (
    <>
      
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      
      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ onAddCategory }
      />

      {/* Listado de Gifs */}
      {
        categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          )
        )
      }        
    
      {/* Gif Item */}

    </>
  )
}
