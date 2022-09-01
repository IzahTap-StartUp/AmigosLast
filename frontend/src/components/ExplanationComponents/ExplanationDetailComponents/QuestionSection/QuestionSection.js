import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../../../HelperComponents/LoadingBox";
import MessageBox from "../../../HelperComponents/MessageBox";
import { listQuestions } from "../../../../common/redux/actions/explanationActions";
import QuestionLeftBar from "./QuestionLeftBar";
import QuestionBox from "./QuestionBox";
import QuestionSectionHeader from "./QuestionSectionHeader";
import Routing from './Routing';
const QuestionSection = (props) => {
  const explanationId = props.match.params.id;
  const topicId = props.match.params.topicId;
  const sectionId = props.match.params.sectionId;
  console.log("explanation", explanationId);
  console.log("section", sectionId);
  console.log("topic", topicId);

  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.questionList);
  const { loading, error, questions } = questionList;
  useEffect(() => {
    dispatch(listQuestions(explanationId, topicId, sectionId));
  }, [dispatch, explanationId, topicId, sectionId]);
  console.log(questions);



  return (
    <div className="wrapper medium flex flex-col pt-[50px]">
      <div>
        <Routing/>
      </div>
      <div className="flex flex-col lg:flex-row  pt-[20px]">
        <div>
          <QuestionLeftBar />
        </div>

        <div className="w-[100%]  lg:ml-[20px] flex flex-col">
          <div className="pt-[20px]">
            <QuestionSectionHeader />
          </div>
          <div>
            <QuestionBox
              loading={loading}
              error={error}
              questions={questions}
              topicId={topicId}
              sectionId={sectionId}
              explanationId={explanationId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
