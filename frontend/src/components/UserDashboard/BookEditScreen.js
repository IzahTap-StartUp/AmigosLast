import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../HelperComponents/LoadingBox";
import MessageBox from "../HelperComponents/MessageBox";
import { BOOK_UPDATE_RESET } from "../../common/redux/constants/bookConstants";
import {
  detailsBook,
  updateBook,
} from "../../common/redux/actions/bookActions";
import SideBar from "./SideBar";
import Axios from "axios";
const BookEdit = (props) => {
  const bookId = props.match.params.id;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [frontPhoto, setFrontPhoto] = useState("");
  const [situation, setSituation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;

  const bookUpdate = useSelector((state) => state.bookUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bookUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/mybooklist");
    }
    if (!book || book._id !== bookId || successUpdate) {
      dispatch({ type: BOOK_UPDATE_RESET });
      dispatch(detailsBook(bookId));
    } else {
      setTitle(book.title);
      setAuthor(book.author);
      setPrice(book.price);
      setFrontPhoto(book.frontPhoto);
      setPhoneNumber(book.phoneNumber);
      setCategory(book.category);
      setSituation(book.situation);
      setPrice(book.price);
      setDescription(book.description);
    }
  }, [book, dispatch, bookId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch Book book
    dispatch(
      updateBook({
        _id: bookId,
        title,
        price,
        frontPhoto,
        category,
        author,
        situation,
        description,
        phoneNumber,
      })
    );
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setFrontPhoto(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };


  return (
    <div className="flex flex-row pt-[20px]">
      <SideBar />

      <div className="shadow ml-[20px] w-[80%]">
        <form className="pl-[20px] wrapper medium" onSubmit={submitHandler}>
          <div className="pt-[10px]">
            <h2 className="font-bold text-[24px]">
              Sell and earn money with your textbook
            </h2>
          </div>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="pt-[15px]">
              <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">Number</label>
                <input
                  id="price"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
              <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                className='p-[1rem]'
                placeholder="Enter image"
                value={frontPhoto}
                onChange={(e) => setFrontPhoto(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                className='p-[1rem]'
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
              <div className="flex flex-col">
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="situation">Situation</label>
                <input
                  id="situation"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter situation"
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px]"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="3"
                  type="text"
                  className="bg-[#F3F7F5] p-[1rem] mt-[10px] border-none outline-none"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="py-[15px]">
                <button
                  className="bg-[#08AD76] text-[white] p-[1rem] "
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
