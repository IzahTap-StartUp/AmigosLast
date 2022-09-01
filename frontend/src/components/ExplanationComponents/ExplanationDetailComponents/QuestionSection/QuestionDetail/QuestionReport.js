import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { createQuestionReview } from "../../../../../common/redux/actions/explanationActions";
import { QUESTION_REVIEW_CREATE_RESET } from "../../../../../common/redux/constants/explanationConstants";
const QuestionReport = (props) => {
  const { toggle, setToggle, explanationId, topicId, sectionId, questionId } =
    props;

  const dispatch = useDispatch();

  const questionReviewCreate = useSelector(
    (state) => state.questionReviewCreate
  );
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = questionReviewCreate;

  const [tip, setTip] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (successReviewCreate) {
      alert("Review Submitted Successfully");
      setMessage("");
      setTip("");
      dispatch({ type: QUESTION_REVIEW_CREATE_RESET });
    }
  }, [
    dispatch,
    explanationId,
    topicId,
    sectionId,
    questionId,
    successReviewCreate,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (tip && message) {
      dispatch(
        createQuestionReview(explanationId, topicId, sectionId, questionId, {
          tip,
          message,
        })
      );
    } else {
      alert("Zəhmət olmasa rəyinizi əlavə edin");
    }
  };

  return (
    <div
      className={
        toggle
          ? "hidden"
          : "block questionReport shadow p-[30px] bg-[white] w-[700px]"
      }
    >
      <h2 className="font-bold text-[24px]">Report this question</h2>
      {loadingReviewCreate ? (
        <div>Loading...</div>
      ) : errorReviewCreate ? (
        <div>{errorReviewCreate}</div>
      ) : (
        <form className="pt-[15px]" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <span>Tip</span>
            <select
              className="mt-[15px] p-[10px] bg-[#F3F7F5] border-none outline-none"
              onChange={(e) => setTip(e.target.value)}
              value={tip}
            >
              <option value="">Choose your report reason</option>
              <option value="1">
                The information here does not match this textbook question
              </option>
              <option value="2">The information here is not correct</option>
              <option value="3">The information here is not clear</option>
              <option value="4">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <span className="pt-[15px]">Message</span>
            <textarea
              className="mt-[15px]  p-[10px] bg-[#F3F7F5] border-none outline-none"
              placeholder="Please write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-end pt-[15px] float-right">
            <button
              className="py-[10px] px-[20px] bg-[#6fcf97] text-[white] "
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
      <div
        onClick={() => {
          setToggle(true);
        }}
        className="cursor-pointer questionReportClose"
      >
        <AiOutlineClose className="text-[#6fcf97] text-[20px]" />
      </div>
    </div>
  );
};

export default QuestionReport;
