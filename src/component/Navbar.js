import React from "react";

function Navbar({ search, changeHandler, changeQuery }) {
  return (
    <div className="py-3 bg-light">
      <h1 className="brand-logo text-righteous text-tomatoes mb-4">
        Recipe App
      </h1>
      <div className="search-wrapper mb-2 d-flex justify-content-center align-items-center">
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={changeHandler}
        />
        <button
          className="d-flex justify-content-center align-items-center"
          onClick={changeQuery}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
