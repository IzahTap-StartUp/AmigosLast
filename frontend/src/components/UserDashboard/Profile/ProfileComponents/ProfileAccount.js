import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../../../assets/images/dashboardimages/icon.png";
import {
  detailsUser,
  updateUserProfile,
} from "../../../../common/redux/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../../common/redux/constants/userConstants";
import LoadingBox from "../../../HelperComponents/LoadingBox";
import MessageBox from "../../../HelperComponents/MessageBox";
import { years, ages, months } from "../../../../common/helpers/utils";


const ProfileAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState(ages[1].value);
  const [month, setMonth] = useState(months[1].value);
  const [year, setYear] = useState(years[1].value);

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
      setName(user.name);
      setEmail(user.email);
      setImage(user.image);
      setAge(user.age);
      setMonth(user.month);
      setYear(user.year);
    }
  }, [dispatch, userInfo.id, user]);



 

  const submitHandler = (e) => {
    // submit uploadFileHandler Function also
    e.preventDefault();
    dispatch(
      updateUserProfile({
        userId: user._id,
        name,
        email,
        image,
        age,
        month,
        year,
      })
    );
  };

  const [imageSelected, setImageSelected] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");


  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ucsexwqc");
    setLoadingUpload(true);
    Axios.post(
      "https://api.cloudinary.com/v1_1/progriot/image/upload",
      formData
    ).then((response) => {
      const data = response.data;
      const fileURL = data.secure_url;
      setImage(fileURL);
    });
    setLoadingUpload(false);
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

              <div className="my-[20px] mx-[0] flex flex-col lg:flex-row items-start lg:items-center py-[20px] pl-[20px]">
                <div className="w-[80px] h-[80px]   lg:w-[120px] lg:h-[120px]">
                  {user.image ? (
                  <Image cloudName="progriot" publicId={image} className="rounded-full" />
                  ) : (
                    <img
                      src={profile}
                      alt="profile"
                      className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-full"
                    />
                  )}
                </div>
                <div className="lg:pl-[20px]">
                    <input
                    type="file"
                    id="imageFile"
                    label="Choose Image"
                    className="w-[90%] px-[5px] lg:px-[20px] py-[10px]  text-[16px] mt-[5px] bg-[#6fcf97] rounded-[5px] text-white"
                    onChange={uploadFileHandler}
                  />
                  {/* <button className="bg-[#6fcf97] rounded-[10px] p-[10px] cursor-pointer mt-[10px] text-[white]" onClick={uploadFileHandler}>Set image as profile photo</button> */}
                  <p className="text-[12px] pt-[10px]">
                    Allowed JPG, GIF or PNG, Max size of 800K First Page
                  </p>
                  {loadingUpload && <LoadingBox></LoadingBox>}
                  {errorUpload && (
                    <MessageBox variant="danger">{errorUpload}</MessageBox>
                  )}
                </div>
              </div>
              <div className="">
                <div className="w-[100%] m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[10px] lg:p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Name</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="p-[10px] lg:p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Email</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97] border-solid border-2"
                      type="text"
                      placeholder="Name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[100%]  m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[10px] lg:p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Age</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="p-[10px] lg:p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Month</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-[100%] m-auto flex flex-col lg:flex-row justify-between">
                  <div className="p-[10px] lg:p-[20px] pl-[0] w-[100%] flex flex-col">
                    <label>Year</label>
                    <input
                      className="w-[100%] p-[15px] pr-[0px] rounded-[5px] border-[#6fcf97]  border-solid border-2"
                      type="text"
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>

                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-[30px] py-[10px] mb-[10px] text-[16px] mt-[15px] bg-[#6fcf97] rounded-[10px] text-white"
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
