import React from 'react'
import SideBar from '../../components/UserDashboard/SideBar';
import HomeProfile from '../../components/UserDashboard/Profile/HomeProfile'
const ProfileSection = () => {
  return (
    <div className='dashboard'>
        <SideBar/>
        <HomeProfile/>
    </div>
  )
}

export default ProfileSection