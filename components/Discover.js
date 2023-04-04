import React from 'react';
import Image from 'next/image';

import calendrier2 from '../public/assets/calendrier2.png';
import certification from '../public/assets/certification.png';
import fusee from '../public/assets/fusee.png';
import tchat from '../public/assets/tchat.png';
import smile from '../public/assets/smile.svg';

const Discover = () => {
  return (
    <section className='Discover px-[48px] py-[18px] md:px-[0px] md:py-[104px] bg-[#0000ff09] mt-[36px] md:mt-[45px] flex items-center flex-col relative overflow-hidden'>
      <h2 className='font-medium bg-darkBlue rounded-full h-[23px] md:h-[65px] flex items-center justify-center text-[12px] md:text-[35px] w-[294px] md:w-[1050px] relative z-10'>Découvre les <b className='font-extrabold mx-1'>packs Stim’Brevet</b> et profite de</h2>
      <div className='flex mt-[23px] md:mt-[82px] w-[294px] md:w-[1050px] relative z-10'>
        <Image src={fusee} alt='horloge icon' className='max-w-[14px] max-h-[18px] md:max-w-[40px] md:max-h-[51px] mr-[12px] md:mr-[30px]' />
        <p className='text-[12px] md:text-[28px] font-medium text-darkBlue w-[253px] md:w-[1000px]'>Contenus qui te permettent de <b className='font-extrabold text-darkBlue'>réviser</b> et de <b className='font-extrabold text-darkBlue'>t’exercer grâce à l’un de nos 5 thèmes de passions</b> : manga, musique, jeux vidéos, sport et séries & films</p>
      </div>
      <div className='flex mt-[23px] md:mt-[67px] w-[294px] md:w-[1050px] relative z-10'>
        <Image src={tchat} alt='horloge icon' className='w-[16px] h-[18px] md:w-[40px] md:h-[40px] mr-[12px] md:mr-[30px]' />
        <p className='text-[12px] md:text-[28px] font-medium text-darkBlue w-[253px] md:w-[1000px]'><b className='font-extrabold text-darkBlue'>Programme de révisions personalisé</b></p>
      </div>
      <div className='flex mt-[23px] md:mt-[67px] w-[294px] md:w-[1050px] relative z-10'>
        <Image src={certification} alt='horloge icon' className='w-[14px] h-[18px] md:w-[40px] md:h-[40px] mr-[12px] md:mr-[30px]' />
        <p className='text-[12px] md:text-[28px] font-medium text-darkBlue w-[253px] md:w-[1000px]'>Coaching par un <b className='font-extrabold text-darkBlue'>prof certifié</b></p>
      </div>
      <div className='flex mt-[23px] md:mt-[67px] w-[294px] md:w-[1050px] relative z-10'>
        <Image src={calendrier2} alt='horloge icon' className='w-[16px] h-[14px] md:w-[40px] md:h-[40px] mr-[12px] md:mr-[30px]' />
        <p className='text-[12px] md:text-[28px] font-medium text-darkBlue w-[253px] md:w-[1000px]'><b className='font-extrabold text-darkBlue'>Aide instantanée</b> par tchat en accès <b className='font-extrabold text-darkBlue'>illimité avec des profs disponibles</b> entre 17h et 20h en semaine, et de 14h à 20h le mercredi et les week-ends</p>
      </div>

      <Image src={smile} alt='smile icon' className='absolute left-[-32px] top-[77px] md:left-[-118px] md:top-[168px] w-[75px] h-[75px] md:w-[263px] md:h-[263px] z-0' />
      <Image src={smile} alt='smile icon' className='absolute right-[-37px] top-[121px] md:right-[-112px] md:top-[18px] w-[134px] h-[134px] md:w-[379px] md:h-[379px] z-0 rotate-[-46deg]' />
    </section>
  )
}

export default Discover