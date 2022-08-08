import React from 'react'
import { motion } from "framer-motion"
import { StyledCards } from './StyledCards';

const Card = ({character}) => {
  console.log(character);
  console.log('hola')
  return (
    <StyledCards>
        <p>{character.name}</p>
        <img src={character.image} alt="Img not found" height="350px" width="400px" />
    </StyledCards>
  )
}

export default Card;