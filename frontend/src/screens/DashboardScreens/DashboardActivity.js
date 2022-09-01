import React from 'react'
import { DashBoardHeader } from '../../components/UserDashboard/DashBoardHeader';
import ChartLine from '../../components/UserDashboard/DashboardCharts/ChartLine';
import { useSelector, useDispatch } from 'react-redux';
const DashboardActivity = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails; 
  return (
    <div className='flex flex-col'>
        <DashBoardHeader/>
         
    </div>
  )
}

export default DashboardActivity