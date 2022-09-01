import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { listBooks } from "../../common/redux/actions/bookActions";
import Book from "../../components/BookPageComponents/Book";
import bookbg from "../../assets/images/bookImages/bookbg.jpg";
import BookSearch from "../../components/BookPageComponents/BookSearch";
import { useParams, Route, Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
const BooksPage = (props) => {
  const { title = "all", category = "all" } = useParams();
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;

  useEffect(() => {
    dispatch(
      listBooks({
        title: title !== "all" ? title : "",
        category: category !== "all" ? category : "",
      })
    );
  }, [dispatch, title, category]);
  console.log(books);

  const getFilterUrl = (filter) => {
    const filterTitle = filter.title || title;
    const filterCategory = filter.category || category;
    return `/search/category/${filterCategory}/name/${filterTitle}`;
  };

  const categories = [
    {
      id: 1,
      text: "marketing",
    },
    {
      id: 2,
      text: "love",
    },
    {
      id: 3,
      text: "advanced",
    },
    {
      id: 4,
      text: "mixed",
    },
  ];

  const [toggleState, setToggleState] = useState(true);

  return (
    <React.Fragment>
      <div className="wrapper pt-[50px]">
        <div className="rounded-[15px] h-[200px] lg:h-[300px] relative">
          <img className="rounded-[10px]" src={bookbg} alt="" />
          <article className="absolute w-[80%]  top-[50px]  lg:top-[70px] left-[50%] text-center text-white translate-x-[-50%]">
            <h1 className="text-[20px] lg:text-[44px]">
              Buy and sell your textbooks for the best price
            </h1>
            <p className="hidden lg:block">
              İstediğiniz konuda uzman olabilirsiniz İstediğiniz konuda uzman
              olabilirsiniz İ stediğiniz konuda uzman olabilirsiniz
            </p>
          </article>
        </div>
      </div>

      <div className="wrapper">
        <div className="flex  flex-col lg:flex-row justify-between items-center mt-[30px] ">
          <Route
            render={({ history }) => (
              <BookSearch history={history}></BookSearch>
            )}
          ></Route>

          {/* Book Filter Section */}
          <div className="w-[100%] lg:w-[300px] pt-[15px] lg:pt-[0px]">
            <form className="w-[100%]">
              <div
                onClick={() => setToggleState(!toggleState)}
                className="w-[100%] border-[#6fcf97]  border-solid border-2 p-[15px] flex justify-between items-center cursor-pointer"
              >
                <span>Filter by category</span>
                <span>
                  <AiOutlineCaretDown />
                </span>
              </div>
              <div
                className={toggleState ? "hidden" : "block bookfiltershadow"}
              >
                <ul className="p-[10px]">
                  <li className="p-[10px]">
                    <Link
                      className={"all" === category ? "activeLink" : ""}
                      to={getFilterUrl({ category: "all" })}
                    >
                      Hamısı
                    </Link>
                  </li>

                  {categories.map((c) => (
                    <li key={c.id} className="p-[10px]">
                      <Link
                        className={c.text === category ? "activeLink" : ""}
                        to={getFilterUrl({ category: c.text })}
                      >
                        {c.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>

          {/* Finished Book Filter Section */}
        </div>
        <div className="mt-[10px]">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="mt-[15px] cards row flexwrap">
              {books.map((book) => (
                <Book key={book._id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BooksPage;
