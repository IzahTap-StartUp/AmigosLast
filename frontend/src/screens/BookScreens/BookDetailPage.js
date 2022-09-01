import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBook } from "../../common/redux/actions/bookActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import bookCover from "../../assets/images/bookImages/bookCover.jpg";
export default function BookDetailPage(props) {
  const dispatch = useDispatch();
  const bookId = props.match.params.id;
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, error, book } = bookDetails;
  useEffect(() => {
    dispatch(detailsBook(bookId));
  }, [dispatch, bookId]);

  const number = "050-519-87-54";

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="wrapper medium pt-[50px]">
          <div className="flex justify-center items-center lg:justify-start flex-col  lg:flex-row">
            <div className="w-[40%]">
              <img
                src={bookCover}
                alt="bookcover"
                className="w-[100%] h-[100%] lg:max-h-[550px]"
              />
            </div>
            <div className="pl-[0px] pt-[15px] text-center lg:text-left lg:pl-[50px] lg:pt-[0px]">
              <h2 className="text-[30px] font-bold ">{book.title}</h2>

              <div className="flex flex-col pt-[20px]">
                <span className="text-[#6fcf97] text-[20px] font-bold">
                  Author:
                </span>
                <span className="pt-[10px]">{book.author}</span>
              </div>

              <div className="flex flex-col pt-[20px]">
                <span className="text-[#6fcf97] text-[20px] font-bold">
                  Title:
                </span>
                <span className="pt-[10px]">Ali ve Nino</span>
              </div>

              <div className="flex flex-col pt-[20px]">
                <span className="text-[#6fcf97] text-[20px] font-bold">
                  Author:
                </span>
                <span>Ali ve Nino</span>
              </div>

              <div className="flex flex-col pt-[20px]">
                <span className="text-[#6fcf97] text-[20px] font-bold">
                  Seller:
                </span>
                <span>Ali ve Nino</span>
              </div>

              <div className="flex flex-col pt-[20px]">
                <span className="text-[#6fcf97] text-[20px] font-bold">
                  Contact:
                </span>
                <span>050-519-87-54</span>
              </div>

              <div className="w-[100%] lg:w-[460px]">
                <a href={"tel:" + number}>
                  <button className="bg-[#6fcf97] rounded-[10px] text-[20px] mt-[20px] text-[white] w-[100%] p-[15px]">
                    Call
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[20px]">
            <span className="text-[#6fcf97] text-[20px] font-bold">
              Description:
            </span>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
