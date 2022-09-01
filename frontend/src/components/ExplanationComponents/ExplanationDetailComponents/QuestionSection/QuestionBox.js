import React from "react";
import LoadingBox from "../../../HelperComponents/LoadingBox";
import MessageBox from "../../../HelperComponents/MessageBox";
import { Link } from "react-router-dom";
import { TbArrowUpRight } from "react-icons/tb";
const QuestionBox = (props) => {
  const { loading, error, questions, topicId, sectionId, explanationId } =
    props;
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="w-[100%] flex flex-col">
          {questions.map((question) => {
            return (
              <Link
                to={`/explanation/${explanationId}/topic/${topicId}/sections/${sectionId}/questions/${question._id}`}
              >
                <div className="w-[100%] shadow p-[15px] rounded-[10px] mt-[20px] flex justify-between items-center">
                  <div>
                    <span className="text-[#6fcf97] text-[24px] font-bold pr-[10px]">
                      1
                    </span>
                    {question.title}
                  </div>
                  <div>
                    <TbArrowUpRight className="text-[#6fcf97] text-[20px]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
