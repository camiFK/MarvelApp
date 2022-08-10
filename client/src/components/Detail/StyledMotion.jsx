import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBackdrop = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  backdrop-filter: blur(4px);

  `;

export const StyledMotionCard = styled(motion.div)`
  width: 80%;
  background-color: rgb(0, 20, 121);
  color: white;
  padding: 30px;
  display: grid;
  position: relative;
  border-radius: 20px;
  margin: 100px;
  overflow: hidden;

  `;

export const StyledButton = styled.button`
    background: transparent;
    color: white;
    width: 50px;
    position: absolute;
    top: 10px;
    right: 20px; 
`;
