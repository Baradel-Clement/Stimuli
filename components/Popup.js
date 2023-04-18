import React from 'react'
import Image from 'next/image';
import popupImg from '../public/assets/popup.jpg'
import * as analytics from '../lib/segment-analytics'

const Popup = ({ setDisplayPopup, setLockPopup }) => {
  console.log('isDeployed');
  return (
    <>
      <div className='w-[100vw] h-[100vh] fixed z-20 top-0 bg-[#0000007a]' onClick={() => {
        setDisplayPopup(false)
        setLockPopup(true)
      }} />
      {/* <div className='w-[325px] h-[325px] bg-blue fixed top-[50%] left-[50%] z-30 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col justify-end text-center'>
        <Image className='absolute' />
        <p className='text-nav font-medium text-center'>Vous souhaitez <span className='text-blue h-[30px] bg-green rounded-md font-extrabold px-2 py-[1px]'>en savoir plus</span> sur les <br /><b className='font-extrabold'>Packs <i>Stim'Brevet</i></b> ?</p>
        <p className='italic text-[12px] my-3'>Prenez dès maintenant un rendez-vous téléphonique<br />avec un membre de notre équipe</p>
        <button className='bg-salmon px-4 py-2 rounded-xl font-extrabold tracking-M mb-4'>PRENDRE RENDEZ-VOUS</button>
      </div> */}
      <div className='w-[80%] max-w-[500px] fixed top-[50%] left-[50%] z-30 -translate-x-1/2 -translate-y-1/2'>
        <a href='https://rebrand.ly/popupstimuli' target='_blank' onClick={() => {
            analytics.event('Rendez-Vous')
        }}>
            <Image src={popupImg} className='w-full' alt='popup rendez vous' priority />
        </a>
        <button className=' bg-transparent absolute top-0 right-0 w-[50px] h-[50px]' onClick={() => {
          setDisplayPopup(false)
          setLockPopup(true)
        }} />
      </div>
    </>
  )
}

export default Popup
