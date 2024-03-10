import React from 'react'
import '../styles/main.css'
import { FaRegCompass } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src="assets/user.jpg" alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello ,Dev.</span></p>
          <p>How can i help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
<i><FaRegCompass /></i>
          </div>
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
<i><IoBulbOutline /></i>
          </div>
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
<i><FaRegMessage /></i>
          </div>
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
<i><IoMdCode /></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
