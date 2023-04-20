import React from 'react';
import Image from 'next/image';

import oui from '../public/assets/oui.svg';
import plus from '../public/assets/plus.png';
import stimuliWhite from '../public/assets/stimuli_white.png';

const Benefits = () => {
  return (
    <section className='Benefits relative mt-[38px] md:hidden'>
      <h2 className='text-darkBlue font-medium text-[17px] m-auto w-[304px]'>Les avantages des <b className='font-extrabold text-darkBlue'>packs Stim’Brevet</b></h2>
      <div className='flex flex-col mt-[32px]'>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Diagnostic de préparation</p>
        </div>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Accès à un espace personnalisé</p>
        </div>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Accompagnement personnalisé</p>
        </div>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Coaching par un prof certifié</p>
        </div>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Séance de suivi de ta progression tous les 15j</p>
        </div>
        <div className='flex items-center w-[332px] m-auto mb-4'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Aide instantanée par tchat en illimité</p>
        </div>
        <div className='flex items-center w-[332px] m-auto'>
          <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
          <p className='text-[12px] font-semibold text-darkBlue'>Examen Blanc sur toutes les matières avant l’exam final</p>
        </div>
      </div>
      <div className='w-[100%] h-[100px] py-3 bg-blue absolute bottom-[-139px] left-0 flex flex-col items-center justify-between overflow-hidden'>
        <Image src={plus} alt='plus icon' className='w-[20px]' />
        <p className='font-medium text-shM flex justify-between items-center w-[293px]'>{`Accès à l'intégralité de l'application`}
          <Image src={stimuliWhite} alt='plus icon' className='w-[56px]' /></p>
        <p className='font-medium text-shM'>pour tes devoirs et réviser tes cours plus facilement !</p>
      </div>
    </section>
  )
}

export default Benefits