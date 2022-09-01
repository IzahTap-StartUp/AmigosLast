import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../../common/redux/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <React.Fragment>
      <div className="wrapper flex pt-[100px]">
        <div className="w-[60%] m-[auto] flex flex-col h-[100%]">
          <div>
            <h2 className="text-[32px] font-bold">Hey, Login Now!</h2>
          </div>
          <div className="pt-[25px]">
            <form className="form" onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div className="flex flex-col  mt-[15px]">
                <label id="mail">EMAIL</label>
                <input
                  className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Please enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" flex flex-col  mt-[15px]">
                <label>PASSWORD</label>
                <input
                  className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                  type="password"
                  required
                  placeholder="Please enter password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className=" text-center pt-[20px]">
                <p>
                  Oturum aç'a tıklayarak Quizlet'in
                  <br />
                  Kullanım Koşulları ve Gizlilik Politikasını kabul etmiş
                  oluyorsunuz.
                </p>
                <Link
                  to="register"
                  className=" pt-[10px] text-[16px] text-[#6fcf97]"
                >
                  Sign Up
                </Link>
                <button
                  className="w-[100%] text-[20px] text-white p-[15x] py-[20px]  bg-[#6fcf97] mt-[20px] rounded-[15px]"
                  type="submit"
                >
                 Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
