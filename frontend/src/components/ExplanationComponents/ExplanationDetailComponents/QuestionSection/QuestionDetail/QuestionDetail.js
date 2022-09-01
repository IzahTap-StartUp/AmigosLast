import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../../../../HelperComponents/LoadingBox";
import MessageBox from "../../../../HelperComponents/MessageBox";
import { detailsQuestion } from "../../../../../common/redux/actions/explanationActions";
import QuestionDetailRight from "./QuestionDetailRight";
import Routing from "../Routing";
import QuestionDetailLeft from "./QuestionDetailLeft";

const QuestionDetail = (props) => {
  const dispatch = useDispatch();
  const explanationId = props.match.params.id;
  const topicId = props.match.params.topicId;
  const sectionId = props.match.params.sectionId;
  const questionId = props.match.params.questionId;

  console.log(explanationId, topicId, sectionId, questionId);

  const questionDetail = useSelector((state) => state.questionDetail);
  const { loading, error, question } = questionDetail;
  console.log(question);

  useEffect(() => {
    dispatch(detailsQuestion(explanationId, topicId, sectionId, questionId));
  }, [dispatch, explanationId, topicId, sectionId, questionId]);

  return (
    <div className="wrapper medium">
      <div>
        <Routing />
      </div>
      <div className="flex flex-col lg:flex-row pt-[20px]">
        <div>
          <QuestionDetailLeft />
        </div>
        <div className="lg:ml-[20px] shadow p-[10px] lg:p-[20px] mt-[20px]">
          <QuestionDetailRight
            loading={loading}
            error={error}
            question={question}
            explanationId={explanationId}
            topicId={topicId}
            sectionId={sectionId}
            questionId={questionId}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
