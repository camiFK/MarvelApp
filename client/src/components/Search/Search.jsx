import React from "react";

const Search = ({ setTitle, title }) => {
  function handleChange(event) {
    setTitle(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="title"
          autoComplete="off"
          onChange={(e) => handleChange(e)}
          placeholder="Search..."
          value={title}
        />
      </form>
    </div>
  );
};

export default Search;
