import React from "react";
import PrimaryComponent from "../components/HomePageComponents/PrimaryComponent";
import SecondaryComponent from "../components/HomePageComponents/SecondaryComponent";
import Testimontial from "../components/HomePageComponents/Testimontial";
import HomeBlogs from "../components/HomePageComponents/HomeBlogs";
import Statistics from "../components/HomePageComponents/Statistics";
export default function HomeScreen() {
  return (
    <div className="">
      <PrimaryComponent />
      <Statistics/>
      <SecondaryComponent />
      <Testimontial />
      <HomeBlogs />
    </div>
  );
}
