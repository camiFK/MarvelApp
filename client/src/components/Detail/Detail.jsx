import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Styles from "./Detail.module.scss";

const Detail = ({ character, setShowCard }) => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      onClick={(ev) => { ev.stopPropagation(); }}
      layout="position"
      whileInView={{ opacity: 1 }}
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      className={Styles.backdropDetailedCard}
    >
      <div className={Styles.details}>
        <p>{character.id}</p>
        <ul>{character.comics.map((el) => <li>{el.name}</li>)}</ul>

      <motion.button onClick={() => setShowCard(false)}>X</motion.button>
      </div>
    </motion.div>
  );
};

export default Detail;
