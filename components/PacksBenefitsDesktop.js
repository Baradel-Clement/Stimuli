import React from 'react'
import Image from 'next/image'
import oui from '../public/assets/oui.svg';

const PacksBenefitsDesktop = () => {
  return (
    <>
      <div className='w-[265px] flex flex-col mt-[35px] relative'>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Diagnostic de préparation</p>
        </div>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Accès à un espace personnalisé</p>
        </div>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Accompagnement personnalisé</p>
        </div>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Coaching par un prof certifié</p>
        </div>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Séance de suivi de ta progression tous les 15 jours</p>
        </div>
        <div className='flex items-center mb-4'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Aide instantanée par tchat en illimité</p>
        </div>
        <div className='flex items-center'>
          <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
          <p className='text-[15px] font-semibold text-blueRose'>Examen Blanc sur toutes les matières avant l’exam final</p>
        </div>
      </div>
    </>
  )
}

export default PacksBenefitsDesktop
// 