import React, { useState } from "react";
import "../styles/sidebar.css";
import { MdMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../context/Context";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const { onSent, prevoisPrompt, setRecentPrompt } = useContext(Context);
  // for recent data loading
  const loadPrompt= async(prompt)=>{
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  return (
    <div className="sidebar">
      <div className="top">
        <i onClick={() => setToggle((prev) => !prev)} className="menu">
          {" "}
          <MdMenu />
        </i>
        <div className="newchat">
          <i>
            <FaPlus />
          </i>
          {toggle ? <p>New Chat</p> : null}
        </div>
        {toggle ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            { prevoisPrompt.map((item, index) => {
              return (
                <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
                  <i>
                    <FaRegMessage />
                  </i>
                  <p>{item.slice(0,18)} ...</p>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <i>
            <FaRegQuestionCircle />
          </i>
          {toggle ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i>
            <MdOutlineHistory />
          </i>
          {toggle ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i>
            <IoSettings />
          </i>
          {toggle ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
