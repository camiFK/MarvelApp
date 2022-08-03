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

  const displayCards = () => {
    allCharacters.slice(pageVisited, pageVisited + cardsPerPage)

    const pageCount = Math.ceil(allCharacters.length / cardsPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
      <>
      {
        displayCards[0].length > 0 
        ? displayCards[0].map(character => (
          <Card
          key={character.id}
          name={character.name}
          image={character.image}
          />
          ))
          : null
        }

      <ReactPaginate 
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={changePage}
         containerClassName={"paginationButtons"}
         previousLinkClassName={"previousButton"}
         nextLinkClassName={"nextButton"}
         disabledClassName={"paginationDisabled"}
         activeClassName={"paginationActive"}
         />

      </>
    )
  }

  return (
    <div className={Styles.container}>
      {
        displayCards()
      }
    </div>
  )
}

export default Home