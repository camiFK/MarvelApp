import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { getAllCharacters } from '../../redux/actions.js'
import Card from '../../components/Card/Card.jsx';
import Styles from './Home.module.scss'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch]);

  const allCharacters = useSelector(state => state.character.characters)

  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 12;
  const pageVisited = pageNumber * cardsPerPage;


  return (
    <div className={Styles.container}>
  
    </div>
  )
}

export default Home