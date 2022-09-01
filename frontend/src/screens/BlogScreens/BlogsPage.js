import React, { useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../common/redux/actions/blogActions";
import Blog from "../../components/BlogPageComponents/Blog";

export default function BlogsPage() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  console.log(blogs)

  return (
    <div className="wrapper medium">
      <div class="flex justify-items-start items-start flex-col pt-[50px] relative lg:flex-row lg:items-center">
        <div class="w-[100%] lg:[w-45%] ">
          <p className="text-3xl text-white absolute left-[5%] top-[60%]  leading-9 lg:text-5xl lg:text-[#828282] lg:static">
            The latest news
          </p>
          <h2 className="hidden lg:pt-[25px] text-[#000] lg:block">
            Tips and trends for home Tips and trends for home Tips and trends
            for Tips and trends for home Tips and trends for home Tips and
            trends for Tips and trends for home Tips and trends for home Tips
            and trends for
          </h2>
          <div className="block absolute left-[5%] top-[80%] w-[200px] h-[10px] bg-[#6fcf97] bg-[5px] lg:hidden"></div>
        </div>
        <div class="w-[100%]  h-auto lg:w-[50%] lg:min-w-[580px] lg:h-[480px] lg:pl-[10px]">
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/6913342/pexels-photo-6913342.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
      </div>

      <div >
        <h3 className="text-2xl  lg:text-3xl mt-[50px]">Marketing News</h3>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row flexwrap">
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
{/* 
      <div >
        <h3 className="text-2xl  lg:text-3xl mt-[50px]">Study News</h3>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row flexwrap">
            {blogs.slice(0, 3).map((blog) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
