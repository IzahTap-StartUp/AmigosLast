import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  detailsUser,
  updateUserProfile,
} from "../../../../common/redux/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../../common/redux/constants/userConstants";

import LoadingBox from "../../../HelperComponents/LoadingBox";
import MessageBox from "../../../HelperComponents/MessageBox";
import { years, ages, months } from "../../../../common/helpers/utils";
const ProfileAccount = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setPassword(user.password);
    }
  }, [dispatch, userInfo.id, user]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(
        updateUserProfile({
          password,
        })
      );
    }
  };
  return (
    <React.Fragment>
      <div className="pl-[10px] lg:pl-[20px]">
        <form onSubmit={submitHandler}>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile uğurla yeniləndi
                </MessageBox>
              )}

              <div>
                <div className="w-[100%] m-auto flex flex-col  justify-between">
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Password</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Confirm Password</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97] border-solid border-2"
                      type="text"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[30px] py-[10px]  text-[16px] mt-[15px] bg-[#6fcf97] rounded-[10px] text-white"
                >
                  Save Changes
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProfileAccount;
