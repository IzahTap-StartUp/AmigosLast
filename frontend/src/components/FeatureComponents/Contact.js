import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="text-center mt-[50px]">
        <h2 className="text-[36px] font-semibold">Get In Touch</h2>
        <p className="wrapper medium text-[24px] pt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies, lectus eu consectetur egestas, nisi nisl aliquet nisl,
        </p>

      </div>
 <div className="wrapper medium p-[20px] flex flex-col lg:flex-row  py-[30px]  contactContainer">
      <div className="w-[100%] lg:w-[40%] bg-[#6fcf97] text-white p-[15px] rounded-[10px]">
        <h2 className="text-[24px]">Contact Information</h2>
        <p className="text-[16px] pt-[10px]">
          We'll creattre high quality content and build at least 40 high
          authority
        </p>
        <div className="flex items-center pt-[30px]">
          <div>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="pl-[10px]">support@izahtap.com</div>
        </div>
        <div className="flex items-center pt-[15px]">
          <div>
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="pl-[10px]">050-519-87-54</div>
        </div>
        <div className="flex items-center pt-[15px]">
          <div>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="pl-[10px]">USA, New York</div>
        </div>
      </div>
      <div className="pt-[20px]     lg:ml-[30px] lg:pl-[30px]  w-[100%]">
        <div className="pt-[10px]">
          <span className="text-[12px] text-[#666666] p-[5px]">
            Write your name
          </span>
          <input
            type="text"
            placeholder="Type to write"
            className="block w-[100%] bg-transparent text-[18px] text-[#333333] py-[10px] px-[5px]"
          />
          <span className="block w-[100%] h-[2px] pointer-events-none bg-[#666666]"></span>
        </div>
        <div className="pt-[10px]">
          <span className="text-[12px] text-[#666666] p-[5px]">
            Write your name
          </span>
          <input
            type="text"
            placeholder="Type to write"
            className="block w-[100%] bg-transparent text-[18px] text-[#333333] py-[10px] px-[5px]"
          />
          <span className="block w-[100%] h-[2px] pointer-events-none bg-[#666666]"></span>
        </div>
        <div className="pt-[10px]">
          <span className="text-[12px] text-[#666666] p-[5px]">
            Write your name
          </span>
          <input
            type="text"
            placeholder="Type to write"
            className="block w-[100%] bg-transparent text-[18px] text-[#333333] py-[10px] px-[5px]"
          />
          <span className="block w-[100%] h-[2px] pointer-events-none bg-[#666666]"></span>
        </div>
        <div className="pt-[10px]">
          <span className="text-[12px] text-[#666666] p-[5px]">
            Write your name
          </span>
          <input
            type="text"
            placeholder="Type to write"
            className="block w-[100%] bg-transparent text-[18px] text-[#333333] py-[10px] px-[5px]"
          />
          <span className="block w-[100%] h-[2px] pointer-events-none bg-[#666666]"></span>
        </div>

        <button className="px-[10px] py-[10px] bg-[#6fcf97] text-white mt-[15px] rounded-[5px]">
          Send Message
        </button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Contact;
