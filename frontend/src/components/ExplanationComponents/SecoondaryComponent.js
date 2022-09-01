import React from "react";
import { useEffect, useState } from "react";
import Explanation from "./Explanation";
import "./style.css";
import Filter from "./Filter";
const SecondaryComponent = (props) => {
  const { explanations } = props;


  const [popular, setPopular] = useState(explanations);
  const [filtered, setFiltered] = useState(explanations);
  const [activeCategory, setActiveCategory] = useState("all");


  return (
    <div className="wrapper medium pt-[50px]">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div layout className="flex flex-wrap justify-between w-[100%] flex-row pt-[30px]">
        {filtered.map((explanation) => (
          <Explanation key={explanation.id} explanation={explanation} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryComponent;
