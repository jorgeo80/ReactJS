import React from 'react'
// import React, { memo } from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Me volvi a llamar :(')
  return (
    <small>{ value }</small>
  )
})
