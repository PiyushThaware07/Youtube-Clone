import React from 'react'
// Icons
import { GoHomeFill } from "react-icons/go";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiMusicNotes } from "react-icons/pi";
import { GoHistory } from "react-icons/go";


export default function Sidebar() {
  return (
    <>
      <div className="pt-2">
        <ul className='list-unstyled'>
          <li className='ms-4 mb-4 mt-2'>
            <span><GoHomeFill size={24} /></span> <br />
            <span style={{ fontSize: "10px" }}>Home</span>
          </li>
          <li className='ms-4 my-4'>
            <span><MdOutlineVideoLibrary size={24} /></span> <br />
            <span style={{ fontSize: "10px" }}>Library</span>
          </li>
          <li className='ms-4 my-4'>
            <span><PiMusicNotes size={24} /></span> <br />
            <span style={{ fontSize: "10px" }}>Music</span>
          </li>
          <li className='ms-4 my-4'>
            <span><GoHistory size={26} /></span> <br />
            <span style={{ fontSize: "10px" }}>History</span>
          </li>
        </ul>
      </div>
    </>
  )
}
