import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../common/redux/actions/userActions";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { years, ages, months } from "../../common/helpers/utils";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(ages[1].value);
  const [month, setMonth] = useState(months[1].value);
  const [year, setYear] = useState(years[1].value);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, age, month, year, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  console.log(age, month, year, name);
  return (
    <React.Fragment>
      <div className="wrapper flex pt-[30px]">
        <div className="w-[60%] m-[auto] flex flex-col h-[100%]">
          <div>
            <h2 className="text-[32px] font-bold">Welcome to our world!</h2>
          </div>
          <div className="pt-[25px]">
            <form className="form" onSubmit={submitHandler}>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div className="flex flex-col">
                <label>BIRTHDAY</label>

                <div className="flex justify-between items-center">
                  <select
                    className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                    name="days"
                    id="days"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  >
                    {ages.map((age) => (
                      <option key={age.value} value={age.value}>
                        {age.text}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                    name="months"
                    id="months"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.text}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                    name="years"
                    id="years"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    {years.map((year) => (
                      <option key={year.value} value={year.value}>
                        {year.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col mt-[15px]">
                <label>NAME</label>
                <input
                  className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                  type="text"
                  required
                  placeholder="Please enter name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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

              <div className="flex flex-col  mt-[15px]">
                <label>CONFIRM PASSWORD</label>
                <input
                  className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                  type="password"
                  required
                  placeholder="Please enter password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  to="signin"
                  className=" pt-[10px] text-[16px] text-[#6fcf97]"
                >
                  Login
                </Link>
                <button
                  className="w-[100%] text-[20px] text-white p-[15x] py-[20px]  bg-[#6fcf97] mt-[20px] rounded-[15px]"
                  type="submit"
                >
                  Click and join us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
