import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../HelperComponents/LoadingBox";
import MessageBox from "../HelperComponents/MessageBox";
import {
  createBook,
  deleteBook,
  listSellerBooks,
} from "../../common/redux/actions/bookActions";
import {
  BOOK_CREATE_RESET,
  BOOK_DELETE_RESET,
} from "../../common/redux/constants/bookConstants";
import { Route, Link, useHistory } from "react-router-dom";
const BookListTable = (props) => {
  const history = useHistory();
  console.log(history);
  const dispatch = useDispatch();


  const sellerBookList = useSelector((state) => state.sellerBookList);
  const {loading: 
    loadingSeller,  error: errorSeller, sellerBooks} = sellerBookList;
  const bookCreate = useSelector((state) => state.bookCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    book: createdBook,
  } = bookCreate;

  const bookDelete = useSelector((state) => state.bookDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bookDelete;




  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo._id)


  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BOOK_CREATE_RESET });
      history.push(`/book/${createdBook._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: BOOK_DELETE_RESET });
    }
    dispatch(
      listSellerBooks(userInfo._id)
      )
  }, [dispatch, createBook, props.history, successCreate, successDelete]);

  const deleteHandler = (book) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBook(book._id));
    }
  };
  const createHandler = () => {
    dispatch(createBook());
  };

  return (
    <div className="w-[80%] ml-[20px]">
      <div className="flex flex-col w-[100%]  p-[10px] shadow-md sm:rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px]">Your Books</h2>
          <button
            className="bg-[#6fcf97] p-[15px] text-[white]"
            onClick={createHandler}
          >
            Kitab satx 
          </button>
        </div>
      
        <table className="w-[100%] text-sm text-left text-gray-500 mt-[20px]">
          <thead className=" w-[100%] text-[20px] text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-2 px-4">
                Kitab adı
              </th>
              <th scope="col" className="py-2 px-4">
              Kateqoriya
              </th>

              <th scope="col" className="py-2 px-4">
                Qiymət
              </th>
              <th scope="col" className="py-2 px-4">
                Telefon nömrəsi
              </th>
              <th scope="col" className="py-2 px-4">
                Aksiya
              </th>
            </tr>
          </thead>
          <tbody>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && (
              <MessageBox variant="danger">{errorDelete}</MessageBox>
            )}

            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && (
              <MessageBox variant="danger">{errorCreate}</MessageBox>
            )}
            {loadingSeller ? (
              <div>Loading...</div>
            ) : errorSeller ? (
              <div>{errorSeller}</div>
            ) : (
              sellerBooks.map((book) => (
                <tr className="bg-white text-[16px] hover:bg-gray-50 cursor-pointer">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {book.seller}
                  </th>
                  <td className="py-4 px-6">{book.category}</td>
                  <td className="py-4 px-6">{book.price}</td>
                  <td className="py-4 px-6">{book.phoneNumber}</td>
                  <td className="py-4 px-6">
                    <Route render={{ history }}>
                      <button
                        onClick={() => history.push(`/book/${book._id}/edit`)}
                        className="font-medium text-[#fff]  p-[10px] bg-[#6fcf97] hover:underline"
                      >
                        Edit
                      </button>
                    </Route>

                    <button
                      onClick={() => deleteHandler(book)}
                      className="font-medium text-[#fff] p-[10px] bg-[red]  ml-[10px] hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookListTable;
