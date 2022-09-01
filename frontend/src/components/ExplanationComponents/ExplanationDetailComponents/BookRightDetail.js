import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../../HelperComponents/LoadingBox";
import MessageBox from "../../HelperComponents/MessageBox";
import BookSectionDetail from "./BookSectionDetail";
import { Link } from "react-router-dom";
import {
  listExplanationTopics,
  listExplanationTopicsDetail,
  listSections,
} from "../../../common/redux/actions/explanationActions";
const BookRightDetail = (props) => {
  const dispatch = useDispatch();

  const topicDetails = useSelector((state) => state.explanationTopicsDetail);
  const { topic } = topicDetails;
  console.log(topic)


  useEffect(() => {
    dispatch(listExplanationTopics(explanation._id));
    dispatch( listExplanationTopicsDetail(explanation._id));

  }, dispatch);



  const explanationTopics = useSelector((state) => state.explanationTopics);
  const { loading, error, topics } = explanationTopics;
  const { explanation } = props;
  console.log(topic);


  return (
    <div className="p-[10px]  lg:pl-[50px]">
      <div className="hidden lg:block">
        <h2 className="font-bold text-[24px]">TextBook Summary</h2>
        <p className="pt-[15px]">{explanation.description}</p>
      </div>

      <div>
        <h2 className="font-bold text-[20px] lg:text-[24px] pt-[15px]">
          IzahTap solutions and explanations
        </h2>
        <div>
          {explanation.topics.map((topic) => {
            return (
              <BookSectionDetail
                explanation={explanation}
                topic={topic}
                key={topic._id}
              ></BookSectionDetail>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookRightDetail;
