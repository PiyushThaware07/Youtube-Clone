import React, { useState } from 'react'
// Icons
import { IoMdMenu } from "react-icons/io";
import { BiSearch, BiVideoPlus } from "react-icons/bi";
import { CgBell } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
// Logo
import ytBlack from '../assets/logos/yt-black.png';

export default function Navbar(props) {
  const [searchBtn, setSearchBtn] = useState({ display: "none", borderStart: "", paddingStart: "4" });
  return (
    <>
      <nav className='d-flex h-100 align-items-center'>
        {/* Left */}
        <div className="col-md-2 d-flex align-items-center h-100">
          <div className="menu ms-3 ms-md-4 me-2 me-md-3" onClick={() => props.toggleSidebar()}>
            <IoMdMenu size={26} />
          </div>
          <div className="logo d-none d-md-block">
            <img src={ytBlack} alt="" style={{ height: "35px" }} />
          </div>
          <div className="logo d-block d-md-none">
            <img src={ytBlack} alt="" style={{ height: "29px" }} />
          </div>
        </div>
        {/* Middle */}
        <div className="col-md-8 d-md-flex d-none justify-content-center align-items-center h-100">
          <form action="" className='form-control rounded-0 p-0 m-0 d-flex justify-content-center bg-transparent border-0'>
            <button className={`px-3 py-2 bg-white d-${searchBtn.display}`} style={{ border: "1.3px solid lightgray", borderRight: "0px", color: "gray" }}><BiSearch size={19} /></button>
            <input className={`col-md-7 ps-${searchBtn.paddingStart} pe-5 py-2 rounded-0 border-start-${searchBtn.borderStart}`} type="text" placeholder='Search' style={{ outline: "none", border: "1.3px solid lightgray" }} onFocus={() => setSearchBtn({ display: "visible", borderStart: "0", paddingStart: "0" })} />
            <button className='px-3 py-2' style={{ border: "1.3px solid lightgray", borderLeft: "0px" }}><BiSearch size={19} /></button>
            <button type='button' className='border-0 rounded-circle d-flex justify-content-center align-items-center ms-3' style={{ width: "40px", height: "40px" }}><MdKeyboardVoice size={21} /></button>
          </form>
        </div>
        {/* Right */}
        <div className="col-md-2 h-100 ms-auto ms-md-0 d-flex justify-content-center align-items-center h-100">
          <ul className='list-unstyled d-flex h-100 align-items-center justify-content-end mb-0 mt-0'>
            <li className='me-4 ms-2 d-none d-md-block'><BiVideoPlus size={26} /></li>
            <li className='me-1 me-md-4 ms-2 d-block d-md-none' onClick={() => alert("search Clicked")}><BiSearch size={26} /></li>
            <li className='me-3 me-md-4 ms-2' style={{ position: "relative" }}><CgBell size={26} /> <span className='bg-danger text-light px-1 rounded-5' style={{ fontSize: "11px", fontWeight: "semibold", position: "absolute", top: "1px", left: "14px" }}>9+</span></li>
            <li className='me-3 me-md-5 ms-2'><FaUserCircle size={35} /></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
