import React from 'react'
import {BsMedium,BsTwitter} from 'react-icons/bs'
import {SiGitbook} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'
import './social.css'

function Social() {
  return (
    <>
    <div className='social-media gap-x-1.5 sm:gap-x-2 md:gap-x-2.5 mt-[30px] md:mt-[50px] flex flex-wrap justify-center'>
      
            <a href="/" className='animate-left'> <BsMedium/></a>
            <a href="/" className='animate-two-left'> <SiGitbook/></a>
            <a href="/" className='animate-center'> <FaTelegramPlane/></a>
            <a href="/" className='animate-two-right bg-white social-media-twitter'> <BsTwitter color='black'/></a>
            <a href="/" className='animate-right'> <BsDiscord/></a>


    
    </div></>
  )
}

export default Social