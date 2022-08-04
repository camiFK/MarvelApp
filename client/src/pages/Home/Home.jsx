import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getAllCharacters } from "../../redux/actions.js";
import Card from "../../components/Card/Card.jsx";
import Search from "../../components/Search/Search.jsx";
import Styles from "./Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  
  const allCharacters = useSelector((state) => state.character.characters); // get all characters from redux store
  //console.log(allCharacters);

  const [pageNumber, setpageNumber] = useState(0); // set current page to 0
  const cardsPerPage = 12; // set cards per page to 12
  const pageVisited = pageNumber * cardsPerPage; // CURRENT PAGE

  const [title, setTitle] = useState("");

  function renderData(data) {
    //let result = data.filter(el => el.name.toLowerCase().includes(title.toLowerCase())); // filter data by title

    const dataToRender = data.slice(pageVisited, pageVisited + cardsPerPage); // slice data to render by page visited and cards per page
    //console.log(dataToRender[0].id);
    const pageCount = Math.ceil(data.length / cardsPerPage); // 5


    function changePage({ selected }) {
      setpageNumber(selected); // set current page to selected page
    }

    return (
      <>
        {
        dataToRender > 0
          ? dataToRender.map((character) => (
            <Card key={character.id} character={character} />
          )) // map data to render to card component
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
    );
  }

  return (
    <div className={Styles.container}>
      <Search setTitle={setTitle} title={title} />
      {allCharacters.length > 0
        ? renderData(allCharacters) // render data if all characters are available
        : null}
    </div>
  );
};

export default Home;
