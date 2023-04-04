import React from 'react';
import Image from 'next/image';

import facebook from '../public/assets/facebook.svg';
import instagram from '../public/assets/instagram.svg';
import linkedin from '../public/assets/linkedin.svg';
import tiktok from '../public/assets/tiktok.svg';

const Footer = () => {
  return (
    <footer className='w-full h-[51px] md:h-[125px] bg-blue flex justify-between items-center px-[7%]'>
      <a className='text-[10px] md:text-[15px]' href='https://stimuli.education/politique-de-confidentialite/' target='_blank'>Mentions légales</a>
      <div className='w-[106px] md:w-[181px] flex justify-between items-center'>
        <a className='w-[17.28px] h-[17.28px] md:w-[30px] md:h-[30px] rounded-full' href='https://www.facebook.com/people/Stimulieducation/100083303734195/' target='_blank'>
          <Image src={facebook} alt='facebook' className='w-full rounded-full' />
        </a>
        <a className='w-[17.28px] h-[17.28px] md:w-[30px] md:h-[30px] rounded-full' href='https://www.instagram.com/stimul.i/' target='_blank'>
          <Image src={instagram} alt='instagram' className='w-full rounded-full' />
        </a>
        <a className='w-[17.28px] h-[17.28px] md:w-[30px] md:h-[30px] rounded-full' href='https://www.linkedin.com/company/stimul-i/' target='_blank'>
          <Image src={linkedin} alt='linkedin' className='w-full rounded-full' />
        </a>
        <a className='w-[17.28px] h-[17.28px] md:w-[30px] md:h-[30px] rounded-full' href='https://www.tiktok.com/@stimuli.education/' target='_blank'>
          <Image src={tiktok} alt='tiktok' className='w-full rounded-full' />
        </a>
      </div>
    </footer>
  )
}

export default Footer