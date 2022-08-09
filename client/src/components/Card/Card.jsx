import React from 'react'
import { motion } from "framer-motion"
import { StyledCards } from './StyledCards';
import Styles from './Card.module.scss';

const Card = ({character}) => {
  return (
    <StyledCards>
        <p className={Styles.title}>{character.name}</p>
        <img src={character.image} alt="Img not found" className={Styles.img} />
    </StyledCards>
  )
}

export default Card;