import React from 'react'
import {Link} from 'react-router-dom';
const FavouriteExplanations = () => {
  return (
    <div className='w-[80%] lg:w-[80%] ml-[20px] rounded-[10px]'>
        <div className='w-[100%] bg-[#6fcf97] py-[50px] px-[10px]  text-center rounded-[10px]'>
          <p className='text-center text-[#fff] text-[20px] lg:text-[32px]'>There is no favourite questions in here yet</p>
          <Link to="/explanations" className='font-bold py-[25px] text-[#fff]'>Come back to explanations page</Link>
        </div>
    </div>
  )
}

export default FavouriteExplanations