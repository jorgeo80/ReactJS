import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import './memorize.css'

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 )

  // const increment = () => {
  //   setCounter( counter + 1 )
  // }

  const increment = useCallback(( num ) => {
    setCounter( i => i + num )
  }, [ setCounter ])

  return (
    <>
      <h1>useCallBack Hook: { counter } </h1>
      <hr />
      <ShowIncrement increment={ increment }/>
    </>

  )
}
