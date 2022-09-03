import Axios from "axios";
import {
  EXPLANATION_CREATE_FAIL,
  EXPLANATION_CREATE_REQUEST,
  EXPLANATION_CREATE_SUCCESS,
  EXPLANATION_DETAILS_FAIL,
  EXPLANATION_DETAILS_REQUEST,
  EXPLANATION_DETAILS_SUCCESS,
  EXPLANATION_TOPICS_LIST_REQUEST,
  EXPLANATION_TOPICS_LIST_FAIL,
  EXPLANATION_TOPICS_LIST_SUCCESS,
  EXPLANATION_TOPIC_DETAIL_LIST_FAIL,
  EXPLANATION_TOPIC_DETAIL_LIST_REQUEST,
  EXPLANATION_TOPIC_DETAIL_LIST_SUCCESS,
  SECTION_LIST_REQUEST,
  SECTION_LIST_SUCCESS,
  SECTION_LIST_FAIL,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_DETAILS_FAIL,
  QUESTION_DETAILS_REQUEST,
  QUESTION_DETAILS_SUCCESS,
  QUESTION_REVIEW_CREATE_FAIL,
  QUESTION_REVIEW_CREATE_REQUEST,
  QUESTION_REVIEW_CREATE_SUCCESS,
  EXPLANATION_LIST_FAIL,
  EXPLANATION_LIST_REQUEST,
  EXPLANATION_LIST_SUCCESS,
  EXPLANATION_UPDATE_REQUEST,
  EXPLANATION_UPDATE_SUCCESS,
  EXPLANATION_UPDATE_FAIL,
  EXPLANATION_DELETE_REQUEST,
  EXPLANATION_DELETE_FAIL,
  EXPLANATION_DELETE_SUCCESS,
} from "../constants/explanationConstants";

export const listExplanations = () => async (dispatch) => {
  dispatch({
    type: EXPLANATION_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`http://localhost:5000/api/explanations`);
    dispatch({ type: EXPLANATION_LIST_SUCCESS, payload: data.explanations });
  } catch (error) {
    dispatch({ type: EXPLANATION_LIST_FAIL, payload: error.message });
  }
};

export const detailsExplanation = (explanationId) => async (dispatch) => {
  dispatch({ type: EXPLANATION_DETAILS_REQUEST, payload: explanationId });
  try {
    const { data } = await Axios.get(`http://localhost:5000/api/explanations/${explanationId}`);
    dispatch({ type: EXPLANATION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EXPLANATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listExplanationTopics = (explanationId) => async (dispatch) => {
  dispatch({
    type: EXPLANATION_TOPICS_LIST_REQUEST,
    payload: explanationId,
  });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/api/explanations/${explanationId}/topics`
    );
    dispatch({ type: EXPLANATION_TOPICS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EXPLANATION_TOPICS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listExplanationTopicsDetail =
  (explanationId, topicId) => async (dispatch) => {
    dispatch({
      type: EXPLANATION_TOPIC_DETAIL_LIST_REQUEST,
      payload: { explanationId, topicId },
    });
    try {
      const { data } = await Axios.get(
        `http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}`
      );
      dispatch({ type: EXPLANATION_TOPIC_DETAIL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EXPLANATION_TOPIC_DETAIL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listSections = (explanationId, topicId) => async (dispatch) => {
  dispatch({
    type: SECTION_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}/sections`
    );
    dispatch({ type: SECTION_LIST_SUCCESS, payload: data.explanations });
  } catch (error) {
    dispatch({ type: SECTION_LIST_FAIL, payload: error.message });
  }
};

export const listQuestions =
  (explanationId, topicId, sectionId) => async (dispatch) => {
    dispatch({
      type: QUESTION_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}/sections/${sectionId}/questions`
      );
      dispatch({ type: QUESTION_LIST_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      dispatch({
        type: QUESTION_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const detailsQuestion =
  (explanationId, topicId, sectionId, questionId) => async (dispatch) => {
    dispatch({
      type: QUESTION_DETAILS_REQUEST,
      payload: { explanationId, topicId, sectionId, questionId },
    });
    try {
      const { data } = await Axios.get(
        `http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}/sections/${sectionId}/questions/${questionId}`
      );
      dispatch({ type: QUESTION_DETAILS_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      dispatch({
        type: QUESTION_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createQuestionReview =
  (explanationId, topicId, sectionId, questionId, review) =>
  async (dispatch, getState) => {
    dispatch({ type: QUESTION_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(`http://localhost:5000/api/explanations/${explanationId}/topics/${topicId}/sections/${sectionId}/questions/${questionId}/reviews`, review, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({
        type: QUESTION_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
      console.log(data)
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: QUESTION_REVIEW_CREATE_FAIL, payload: message });
    }
  };

export const createExplanation = () => async (dispatch, getState) => {
  dispatch({ type: EXPLANATION_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "http://localhost:5000/api/explanations",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: EXPLANATION_CREATE_SUCCESS,
      payload: data.explanation,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: EXPLANATION_CREATE_FAIL, payload: message });
  }
};
export const updateExplanation =
  (explanation) => async (dispatch, getState) => {
    dispatch({ type: EXPLANATION_UPDATE_REQUEST, payload: explanation });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `http://localhost:5000/api/explanations/${explanation._id}`,
        explanation,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: EXPLANATION_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXPLANATION_UPDATE_FAIL, error: message });
    }
  };
export const deleteExplanation =
  (explanationId) => async (dispatch, getState) => {
    dispatch({ type: EXPLANATION_DELETE_REQUEST, payload: explanationId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.delete(`http://localhost:5000/api/explanations/${explanationId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: EXPLANATION_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: EXPLANATION_DELETE_FAIL, payload: message });
    }
  };
