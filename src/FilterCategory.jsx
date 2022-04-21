import React from "react";
import { useState, useEffect } from "react";

const FilterCategory = ({ numbersCategory, choseAlbum }) => {
  const [search, setSearch] = useState(0);

  function handleFilter(event) {
    setSearch(() => {
      return setSearch(() => +event.target.dataset.type);
    });
  }
  useEffect(() => {
    choseAlbum(search);
  }, [search]);
  return (
    <div className="row">
      <h2 className="left">Выбрать альбом</h2>
      {numbersCategory.map((el) => {
        return (
          <div className="col col-md-1" key={el + "aaa"}>
            <label>Album {el}</label>
            <br />
            <input
              type="radio"
              data-type={el}
              name="search"
              onChange={handleFilter}
              checked={search === el}
            />
          </div>
        );
      })}
      <div className="col col-md-1">
        <label>Album All </label>
        <br />
        <input
          type="radio"
          data-type=""
          name="search"
          onChange={handleFilter}
          checked={search === 0}
        />
      </div>
    </div>
  );
};

export { FilterCategory };
