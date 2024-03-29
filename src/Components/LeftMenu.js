import React from 'react'
import "../Styles/LeftMenu.css";


import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import {BiSearchAlt} from 'react-icons/bi';
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";



function LeftMenu() {
  return (
   
         <div className='LeftMenu'>
            <div className='logoContainer'>
            <i><FaSpotify/></i>
            <h2> Avetisyan </h2>
            <i><FaEllipsisH /></i>
         
          </div>
          <div className='searchBox'>
            <input type='text' placeholder='Search...'/>
            < i className='searchIcon'/>
            <i><BiSearchAlt/></i>
          </div>
          <Menu title={"Menu"} listObject={MenuList} />

          <MenuPlayList />

          <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
       </div>
 
  )
}

export default LeftMenu