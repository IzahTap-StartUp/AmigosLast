import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "../reducers/userReducers";

import {
  blogCreateReducer,
  blogDeleteReducer,
  blogDetailsReducer,
  blogListReducer,
  blogUpdateReducer,
} from "../reducers/blogReducers";

import {
  bookDetailsReducer,
  bookListReducer,
  bookCreateReducer,
  bookUpdateReducer,
  bookDeleteReducer,
  sellerBookListReducer
} from "../reducers/bookReducers";

import {
  jobCreateReducer,
  jobDeleteReducer,
  jobDetailsReducer,
  jobListReducer,
  jobUpdateReducer,
} from "../reducers/jobReducers";

import {
  explanationCreateReducer,
  explanationDeleteReducer,
  explanationDetailsReducer,
  explanationListReducer,
  explanationUpdateReducer,
  explanationTopicsReducer,
  explanationTopicsDetailReducer,
  sectionListReducer,
  questionListReducer,
  questionDetailsReducer,
  questionReviewCreateReducer,
} from "../reducers/explanationReducers";

import { cartReducer } from "../reducers/cartReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDelete: blogDeleteReducer,
  explanationList: explanationListReducer,
  explanationTopics: explanationTopicsReducer,
  explanationTopicsDetail: explanationTopicsDetailReducer,
  explanationDetails: explanationDetailsReducer,
  explanationCreate: explanationCreateReducer,
  explanationUpdate: explanationUpdateReducer,
  explanationDelete: explanationDeleteReducer,
  sectionList: sectionListReducer,
  questionList: questionListReducer,
  questionDetail: questionDetailsReducer,
  questionReviewCreate: questionReviewCreateReducer,
  cart: cartReducer,
  jobList: jobListReducer,
  jobDetails: jobDetailsReducer,
  jobCreate: jobCreateReducer,
  jobUpdate: jobUpdateReducer,
  jobDelete: jobDeleteReducer,
  bookList: bookListReducer,
  sellerBookList: sellerBookListReducer,
  bookDetails: bookDetailsReducer,
  bookCreate: bookCreateReducer,
  bookUpdate: bookUpdateReducer,
  bookDelete: bookDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
