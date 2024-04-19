import React, { useState, useMemo } from 'react'
import { preocesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../Hooks/useCounter'
import './memorize.css'

export const MemoHook = () => {

  const { counter, increment } = useCounter( 5000 )
  const [show, setShow] = useState(true)

  const memoProcesoPesado = useMemo(() => preocesoPesado( counter ), [ counter ])
  
  return (  
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small> </h3>
      <hr />     
      <p>{ memoProcesoPesado }</p>
      <button   
      className='btn btn-primary'
      onClick={ increment }
      >
      +1
      </button>
      <button
      className='btn btn-outline-primary ml-3'
      onClick={() => {
          setShow( !show )
      }}
      >
      Show/Hide {JSON.stringify( show )}
      </button>
    </>
  )
}
