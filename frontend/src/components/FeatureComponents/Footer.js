import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <React.Fragment>
      <div>
        <div className="w-[100%] bg-[#EFEFEF] mt-[50px]">
          <footer className="wrapper medium">
            <div className="flex flex-col lg:flex-row justify-between">
                  <div className="pt-[20px] pb-[20px]">
                    <div>
                      <h5 className="text-[24px]">Home Page</h5>
                    </div>
                    <ul className="pt-[15px]">
                      <li className="pt-[10px]">
                        <Link to="/explanations">Explanation</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/books">Books</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/jobs">Jobs</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/blogs">Blogs</Link>
                      </li>
                    </ul>
                  </div>


                  <div className="pt-[20px] pb-[20px]">
                    <div>
                      <h5 className="text-[24px]">Company</h5>
                    </div>
                    <ul className="pt-[15px]">
                      <li className="pt-[10px]">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/team">Teams</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/contact">Contact</Link>
                      </li>
                     
                    </ul>
                  </div>


                  <div className="pt-[20px] pb-[20px]">
                    <div>
                      <h5 className="text-[24px]">Home Page</h5>
                    </div>
                    <ul className="pt-[15px]">
                      <li className="pt-[10px]">
                        <Link to="/explanations">Explanation</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/books">Books</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/jobs">Jobs</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/blogs">Blogs</Link>
                      </li>
                    </ul>
                  </div>


                  <div className="pt-[20px] pb-[20px]">
                    <div>
                      <h5 className="text-[24px]">Company</h5>
                    </div>
                    <ul className="pt-[15px]">
                      <li className="pt-[10px]">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/team">Teams</Link>
                      </li>
                      <li className="pt-[10px]">
                        <Link to="/contact">Contact</Link>
                      </li>
                     
                    </ul>
                  </div>


             
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
