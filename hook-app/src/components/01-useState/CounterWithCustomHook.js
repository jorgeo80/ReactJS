import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

  return (
    <>
    <h1>Counter with Hook: { state } </h1>
    <hr />
    <button className='btn btn-primary' onClick={ () => decrement(2) }> -1 </button>
    <button className='btn btn-primary' onClick={ () => increment(2) }> +1 </button>
    <button className='btn btn-primary' onClick={ reset }> Reset </button>
    </>
  )
}
