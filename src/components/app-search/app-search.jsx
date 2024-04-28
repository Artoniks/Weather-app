// import "./app-search.css";

// const Search = () => {
//   return (
//     <form action="" className="form">
//       <input
//         type="text"
//         id="search"
//         placeholder="Search Location"
//         className="main-input"
//       ></input>
//     </form>
//   );
// };

// export default Search;
import React, { useState } from "react";
import "./app-search.css";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        id="search"
        placeholder="Search Location"
        className="main-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
