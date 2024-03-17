import React, { useState, useContext } from "react";
import "../styles/main.css";
import { FaRegCompass } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src="assets/user.jpg" alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <i>
                  <FaRegCompass />
                </i>
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban road trip</p>
                <i>
                  <IoBulbOutline />
                </i>
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <i>
                  <FaRegMessage />
                </i>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <i>
                  <IoMdCode />
                </i>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="assets/user.jpg" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="vite.svg" alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter a prompt here"
            />
            <div>
              <i>
                <MdOutlineAddPhotoAlternate />
              </i>
              <i>
                <FaMicrophone />
              </i>
              <i onClick={() => onSent()}>
                <IoSendSharp />
              </i>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its response. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
