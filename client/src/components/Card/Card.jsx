import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "./Card.module.scss";
import { AnimatePresence } from "framer-motion";
import Detail from "../Detail/Detail";

const Card = ({ character }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <AnimatePresence>
      <motion.div onClick={() => setShowCard(!showCard)}>
        
        <div className={Styles.container}>
          <div className={Styles.card}>
            <p className={Styles.title}>{character.name}</p>
            <img
              src={character.image}
              alt="Img not found"
              className={Styles.img}
            />
          </div>
        </div>

        {showCard && <Detail character={character} setShowCard={setShowCard} />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
