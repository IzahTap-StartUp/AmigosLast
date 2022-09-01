import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsBlog } from "../../common/redux/actions/blogActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";


import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

export default function BlogDetail(props) {
  const dispatch = useDispatch();
  const blogId = props.match.params.id;
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;
  useEffect(() => {
    dispatch(detailsBlog(blogId));
  }, [dispatch, blogId]);
  const url = window.location.href;
  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="wrapper pt-[50px]">
          <div className="flex flex-col text-center">
            <h2 className="text-3xl leading-6 lg:text-[40px]">{blog.title}</h2>
            <p className="text-[20px] leading-6 lg:text-[6xl] lg:mt-[13px] p-[15px]">
              <span className="font-semibold text-[#828282]">by</span> {blog.author}
            </p>
          </div>

          <nav className="row pt-[20px] lg:pt-[50px]">
            <div className="text-[16px] lg:text-[24px]">Share this article</div>
            <div>
              <ul className="row icons">
                <li>
                  <FacebookShareButton url={url}>
                    <i className="fa-brands fa-facebook  text-[16px] mx-[5px] my-[5px] lg:text-[20px]"></i>
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton url={url}>
                    <i className="fa-brands fa-twitter text-[16px] mx-[5px] my-[5px] lg:text-[20px]"></i>
                  </TwitterShareButton>
                </li>
                <li>
                  <TelegramShareButton url={url}>
                    <i className="fa-brands fa-telegram text-[16px] mx-[5px] my-[5px] lg:text-[20px]"></i>
                  </TelegramShareButton>
                </li>
                <li>
                  <WhatsappShareButton url={url}>
                    <i className="fa-brands fa-whatsapp text-[16px] mx-[5px] my-[5px] lg:text-[20px]"></i>
                  </WhatsappShareButton>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-col items-center w-[100%] blog-detail-below">
            <div className="h-[200px] w-[100%] lg:h-[515px]">
              <img src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
            <div className="w-[100%] m-auto text-left lg:pt-[30px]">
              <p className="text-[16px] text-[#423c3c] lg:text-[20px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered theundoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during th Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered
                theundoubtable source. Lorem Ipsum comes from sections 1.10.32
                and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
                Good and Evil) by Cicero, written in 45 BC. This book is a
                treatise on the theory of ethics, very popular during th
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                sit amet..", comes from a line in section 1.10.32. The standard
                chunk of Lorem Ipsum used since the 1500s is reproduced below
                for those interested. Sections 1.10.32 and 1.10.33 from "de
                Finibus Bonorum et Malorum" by Cicero are also reproduced in
                their exact original form, accompanied by English versions from
                the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
