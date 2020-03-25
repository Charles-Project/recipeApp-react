import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import Data from "./component/data";

const App = () => {
  const APP_ID = "41e0b3e2";
  const APP_KEY = "64a94f6011150d648f1276269554fd89";
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  let url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.hits);
  };

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  const changeQuery = () => {
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="container-fluid px-0 w-100 overflow-hidden-x">
        <Navbar
          search={search}
          changeHandler={changeHandler}
          changeQuery={changeQuery}
        />
        <div className="row mt-3">
          {recipes.map(item => (
            <div
              className="col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3 d-flex justify-content-center"
              key={item.recipe.label}
            >
              <div className="card-wrapper ">
                <div className="img-wrapper">
                  <img src={item.recipe.image} alt="" />
                </div>
                <div className="card-body px-3">
                  <h5 className="card-title mb-4 text-pacifico">
                    {item.recipe.label}
                  </h5>
                  <button className="btn-view">View More</button>
                  <a href={item.recipe.url} className="float-right btn-url">
                    Goto Url
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
