import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Data from "./component/data";

const App = () => {
  const APP_ID = "41e0b3e2";
  const APP_KEY = "64a94f6011150d648f1276269554fd89";
  const proxy = "https://cors-anywhere.herokuapp.com/";
  let url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // https://api.edamam.com/search?q=chicken&app_id=${41e0b3e2}&app_key=${709f13646f0bdef4cdb462f1a3ef55d5}

  // const appkey = "ad45fbf063cb4caf87f795843e7288af";
  // let url = `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${appkey}`;

  const [recipes, setRecipe] = useState([Data]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    console.log("total items", recipes);
    console.log("total itemsz", recipes[0]);

    recipes[0].map((value, i) => {
      console.log(value.label);
      i++;
    });

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data.hits);
    // setRecipe(data.hits);
    // fetch(url)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     setRecipe(data.hits);
    //     console.log(data.hits);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="App">
      <div className="container-fluid px-0 w-100 overflow-hidden-x">
        <Navbar />
        <div className="row mt-3">
          {recipes[0].map(item => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3 d-flex justify-content-center">
              <div className="card-wrapper ">
                <div className="img-wrapper">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-body px-3">
                  <h5 className="card-title mb-4 text-pacifico">
                    {item.label}
                  </h5>
                  <button className="btn-view">View More</button>
                  <a href={item.url} className="float-right btn-url">
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
