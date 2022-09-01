import React, { useEffect } from "react";

const Filter = ({
  activeCategory,
  setActiveCategory,
  setFiltered,
  popular,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter(
      (movie) => movie.category === activeCategory
    );
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <div className="filter-container lg:w-[50%] w-[100%]">
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={activeCategory === "math" ? "active" : ""}
        onClick={() => setActiveCategory("math")}
      >
        Math
      </button>
      <button
        className={activeCategory === "pysics" ? "active" : ""}
        onClick={() => setActiveCategory("pysics")}
      >
        Pyhsics
      </button>
      <button
        className={activeCategory === "chemistry" ? "active" : ""}
        onClick={() => setActiveCategory("chemistry")}
      >
        Chemistry
      </button>
      <button
        className={activeCategory === "english" ? "active" : ""}
        onClick={() => setActiveCategory("english")}
      >
        English
      </button>
    </div>
  );
};

export default Filter;
