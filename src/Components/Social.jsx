import React from 'react'
import { BsMedium, BsTwitter } from 'react-icons/bs'
import { SiGitbook } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import './social.css'

function Social() {
  return (
    <>
      <div className='social-media gap-x-1.5 sm:gap-x-2 md:gap-x-2.5 mt-[30px] md:mt-[50px] flex flex-wrap justify-center'>

        <a href="/" className='animate-left  group hover:bg-white'> <BsMedium className='group-hover:text-black' /></a>
        <a href="/" className='animate-two-left group hover:bg-white'> <SiGitbook className='group-hover:text-black' /></a>
        <a href="/" className='animate-center group hover:bg-white'> <FaTelegramPlane className='group-hover:text-black' /></a>
        <a href="/" className='animate-two-right group bg-white social-media-twitter hover:bg-white'> <BsTwitter className='group-hover:text-black' /></a>
        <a href="/" className='animate-right group hover:bg-white'> <BsDiscord className='group-hover:text-black' /></a>



      </div></>
  )
}

export default Social