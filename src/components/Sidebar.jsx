import React, { useState } from "react";
import {
  MenuCategory,
  LibraryCategory,
  PlaylistCategory,
  GeneralCategory,
} from "../utils/constants";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home")

  return (
    <div className="flex flex-col flex-1 w-[15rem]  p-[3em] border-r-2 border-gray-200">
      <div className="font-[600] text-[1.5em] text-gray-800 flex flex-row items-center gap-3">
        <span>
          <FaPlayCircle />
        </span>{" "}
        <span>Rungon</span>
      </div>
      <div className="menu flex flex-col">
        <h3 className="py-[1em] text-gray-400 font-[500] text-[1.1em] tracking-widest mt-4 ">
          MENU
        </h3>
        <div className="flex flex-col items-start">
          {MenuCategory.map((category) => (
            <Link to={`${category.link}`}>
              <button
              className={`py-3 flex flex-row items-center text-gray-500 hover:text-[#ee9f27] ${
                category.name === selectedCategory && "text-[#ee9f27] link"
              } `}
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="text-[1.5em]  mr-3"> {category.icon} </span>
              <span className="text-[1em] font-[500]"> {category.name} </span>
              {/* <span className='link'></span> */}
            </button></Link>
          
          ))}
        </div>
      </div>
      <div className="menu flex flex-col">
        <h3 className="py-[1em] text-gray-400 font-[500] text-[1.1em] tracking-widest mt-4">
          LIBRARY
        </h3>
        <div className="flex flex-col items-start">
          {LibraryCategory.map((category) => (
            <button
              className={`py-3 flex flex-row items-center text-gray-500 hover:text-[#ee9f27] ${
                category.name === selectedCategory && "text-[#ee9f27] link"
              } `}
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="text-[1.5em] -500 mr-3"> {category.icon} </span>
              <span className="text-[1em]  font-[500]"> {category.name} </span>
            </button>
          ))}
        </div>
      </div>
      <div className="menu flex flex-col">
        <h3 className="py-[1em] text-gray-400 font-[500] text-[1.1em] tracking-widest mt-4">
          PLAYLIST
        </h3>
        <div className="flex flex-col items-start">
          {PlaylistCategory.map((category) => (
            <button
              className={`py-3 flex flex-row items-center text-gray-500 hover:text-[#ee9f27] ${
                category.name === selectedCategory && "text-[#ee9f27] link"
              } `}
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="text-[1.5em]  mr-3"> {category.icon} </span>
              <span className="text-[1em]  font-[500]"> {category.name} </span>
            </button>
          ))}
        </div>
      </div>
      <div className="menu flex flex-col">
        <h3 className="py-[1em] text-gray-400 font-[500] text-[1.1em] tracking-widest mt-4">
          GENERAL
        </h3>
        <div className="flex flex-col items-start">
          {GeneralCategory.map((category) => (
            <button
              className={`py-3 flex flex-row items-center text-gray-500 hover:text-[#ee9f27] ${
                category.name === selectedCategory && "text-[#ee9f27] link"
              } `}
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="text-[1.5em]  mr-3"> {category.icon} </span>
              <span className="text-[1em]  font-[500]"> {category.name} </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
