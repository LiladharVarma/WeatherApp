import React, { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";
import { Fab } from "@material-ui/core";

function Search(props) {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const data = ["pune", "mumbai", "banglore", "nashik", "vrindavan", "ujjain"];
  //   console.log(data)

  function handleChange(event) {
    setInputText(event.target.value.trim());
    // console.log(inputText);

    setResults((inputText) => {
      return data.filter((option, index) => {
        return option.includes(inputText);
      });
    });

    // console.log(results);
  }

  function handleResultClick(result) {
    setInputText(result);
    setResults([]);
  }

  // function passData(){
  //   setSearched(true)
  //   props.onSearch(inputText , searched);

  // }

  return (
    <div className="search-container">
      <div>
        <input
          className="search-field"
          type="text"
          placeholder="Enter Name of City"
          onChange={handleChange}
          value={inputText}
        />
        {results.length > 0 && (
          <div className="result-container">
            {results.map((result, index) => {
              <div
                key={index}
                className="result-item"
                onClick={() => {
                  handleResultClick(result);
                }}
              >
                {results}
              </div>;
            })}
          </div>
        )}
      </div>
      <Fab
        style={{
          background: "transparent",
          boxShadow: "none",
          border: ".1rem solid grey",
          borderRadius: "50%",
          boxShadow: "0 4px 30px black",
        }}
      >
        <SearchIcon
          className="search-icon"
          onClick={() => {
            setSearched(true);
            props.onSearch(inputText, searched);
          }}
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            // color : "#b7b7b7",
            color: "black",
          }}
        />
      </Fab>
    </div>
  );
}

export default Search;
