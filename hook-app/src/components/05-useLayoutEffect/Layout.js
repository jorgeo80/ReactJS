import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './layout.css'

export const Layout = () => {

  const { counter, increment } = useCounter(1)

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
   
  const { quote } = !!data && data[0]   

  const pTag = useRef()

  const [boxSize, setboxSize] = useState({})

  useLayoutEffect(() => {
      console.log(pTag.current.getBoundingClientRect())
      setboxSize(pTag.current.getBoundingClientRect())
  }, [ quote ])
     
  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className='blockquote text-right'>
          <p 
            className='mb-0'
            ref={ pTag }
          >
            { quote }
          </p>
      </blockquote>
      <pre>
          { JSON.stringify(boxSize, null, 3) }
      </pre>
      <button 
          className='btn btn-primary'
          onClick={ increment }
      >
          Siguiente frase
      </button>
    </>
  )
}


