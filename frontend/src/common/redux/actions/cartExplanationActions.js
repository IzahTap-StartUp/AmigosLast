
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cartExplanationConstants";
import Axios from "axios";


export const addToCart =
  (explanationId, topicId, sectionId, questionId) =>
  async (dispatch, getState) => {
    const { data } = await Axios.get(
      `http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}/sections/${sectionId}/questions/${questionId}`
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        title: data.title,
        answer: data.answer,
        question: data._id,
      },
    });
    console.log(data);
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (questionId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: questionId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
