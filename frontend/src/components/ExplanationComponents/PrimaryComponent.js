import React from 'react'

const PrimaryComponent = () => {
  return (
    <div className="wrapper medium pt-[50px]">
    <div className="rounded-[15px] h-[200px] lg:h-[300px] relative">
      <img className="rounded-[10px]" src="https://images.pexels.com/photos/5428262/pexels-photo-5428262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <article className="absolute w-[80%]  top-[50px]  lg:top-[70px] left-[50%] text-center text-white translate-x-[-50%]">
        <h1 className="text-[20px] lg:text-[44px]">
          Buy and sell your textbooks <br/> for the best price
        </h1>
        <p className="hidden lg:block">
          İstediğiniz konuda uzman olabilirsiniz İstediğiniz konuda uzman
          olabilirsiniz İ stediğiniz konuda uzman olabilirsiniz
        </p>
      </article>
    </div>
  </div>
  )
}

export default PrimaryComponent