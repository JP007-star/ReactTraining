import React from 'react'

/**
* @author
* @function Header
**/

export const Header = (props) => {
  return (
    <>
      <div>Header 1</div>
      <h1 style={props.style}>{props.name}</h1>
    </>

  )

}