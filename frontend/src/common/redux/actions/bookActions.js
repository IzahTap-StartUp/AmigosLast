import Axios from "axios";
import {
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  SELLER_BOOK_LIST_FAIL,
  SELLER_BOOK_LIST_REQUEST,
  SELLER_BOOK_LIST_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL,

} from "../constants/bookConstants";

export const listBooks = (
  {
    title = '',
    category = '',
  }
) => async (dispatch) => {
  dispatch({
    type: BOOK_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/books?page&title=${title}&category=${category}`);
    dispatch({ type: BOOK_LIST_SUCCESS, payload: data.books });
  } catch (error) {
    dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
  }
};

export const detailsBook = (bookId) => async (dispatch) => {
  dispatch({ type: BOOK_DETAILS_REQUEST, payload: bookId });
  try {
    const { data } = await Axios.get(`/api/books/${bookId}`);
    dispatch({ type: BOOK_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const listSellerBooks = (sellerId) => async (dispatch) => {
  dispatch({ type: SELLER_BOOK_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`/api/books/seller/${sellerId}`);
    dispatch({ type: SELLER_BOOK_LIST_SUCCESS, payload: data });
    console.log( data);
  } catch (error) {
    dispatch({ type: SELLER_BOOK_LIST_FAIL, payload: error.message });
  }
}







export const createBook = () => async (dispatch, getState) => {
  dispatch({ type: BOOK_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/books",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: BOOK_CREATE_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_CREATE_FAIL, payload: message });
  }
};

export const updateBook = (book) => async (dispatch, getState) => {
  dispatch({ type: BOOK_UPDATE_REQUEST, payload: book });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/books/${book._id}`, book, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BOOK_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_UPDATE_FAIL, error: message });
  }
};

export const deleteBook = (bookId) => async (dispatch, getState) => {
  dispatch({ type: BOOK_DELETE_REQUEST, payload: bookId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`/api/books/${bookId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BOOK_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_DELETE_FAIL, payload: message });
  }
};
