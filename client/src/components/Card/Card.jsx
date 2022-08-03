import React from 'react'
import { motion } from "framer-motion"

const Card = ({name, image}) => {
  return (
    <div>
        <p>{name}</p>
        <img src={image} alt="Img not found" height="150px" width="100px" />
    </div>
  )
}

export default Card