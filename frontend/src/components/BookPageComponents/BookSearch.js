import React, { useState } from "react";

const BookSearch = (props) => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/title/${title}`);
  };
  return (
    <div className="w-[100%] lg:w-[1000px] border-[#6fcf97]  border-solid border-2">
      <form className="w-[100%] flex flex-row " onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type to search"
          className="w-[100%] p-[15px]"
        />
        <button
          type="submit"
          className="bg-[#6fcf97] px-[10px] py-[10px] text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default BookSearch;
