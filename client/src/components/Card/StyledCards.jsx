import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCards = styled(motion.div)`
  margin: 30px;
    display: grid;
    border-radius: 10px;
    overflow: hidden;
    width: 350px;
    height: 450px;
    background-color: #be1111;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 250ms ease;
    &:hover{
        transform: scale(1.02);
    }


`