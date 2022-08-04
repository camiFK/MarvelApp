import React from 'react'
import { motion } from "framer-motion"

const Card = ({character}) => {
  console.log(character);
  console.log('hola')
  return (
    <div>
        <p>{character.name}</p>
        <img src={character.image} alt="Img not found" height="150px" width="100px" />
    </div>
  )
}

export default Card;