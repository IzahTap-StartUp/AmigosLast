import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimontial.css";
import { FaQuoteRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}
    />
  );
}

const Testimontial = () => {
  return (
    <div className="wrapper medium">
      <div>
        <h2 className="font-bold text-center text-[20px] lg:text-5xl">
          What people say about us
        </h2>
      </div>
      <Slider
       autoplay={true}
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        slidesToShow={3}
        slidesToScroll={2}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
          >
       
      
        <div className="shadow p-[15px] rounded-[10px] m-[15px] ">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Revan Mehdizade</h3>
                <p>Student- Germany</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow p-[15px] rounded-[10px] m-[15px] ">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Vugar Hasanov</h3>
                <p>Student</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow p-[15px] rounded-[10px] m-[15px] ">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Vugar Hasanov</h3>
                <p>Student</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow p-[15px] rounded-[10px] m-[15px] ">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Vugar Hasanov</h3>
                <p>Student</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow p-[15px] rounded-[10px] m-[15px] ">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Vugar Hasanov</h3>
                <p>Student</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow p-[15px] rounded-[10px] m-[15px]">
          <div className="flex justify-between items-center">
            <div className="text-[#6fcf97] text-2xl">
              <FaQuoteRight />
            </div>
            <div className="bg-[#6fcf97] w-[100%] h-[8px] ml-[15px]"></div>
          </div>
          <div className="flex flex-col pt-[10px]">
            <div className="flex flex-row pt-[10px]">
              <div className="w-[40px] h-[40px] ">
                <img
                  className="rounded-[50px]"
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="pl-[15px] text-left">
                <h3 className="font-bold">Vugar Hasanov</h3>
                <p>Student</p>
              </div>
            </div>

            <div className="text-left pt-[10px] ">
              <p>
                lorem50 ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quidem.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimontial;
