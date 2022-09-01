const {
  EXPLANATION_CREATE_FAIL,
  EXPLANATION_CREATE_REQUEST,
  EXPLANATION_CREATE_SUCCESS,
  EXPLANATION_CREATE_RESET,
  EXPLANATION_DETAILS_FAIL,
  EXPLANATION_DETAILS_REQUEST,
  EXPLANATION_DETAILS_SUCCESS,
  EXPLANATION_TOPICS_LIST_REQUEST,
  EXPLANATION_TOPICS_LIST_SUCCESS,
  EXPLANATION_TOPICS_LIST_FAIL,
  EXPLANATION_TOPIC_DETAIL_LIST_REQUEST,
  EXPLANATION_TOPIC_DETAIL_LIST_SUCCESS,
  EXPLANATION_TOPIC_DETAIL_LIST_FAIL,
  SECTION_LIST_FAIL,
  SECTION_LIST_REQUEST,
  SECTION_LIST_SUCCESS,
  QUESTION_LIST_FAIL,
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_SUCCESS,
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
  EXPLANATION_UPDATE_RESET,
  EXPLANATION_DELETE_REQUEST,
  EXPLANATION_DELETE_FAIL,
  EXPLANATION_DELETE_SUCCESS,
  EXPLANATION_DELETE_RESET,
} = require("../constants/explanationConstants");

export const explanationListReducer = (
  state = { loading: true, explanations: [] },
  action
) => {
  switch (action.type) {
    case EXPLANATION_LIST_REQUEST:
      return { loading: true };
    case EXPLANATION_LIST_SUCCESS:
      return { loading: false, explanations: action.payload };
    case EXPLANATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const explanationTopicsReducer = (
  state = { loading: true, topics: [] },
  action
) => {
  switch (action.type) {
    case EXPLANATION_TOPICS_LIST_REQUEST:
      return { loading: true };
    case EXPLANATION_TOPICS_LIST_SUCCESS:
      return { loading: false, topics: action.payload };
    case EXPLANATION_TOPICS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const explanationTopicsDetailReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case EXPLANATION_TOPIC_DETAIL_LIST_REQUEST:
      return { loading: true };
    case EXPLANATION_TOPIC_DETAIL_LIST_SUCCESS:
      return { loading: false, topics: action.payload };
    case EXPLANATION_TOPIC_DETAIL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sectionListReducer = (
  state = { loading: true, sections: [] },
  action
) => {
  switch (action.type) {
    case SECTION_LIST_REQUEST:
      return { loading: true };
    case SECTION_LIST_SUCCESS:
      return { loading: false, sections: action.payload };
    case SECTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionListReducer = (
  state = { loading: true, questions: [] },
  action
) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true };
    case QUESTION_LIST_SUCCESS:
      return { loading: false, questions: action.payload };
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const questionDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case QUESTION_DETAILS_REQUEST:
      return { loading: true };
    case QUESTION_DETAILS_SUCCESS:
      return { loading: false, question: action.payload };
    case QUESTION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const questionReviewCreateReducer = (
  state = {loading: true},
  action
) => {
  switch (action.type) {
    case QUESTION_REVIEW_CREATE_REQUEST:
      return {loading: true}
    case QUESTION_REVIEW_CREATE_SUCCESS:
      return {loading: false, success: true, review: action.payload}
    case QUESTION_REVIEW_CREATE_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const explanationDetailsReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case EXPLANATION_DETAILS_REQUEST:
      return { loading: true };
    case EXPLANATION_DETAILS_SUCCESS:
      return { loading: false, explanation: action.payload };
    case EXPLANATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const explanationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPLANATION_CREATE_REQUEST:
      return { loading: true };
    case EXPLANATION_CREATE_SUCCESS:
      return { loading: false, success: true, explanation: action.payload };
    case EXPLANATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EXPLANATION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const explanationUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPLANATION_UPDATE_REQUEST:
      return { loading: true };
    case EXPLANATION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EXPLANATION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case EXPLANATION_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const explanationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPLANATION_DELETE_REQUEST:
      return { loading: true };
    case EXPLANATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EXPLANATION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case EXPLANATION_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
