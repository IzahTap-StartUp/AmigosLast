import React from "react";
import SideBar from '../../components/UserDashboard/SideBar';
import BookListTable from '../../components/UserDashboard/BookListTable';
const UserBookList = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <BookListTable />
    </div>
  );
};

export default UserBookList;
