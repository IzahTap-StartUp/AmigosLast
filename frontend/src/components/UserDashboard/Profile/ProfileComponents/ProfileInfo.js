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
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

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
      setBio(user.bio);
      setPhoneNumber(user.phoneNumber);
      setCountry(user.country);
      setRole(user.role);
      setGender(user.gender);
    }
  }, [dispatch, userInfo.id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        userId: user._id,
        bio,
        phoneNumber,
        country,
        role,
        gender,
      })
    );
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

              <div className="my-[20px] mx-[0] flex flex-col items-center py-[20px]">
                <div className="w-[100%] m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[20px] pl-[0] w-[100%]">
                    <label>Bio</label>
                    <textarea
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="w-[100%] m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Phone</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="PhoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Role</label>
                    <select
                      placeholder="Role"
                      value={role}
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Choose your role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="w-[100%] m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Country</label>
                    <select
                      value={country}
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Choose your country</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Turkey">Turkey</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                  <div className="p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Gender</label>
                    <select
                      value={gender}
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Choose your gender</option>
                      <option value="boy">Boy</option>
                      <option value="girl">Girl</option>
                      <option value="lgbt">LGBT</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[30px] py-[10px]  text-[16px] mt-[5px] bg-[#6fcf97] rounded-[10px] text-white"
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
