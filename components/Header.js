import React from 'react'
import Image from 'next/image'

import webIcon from '../public/assets/internet.svg';
import telIcon from '../public/assets/tel.svg';
import logo from '../public/assets/logo.svg';
import crayon from '../public/assets/crayon.png';

const Header = () => {
  return (
    <section id='Home' className='Home'>
      <header className='flex justify-center items-end w-full bg-blue h-[137px] md:h-[377px] relative'>
        <div className='flex flex-col md:flex-row absolute justify-between items-center h-[40px] top-[18px] left-[14px] md:top-[39px] md:left-[53px]'>
          <a href='https://stimuli.education/' className='md:mr-[55px]'>
            <div className='flex justify-between items-center w-[15px] md:w-[259px]'>
              <Image src={webIcon} alt='web icon' className='w-[15px] h-[15px] md:w-[25px] md:h-[25px]' />
              <p className='hidden md:block text-[25px]'>Découvrir stimuli</p>
            </div>
          </a>
          <a href='tel:0689676602'>
            <div className='flex items-center justify-center md:justify-between w-[15px] h-[15px] md:w-[265px] md:h-[48px] bg-green rounded-full md:pl-[25px] md:pr-[27px]'>
              <Image src={telIcon} alt='tel Icon' className='w-[8.21px] h-[8.21px] md:w-[25px] md:h-[25px]' />
              <p className='hidden md:block text-[25px] text-blue'>0 805 03 55 00</p>
            </div>
          </a>
        </div>
        <div className='flex flex-col items-center mb-[11px] md:mb-[25px]'>
          <p className='text-white font-amsterdam text-[30px] md:text-[86px] leading-[22px] md:leading-[36px]'>Augmente tes chances de réussite</p>
          <p className='text-salmon font-gagalin text-[35px] md:text-[102px] relative'>AU BREVET<Image src={crayon} alt='crayon icon' className='w-[45px] h-[57px] md:w-[131px] md:h-[164px] absolute right-[-41px] md:right-[-118px] top-[-4px]' /></p>
        </div>
        <div className='absolute h-[45px] top-[11px] right-[13px] md:top-[17px] md:right-[46px]'>
          <Image src={logo} alt='logo icon' className='w-[68px] h-[28px] md:w-[166px] md:h-[68px]' />
        </div>
      </header>
    </section>
  )
}

export default Header