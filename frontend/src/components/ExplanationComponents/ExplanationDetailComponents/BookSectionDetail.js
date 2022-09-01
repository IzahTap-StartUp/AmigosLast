import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill, BsCaretUpFill } from "react-icons/bs";
const BookSectionDetail = (props) => {
  const { topic, explanation } = props;
  console.log(topic.sections);

  const faqId = explanation._id;

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div
        className="w-[100%] shadow p-[20px] mt-[15px] rounded-t-[10px] cursor-pointer flex justify-between items-center"
        onClick={() => toggle(faqId)}
      >
        <div>
          <h2 className="text-[20px] font-bold">{topic.title}</h2>
          <p>{topic.sectionCount}</p>
        </div>
        <div>
          <span>
            {selected === faqId ? (
              <BsCaretUpFill className="text-[20px] text-[#6fcf97]" />
            ) : (
              <BsFillCaretDownFill className="text-[20px] text-[#6fcf97]" />
            )}
          </span>
        </div>
      </div>
      <div className={selected === faqId ? "block" : "hidden"}>
        {topic.sections.map((section) => {
          return (
            <Link
              to={`/explanation/${explanation._id}/topic/${topic._id}/sections/${section._id}`}
            >
              <div className="p-[10px] bg-[#F0F1F2] hover:text-[#6fcf97] pl-[20px]">
                {section.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BookSectionDetail;
