import Image from 'next/image'
import React from 'react'

import calendrier from '../public/assets/calendrier.png';
import dossier from '../public/assets/dossier.png';
import horloge from '../public/assets/horloge.png';

const Tips = () => {
  return (
    <section className='Tips flex justify-around mt-[40px] md:mt-[57px]'>
      <div className='flex flex-col items-center w-[79px] md:w-[246px] md:leading-[30px]'>
        <Image src={calendrier} alt='calendrier icon' className='w-[29px] h-[27px] md:w-[91px] md:h-[86px] mb-3 md:mb-[32px]' />
        <p className='text-darkBlue text-[12px] md:text-[25px] font-medium text-center'>En te préparant <b className='text-darkBlue font-extrabold'>à l’avance</b></p>
      </div>
      <div className='flex flex-col items-center w-[79px] md:w-[246px] md:leading-[30px]'>
        <Image src={dossier} alt='dossier icon' className='w-[28px] h-[34px] md:w-[91px] md:h-[107px] mb-3 md:mb-[32px]' />
        <p className='text-darkBlue text-[12px] md:text-[25px] font-medium text-center'>En <b className='text-darkBlue font-extrabold'>gérant ton stress</b></p>
      </div>
      <div className='flex flex-col items-center w-[79px] md:w-[246px] md:leading-[30px]  '>
        <Image src={horloge} alt='horloge icon' className='w-[26px] h-[27px] md:w-[86px] md:h-[86px] mb-3 md:mb-[32px]' />
        <p className='text-darkBlue text-[12px] md:text-[25px] font-medium text-center'>En organisant <b className='text-darkBlue font-extrabold'>tes révisions</b></p>
      </div>
    </section>
  )
}

export default Tips