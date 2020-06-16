import React from 'react'

function Button(props) {

  const { name, onClick } = props //salva em variaveis name e OnClick as propriedade do props

  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button
