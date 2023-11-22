import React from 'react'
import "../Styles/MainContainer.css";
import { Banner } from './Banner';


import { FaUsers } from "react-icons/fa";
import { AudioList } from './AudioList';


function MainContainer() {
  return (
    <div className='mainContainer'>
        <Banner />

    <div className='menuList'>
    <ul>
      <li>
        <a href='#'>Popular</a>
      </li>
      <li>
        <a href='#'>Albums</a>
      </li>
      <li>
        <a href='#'>Songs</a>
      </li>
      <li>
        <a href='#'>Fans</a>
      </li>
      <li>
        <a href='#'>About</a>
      </li>
    </ul>
    <p><i><FaUsers /></i> 17.7M <samp>Followers</samp> </p>
    </div>
    <AudioList />
    </div>
  )
}

export default MainContainer