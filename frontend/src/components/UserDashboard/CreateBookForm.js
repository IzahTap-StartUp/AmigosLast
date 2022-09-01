// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Axios from "axios";
// import { detailsBook, createBook } from "../common/redux/actions/bookActions";
// import {
//   BOOK_CREATE_RESET,
// } from "../common/redux/constants/bookConstants";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";

// export default function BookEditScreen(props) {
//   const bookId = props.match.params.id;
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [frontPhoto, setFrontPhoto] = useState("");
//   const [category, setCategory] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [situation, setSituation] = useState("");

//   const bookDetails = useSelector((state) => state.bookDetails);
//   const { loading, error, book } = bookDetails;

  
//   const bookCreate = useSelector((state) => state.bookCreate);
//   const {
//     loading: loadingCreate,
//     error: errorCreate,
//     success: successCreate,
//     book: createdBook,
//   } = bookCreate;

//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (successCreate) {
//       dispatch({ type: BOOK_CREATE_RESET });
//       props.history.push("/books");
//     }
//     if (!book || book._id !== bookId || successUpdate) {
//       dispatch({ type: BOOK_UPDATE_RESET });
//       dispatch(detailsBook(bookId));
//     } else {
//       setTitle(book.name);
//       setPrice(book.price);
//       setFrontPhoto(book.frontPhoto);
//       setCategory(book.category);
//       setAuthor(book.author);
//       setDescription(book.description);
//       setPhoneNumber(book.phoneNumber);
//     }
//   }, [book, dispatch, bookId, successUpdate, props.history]);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // TODO: dispatch update bookw
//     dispatch(
//       updateBook({
//         _id: bookId,
//         title,
//         price,
//         frontPhoto,
//         category,
//         situation,
//         author,
//         phoneNumber,
//         description,
//       })
//     );
//   };
//   const [loadingUpload, setLoadingUpload] = useState(false);
//   const [errorUpload, setErrorUpload] = useState("");

//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;

//   const uploadFileHandler = async (e) => {
//     const file = e.target.files[0];
//     const bodyFormData = new FormData();
//     bodyFormData.append("image", file);
//     setLoadingUpload(true);
//     try {
//       const { data } = await Axios.post("/api/uploads", bodyFormData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       });
//       setFrontPhoto(data);
//       setLoadingUpload(false);
//     } catch (error) {
//       setErrorUpload(error.message);
//       setLoadingUpload(false);
//     }
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h2>Edit Book {bookId}</h2>
//         </div>
//         {loadingUpdate && <LoadingBox></LoadingBox>}
//         {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
//         {loading ? (
//           <LoadingBox></LoadingBox>
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <>
//             <div>
//               <label htmlFor="name">Title</label>
//               <input
//                 id="name"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter name"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="price">Price</label>
//               <input
//                 id="price"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="image">Image</label>
//               <input
//                 id="image"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter image"
//                 value={frontPhoto}
//                 onChange={(e) => setFrontPhoto(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="imageFile">Image File</label>
//               <input
//                 type="file"
//                 id="imageFile"
//                 label="Choose Image"
//                 className="p-[1rem]"
//                 onChange={uploadFileHandler}
//               ></input>
//               {loadingUpload && <LoadingBox></LoadingBox>}
//               {errorUpload && (
//                 <MessageBox variant="danger">{errorUpload}</MessageBox>
//               )}
//             </div>
//             <div>
//               <label htmlFor="category">Category</label>
//               <input
//                 id="category"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="brand">Author</label>
//               <input
//                 id="brand"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter brand"
//                 value={author}
//                 onChange={(e) => setAuthor(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="brand">Phone</label>
//               <input
//                 id="brand"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter brand"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               ></input>
//             </div>

//             <div>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="3"
//                 type="text"
//                 className="p-[1rem]"
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
        
//             <div>
//               <label></label>
//               <button
//                 type="submit"
//               >
//                 Update
//               </button>
//             </div>
//           </>
//         )}
//       </form>
//     </div>
//   );
// }
