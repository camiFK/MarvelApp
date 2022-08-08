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

  const [pageNumber, setpageNumber] = useState(0); // set current page to 0
  const cardsPerPage = 12; // set cards per page to 12
  const pageVisited = pageNumber * cardsPerPage; // CURRENT PAGE

  const [title, setTitle] = useState("");

  function renderData(data) {
    const dataToRender = data.slice(pageVisited, pageVisited + cardsPerPage); // slice data to render by page visited and cards per page

    const pageCount = Math.ceil(data.length / cardsPerPage); // 5

    function changePage({ selected }) {
      setpageNumber(selected); // set current page to selected page
    }

    return (
      <div>
        <div className={Styles.cardsContainer}>
        {dataToRender.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
        </div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={Styles.paginationContainer}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"paginationDisabled"}
          activeClassName={Styles.paginationActive}
        />
      </div>
    );
  }

  return (
    <div className={Styles.container}>
      {/* <Search setTitle={setTitle} title={title} /> */}
      {allCharacters.length > 0
        ? renderData(allCharacters) // render data if all characters are available
        : null}
    </div>
  );
};

export default Home;
