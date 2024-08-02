import React from 'react';
import { MdNotificationsPaused } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between" style={{backgroundColor:"#032B43"}}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white p-2 rounded focus:outline-none"
          style={{backgroundColor:"#000"}}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white focus:outline-none">
        <MdNotificationsPaused/>
        </button>
        <button className="text-white focus:outline-none">
        <IoMailUnread/>
        </button>
        <button className="text-white focus:outline-none">
        <IoIosSettings/>
        </button>
          <FaUserAlt/>
      </div>
    </div>
  );
};

export default Header;
