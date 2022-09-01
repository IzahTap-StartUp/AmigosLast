import React, { useState } from "react";
import questionCover from "../../../../../assets/images/brandlogos/questionCover.png";
import LoadingBox from "../../../../../components/HelperComponents/LoadingBox";
import MessageBox from "../../../../../components/HelperComponents/MessageBox";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../../../../common/redux/actions/cartExplanationActions";
import { VscReport } from "react-icons/vsc";
import { BsFillShareFill } from "react-icons/bs";
import QuestionReport from "./QuestionReport";
const QuestionDetailRight = (props) => {
  const {
    loading,
    error,
    question,
    explanationId,
    sectionId,
    topicId,
    questionId,
  } = props;
  const [copied, setCopied] = useState(false);
  const [toggle, setToggle] = useState(true);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    alert("Link copied to clipboard");
  }

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCart(explanationId, topicId, sectionId, questionId));
  };

  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <AiOutlineLeft className="text-[#6fcf97] text-[20px] " />
          Previous Question
        </div>
        <div className="flex items-center">
          Next Question
          <AiOutlineRight className="text-[#6fcf97] text-[20px] " />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-left lg:items-center pt-[30px]">
        <div>
          <h2 className="font-bold text-[20px]">
            Chapter PR, Assess, Chapter Assestments, Exercise 1
          </h2>
        </div>
        <div className="flex flex-row cursor-pointer pt-[15px] lg:pt-[0px]">
          <div className="mr-[10px]" onClick={addToCart} >
            <AiOutlineHeart className="text-[#6fcf97] text-[25px] " />
          </div>
          <div
            className="mr-[10px]"
            // onClick={() => {
            //   setToggle(!toggle);
            // }}
          >
            <VscReport className="text-[#6fcf97] text-[25px] " />
          </div>
          <div className="ml-[10px]" onClick={copy}>
            <BsFillShareFill className={"text-[#6fcf97] text-[20px]"} />
          </div>
        </div>
      </div>
      <div className="pt-[50px]">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="flex flex-col">
            <div className="font-bold">Sualin serti</div>
            <div className="bg-[#F3F7F5] p-[15px] rounded-[10px] mt-[10px]">
              <h2>{question.title}</h2>
            </div>
            <div className="font-bold pt-[15px]">Sualin izahi</div>
            <div className="w-[100%] h-[auto] bg-[#F3F7F5] p-[2px] lg:p-[15px] mt-[10px]">
              <img src={questionCover} alt="questionCover" />
            </div>
            <div className="bg-[#F3F7F5] mt-[15px] rounded-[10px]">
              <p className="text-[16px] lg:text-[25px] font-bold text-center">
                Cavab: <span className="text-[#6fcf97]">{question.answer}</span>
              </p>
            </div>
          </div>
        )}
      </div>
      <QuestionReport
        toggle={toggle}
        setToggle={setToggle}
        explanationId={explanationId}
        topicId={topicId}
        sectionId={sectionId}
        questionId={questionId}
      />
    </React.Fragment>
  );
};

export default QuestionDetailRight;
