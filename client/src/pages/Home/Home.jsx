import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from "react-paginate";
import { getAllCharacters } from '../../redux/actions.js'
import Card from '../../components/Card/Card.jsx';
import Search from '../../components/Search/Search.jsx';
import Styles from './Home.module.scss'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch]);

  const allCharacters = useSelector(state => state.character.characters) // get all characters from redux store

  const [currentPage, setCurrentPage] = useState(0); // set current page to 0
  const cardsPerPage = 12; // set cards per page to 12
  const pageVisited = currentPage * cardsPerPage; // set page visited to current page * cards per page
  
  const [title, setTitle] = useState('');
  
  
  function renderData(data) {
    
    //let result = data.filter(el => el.name.toLowerCase().includes(title.toLowerCase())); // filter data by title
    
    const dataToRender = allCharacters[0].slice(pageVisited, pageVisited + cardsPerPage); // slice data to render by page visited and cards per page
    console.log(dataToRender)
    const pageCount = Math.ceil(allCharacters[0].length / cardsPerPage); // set page count to all characters / cards per page
    console.log(pageCount)

    function changePage({selected}) {
      setCurrentPage(selected); // set current page to selected page
    }

    return (
      <>
      {
        dataToRender > 0 
        ? dataToRender.map(el => <Card key={el.id} name={el.name} image={el.image} />) // map data to render to card component
        : null
      }

      <div className={Styles.paginate}>

      <ReactPaginate
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
       pageCount={pageCount}
       onPageChange={changePage}
       containerClassName={"pagination justify-content-center"}
       pageClassName={"page-item"}
       pageLinkClassName={"page-link"}
       previousClassName={"page-item"}
       previousLinkClassName={"page-link"}
       nextClassName={"page-item"}
       nextLinkClassName={"page-link"}
       breakClassName={"page-item"}
       breakLinkClassName={"page-link"}
       activeClassName={"active"}
       />
       </div>
      </>
    )
  }

  return (
    <div className={Styles.container}>
      <Search setTitle={setTitle} title={title} />
      {
        allCharacters[0]?.length > 0
        ? renderData(allCharacters[0]) // render data if all characters are available
        : null
      }
    </div>
  )
}

export default Home