import React from 'react'
import SideBar from '../../components/UserDashboard/SideBar';
import FavouriteExplanations from '../../components/UserDashboard/FavouriteExpanations/FavouriteExplanations';
const FavouriteSection = () => {
  return (
    <div className='dashboard'>
      <SideBar/>
      <FavouriteExplanations/>
    </div>
  )
}

export default FavouriteSection