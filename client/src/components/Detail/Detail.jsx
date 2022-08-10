import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { StyledBackdrop, StyledMotionCard, StyledButton } from "./StyledMotion";
import { FontAwesomeIcon } from "@fortawesome/free-regular-svg-icons";

const Detail = ({ character, setShowCard }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <StyledBackdrop
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        layout="position"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        variants={variants}
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
      >
        <StyledMotionCard>
          <h3>{character.name.toUpperCase()}</h3>
          <p>ID: {character.id}</p>
          <p className='subdetails'>{character.description}</p>
          <h5>Comics</h5>
          <ul>
            {character.comics.map((el) => (
              <li>{el.name}</li>
            ))}
          </ul>

          <StyledButton onClick={() => setShowCard(false)}>X</StyledButton>
        </StyledMotionCard>
      </StyledBackdrop>
    </AnimatePresence>
  );
};

export default Detail;
