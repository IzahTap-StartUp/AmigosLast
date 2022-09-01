import React from "react";
import { FaSchool } from "react-icons/fa";
const SecondaryComponent = () => {
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
    <div className="wrapper medium">
      <div className="pt-[50px] lg:pt-[150px] flex flex-col items-start justify-between lg:flex-row">
        <div className="pt-[20px] w-[100%] h-[300px] lg:w-[40%] lg:h-[500px]">
          <img
            className="rounded-[10px]"
            src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] pl-[0px] lg:pl-[20px] pt-[50px] grid grid-cols-1 grid-rows-4 gap-[15px]  lg:grid-cols-2 lg:grid-rows-2 lg:gap-[30px] items-center">
          {data.map((item) => {
            return (
              <div className="shadow p-[20px] mt-[10px] cursor-pointer duration-100  ease-in hover:scale-1">
                <div className="text-[#6fcf97] text-3xl">
                  <FaSchool />
                </div>
                <h2 className="pt-[10px] text-2xl font-bold">Live Classes</h2>
                <p className="pt-[10px] text-[#dbd7d2]">You are going to live and learn the best lesson</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-[10px] lg:pt-[50px] flex flex-col items-start justify-between lg:flex-row   pb-[100px]">
        <div className="w-[100%] lg:w-[50%] pr-[0px] lg:pr-[20px] pt-[10px] lg:pt-[50px]">
          <h2 className="text-[30px] font-bold pt-[50px]">E-learning 2</h2>
          <p className="pt-[20px] lg:pt-[50px]">
            İngilizce öğrenmenizi sağlayacak kartlardan tarihi anlamanızı
            kolaylaştıran oyunlara kadar istediğiniz zorlukların üstesinden
            gelmek için çeşitli araçlar kullanabilirsiniz. İngilizce öğrenmenizi
            sağlayacak kartlardan tarihi anlamanızı kolaylaştıran oyunlara kadar
            istediğiniz zorlukların üstesinden gelmek için çeşitli araçlar
            kullanabilirsiniz.
          </p>
        </div>
        <div className="pt-[20px] w-[100%] h-[300px] lg:w-[50%] lg:h-[500px]">
          <img
            className="rounded-[10px]"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryComponent;
