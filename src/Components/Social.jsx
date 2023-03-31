import React from 'react'
import {BsMedium,BsTwitter} from 'react-icons/bs'
import {SiGitbook} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'
function Social() {
  return (
    <>
    <div className='social-media flex flex-wrap justify-center'>
      
            <a href="/"> <BsMedium/></a>
            <a href="/"> <SiGitbook/></a>
            <a href="/"> <FaTelegramPlane/></a>
            <a href="/"> <BsTwitter/></a>
            <a href="/"> <BsDiscord/></a>


    
    </div></>
  )
}

export default Social