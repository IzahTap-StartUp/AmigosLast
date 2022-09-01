import React, { useEffect } from "react";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../common/redux/actions/blogActions";
import Blog from "../../components/BlogPageComponents/Blog";

export default function HomeBlogs() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);


  return (
    <div className="wrapper medium">
      <div >
        <h3 className="text-2xl  lg:text-3xl mt-[50px]">Last News</h3>
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
      </div>
    </div>
  );
}
