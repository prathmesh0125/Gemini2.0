import React from "react";
import "../styles/main.css";
import { FaRegCompass } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="assets/user.jpg" alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello ,Dev.</span>
          </p>
          <p>How can i help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
            <i>
              <FaRegCompass />
            </i>
          </div>
          <div className="card">
            <p>Briefly summeriz this concept: urban road trip</p>
            <i>
              <IoBulbOutline />
            </i>
          </div>
          <div className="card">
            <p>Brainstrom team bonding activites for our work retreat</p>
            <i>
              <FaRegMessage />
            </i>
          </div>
          <div className="card">
            <p>Improve the readbilty of the following code</p>
            <i>
              <IoMdCode />
            </i>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter a prompt here"
            />
            <div>
              <i><MdOutlineAddPhotoAlternate /></i>
              <i><FaMicrophone /></i>
              <i><IoSendSharp /></i>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including About people, so double-check its response. your privacy and Gemini Apps
          </p>

        </div>
      </div>
    </div>
  );
};

export default Main;
