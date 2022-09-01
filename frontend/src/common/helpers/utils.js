import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillHome, AiFillAccountBook } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import {BsFillBookmarkHeartFill, BsBookHalf} from 'react-icons/bs';
import {BiUserCircle, BiLogIn} from 'react-icons/bi';
import {TbTools} from 'react-icons/tb';
export const ages = [
  { value: "", text: "--Choose an option--" },
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "4", text: "4" },
  { value: "5", text: "5" },
];

export const months = [
  { value: "", text: "--Choose an option--" },
  { value: "December", text: "December" },
  { value: "January", text: "January" },
  { value: "February", text: "February" },
  { value: "Mart", text: "Mart" },
  { value: "April", text: "April" },
  { value: "May", text: "May" },
];

export const years = [
  { value: "", text: "--Choose an option--" },
  { value: "2000", text: "2000" },
  { value: "2001", text: "2001" },
  { value: "2002", text: "2002" },
  { value: "2003", text: "2003" },
  { value: "2004", text: "2004" },
  { value: "2005", text: "2005" },
  { value: "2006", text: "2006" },
  { value: "2007", text: "2007" },
  { value: "2008", text: "2008" },
  { value: "2009", text: "2009" },
  { value: "2010", text: "2010" },
];

export const sidebarSubtitles = [
  {
    text: "Dashboard",
    route: "/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    text: "Sevimli Izahlar",
    route: "/favourites",
    icon: <BsFillBookmarkHeartFill />,
  },
  {
    text: "Kitablarin",
    route: "/mybooklist",
    icon: <BsBookHalf />,
  },
  {
    text: "Profil",
    route: "/profile",
    icon: <BiUserCircle />,
  },
  {
    text: "Study Tools",
    route: "/studytools",
    icon: <TbTools />,
  },
];

export const homeBoxes = [
  {
    text: "Primary Insurance",
    subtitle:
      "We offer you than yours magazine We offer you than yours magazine",
    icon: <AiFillAccountBook />,
  },
  {
    text: "Primary Insurance2",
    subtitle:
      "We offer you than yours magazine We offer you than yours magazine",
    icon: <AiFillHome />,
  },
  {
    text: "Primary Insurance3",
    subtitle:
      "We offer you than yours magazine We offer you than yours magazine",
    icon: <GiRamProfile />,
  },
];
