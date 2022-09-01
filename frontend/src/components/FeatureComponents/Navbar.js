import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../common/redux/actions/userActions";
import profileImage from "../../assets/images/dashboardimages/icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const [toggle, setToggle] = useState(true);
  const [menuDropDown, setMenuDropDown] = useState(true);

  return (
    <React.Fragment>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                IzahTap
              </span>
            </Link>
          </div>

          <div className="hidden md:block flex items-center">
            <ul className="flex flex-col md:flex-row">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3  text-[20px] bg-blue-700 rounded md:bg-transparent md:hover:text-[#6fcf97] md:px-4 "
                  aria-current="page"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/explanations"
                  className="block py-2 pr-4 pl-3 text-gray-700  text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                >
                  Explanations
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {userInfo ? (
            <div className="flex items-center">
              <div className="flex items-center">
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 ring-4 ring-gray-300 "
                  id="user-menu-button"
                  onClick={() => setToggle(!toggle)}
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userInfo?.image || profileImage}
                    alt="user photo"
                  />
                </button>

                <div
                  className={toggle ? "hidden" : "block mobileDropMenu shadow"}
                  id="user-dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block font-bold  text-[18px] text-gray-900 ">
                      {userInfo.name}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate ">
                      {userInfo.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block py-1 md:py-2 px-4 text-[14px] md:text-[18px] text-gray-700 hover:bg-[#6fcf97] hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block py-1 md:py-2 px-4 text-[14px] md:text-[18px] text-gray-700 hover:bg-[#6fcf97] hover:text-white"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block py-1 md:py-2 px-4 text-[14px] md:text-[18px] text-gray-700 hover:bg-[#6fcf97] hover:text-white"
                      >
                        Help and FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={signoutHandler}
                        className="block py-1 md:py-2 px-4 text-[14px] md:text-[18px] text-gray-700 hover:bg-gray-700 hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center w-9 h-9 text-gray-400 rounded-full md:hidden ring-4 ring-gray-300 "
                  id="mobile-menu-button"
                  onClick={() => setMenuDropDown(!menuDropDown)}
                  aria-expanded="false"
                  data-dropdown-toggle="mobile-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <GiHamburgerMenu className="w-6 h-6" />
                </button>
                <div
                  className={
                    menuDropDown ? "hidden" : "block flex items-center centerMenuDropDown"
                  }
                >
                  <ul className="flex flex-col md:flex-row">
                    <li>
                      <Link
                        to="/"
                        className="block py-2 pr-4 pl-3  text-[20px] hover:bg-gray-100  rounded md:bg-transparent md:hover:text-[#6fcf97] md:px-4 "
                        aria-current="page"
                      >
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/explanations"
                        className="block py-2 pr-4 pl-3 text-gray-700  text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                      >
                        Explanations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="block py-2 pr-4 pl-3 text-gray-700 text-[20px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6fcf97] md:px-4"
                      >
                      Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center bg-[#6fcf97] text-[white] text-[16px] py-[10px] px-[20px] rounded-[5px]">
              <Link to="/signin">Login</Link>
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
