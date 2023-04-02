import React from 'react';
import Image from 'next/image';

import PacksBenefitsDesktop from './PacksBenefitsDesktop.js';

import pack1 from '../public/assets/pack1.png';
import pack2 from '../public/assets/pack2.png';
import pack3 from '../public/assets/pack3.png';
import oui from '../public/assets/oui.svg';
import non from '../public/assets/marque-de-croix.svg';

const Packs = () => {
  return (
    <>
      {/* Mobile */}
      {/* Mobile */}
      <section className='Packs flex flex-col w-[285px] m-auto mt-[30px] md:hidden'>
        <div className='flex flex-col items-center w-full mb-[56px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1ZQqv17jIg2ivOSczfrLf7KpC9nSUjKGjpNRQ0ItOmTWayLZW9iScRdjj#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nM2pAMWJoMmpyYnF8MnBiNz1kJ3gl' target='_blank'>
            <Image src={pack1} alt='pack integrale' className='w-full' />
          </a>
          <p className='text-blueRose text-[10px] font-extrabold mt-[22px] mb-[18px]'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[221px] flex flex-col items-start justify-start'>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Français</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Histoire - Géographie</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Mathématiques</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Sciences de la Vie et de la Terre</p>
            </div>
            <div className='flex items-center'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Physique Chimie</p>
            </div>
          </div>
          <a className='mt-[35px]' href='https://checkout.stripe.com/c/pay/cs_live_a1ZQqv17jIg2ivOSczfrLf7KpC9nSUjKGjpNRQ0ItOmTWayLZW9iScRdjj#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nM2pAMWJoMmpyYnF8MnBiNz1kJ3gl' target='_blank'>
            <button type='button' className='w-[114px] h-[25px] flex items-center justify-center text-salmon text-[11px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
        <div className='flex flex-col items-center w-full mb-[56px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1kwSGAZbCHd66xYfbxxxlzaRBa5KUlrSzwCTb2w649cZQpkxmpyAktYv2#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nY19gYFM1Nj1iZDBkYjVIY1xcJ3gl' target='_blank'>
            <Image src={pack2} alt='pack scientifique' className='w-full' />
          </a>
          <p className='text-blueRose text-[10px] font-extrabold mt-[22px] mb-[18px]'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[221px] flex flex-col items-start justify-start'>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Mathématiques</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Sciences de la Vie et de la Terre</p>
            </div>
            <div className='flex items-center'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Physique Chimie</p>
            </div>
          </div>
          <a className='mt-[35px]' href='https://checkout.stripe.com/c/pay/cs_live_a1kwSGAZbCHd66xYfbxxxlzaRBa5KUlrSzwCTb2w649cZQpkxmpyAktYv2#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nY19gYFM1Nj1iZDBkYjVIY1xcJ3gl' target='_blank'>
            <button type='button' className='w-[114px] h-[25px] flex items-center justify-center text-salmon text-[11px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
        <div className='flex flex-col items-center w-full mb-[56px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1xcTG0hiF98ijGX87dmKN1oV3rixo1m0t0qvd0NlfOuBQLzt3ihWltpow#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nNz1qY18xMGJqM1ZcNDBWMnZxJ3gl' target='_blank'>
            <Image src={pack3} alt='pack litteraires' className='w-full' />
          </a>
          <p className='text-blueRose text-[10px] font-extrabold mt-[22px] mb-[18px]'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[221px] flex flex-col items-start justify-start'>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Français</p>
            </div>
            <div className='flex items-center'>
              <Image src={oui} alt='oui icon' className='w-[10px] h-[10px] mr-[8px]' />
              <p className='text-[10px] font-semibold text-blueRose'>Histoire - Géographie</p>
            </div>
          </div>
          <a className='mt-[35px]' href='https://checkout.stripe.com/c/pay/cs_live_a1xcTG0hiF98ijGX87dmKN1oV3rixo1m0t0qvd0NlfOuBQLzt3ihWltpow#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nNz1qY18xMGJqM1ZcNDBWMnZxJ3gl' target='_blank'>
            <button type='button' className='w-[114px] h-[25px] flex items-center justify-center text-salmon text-[11px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
      </section>
      {/* Desktop */}
      {/* Desktop */}
      <section className='Packs max-md:hidden w-[990px] mx-auto flex justify-between mt-[42px] mb-[65px]'>
        <div className='flex flex-col items-center w-[324px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1ZQqv17jIg2ivOSczfrLf7KpC9nSUjKGjpNRQ0ItOmTWayLZW9iScRdjj#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nM2pAMWJoMmpyYnF8MnBiNz1kJ3gl' target='_blank'>
            <Image src={pack1} alt='pack integrale' className='w-full' />
          </a>
          <PacksBenefitsDesktop />
          <p className='text-[15px] text-blueRose font-extrabold w-[210px] mt-10 mb-7'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[265px] flex flex-col'>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Français</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Histoire - Géographie</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Mathématiques</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Sciences de la Vie et de la Terre</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Physique Chimie</p>
            </div>
          </div>
          <a className='mt-[50px]' href='https://checkout.stripe.com/c/pay/cs_live_a1ZQqv17jIg2ivOSczfrLf7KpC9nSUjKGjpNRQ0ItOmTWayLZW9iScRdjj#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nM2pAMWJoMmpyYnF8MnBiNz1kJ3gl' target='_blank'>
            <button type='button' className='w-[194px] h-[40px] flex items-center justify-center text-salmon text-[15px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
        <div className='flex flex-col items-center w-[324px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1kwSGAZbCHd66xYfbxxxlzaRBa5KUlrSzwCTb2w649cZQpkxmpyAktYv2#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nY19gYFM1Nj1iZDBkYjVIY1xcJ3gl' target='_blank'>
            <Image src={pack2} alt='pack integrale' className='w-full' />
          </a>
          <PacksBenefitsDesktop />
          <p className='text-[15px] text-blueRose font-extrabold w-[210px] mt-10 mb-7'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[265px] flex flex-col'>
            <div className='flex items-center mb-4'>
              <Image src={non} alt='non icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Français</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={non} alt='non icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Histoire - Géographie</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Mathématiques</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Sciences de la Vie et de la Terre</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Physique Chimie</p>
            </div>
          </div>
          <a className='mt-[50px]' href='https://checkout.stripe.com/c/pay/cs_live_a1kwSGAZbCHd66xYfbxxxlzaRBa5KUlrSzwCTb2w649cZQpkxmpyAktYv2#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nY19gYFM1Nj1iZDBkYjVIY1xcJ3gl' target='_blank'>
            <button type='button' className='w-[194px] h-[40px] flex items-center justify-center text-salmon text-[15px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
        <div className='flex flex-col items-center w-[324px]'>
          <a href='https://checkout.stripe.com/c/pay/cs_live_a1xcTG0hiF98ijGX87dmKN1oV3rixo1m0t0qvd0NlfOuBQLzt3ihWltpow#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nNz1qY18xMGJqM1ZcNDBWMnZxJ3gl' target='_blank'>
            <Image src={pack3} alt='pack integrale' className='w-full' />
          </a>
          <PacksBenefitsDesktop />
          <p className='text-[15px] text-blueRose font-extrabold w-[210px] mt-10 mb-7'>MATIÈRES COMPRISES DANS CE PACK :</p>
          <div className='w-[265px] flex flex-col'>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Français</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={oui} alt='oui icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Histoire - Géographie</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={non} alt='non icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Mathématiques</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={non} alt='non icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Sciences de la Vie et de la Terre</p>
            </div>
            <div className='flex items-center mb-4'>
              <Image src={non} alt='non icon' className='w-[15px] h-[15px] mr-[12px]' />
              <p className='text-[15px] font-semibold text-blueRose'>Physique Chimie</p>
            </div>
          </div>
          <a className='mt-[50px]' href='https://checkout.stripe.com/c/pay/cs_live_a1xcTG0hiF98ijGX87dmKN1oV3rixo1m0t0qvd0NlfOuBQLzt3ihWltpow#fidkdWxOYHwnPyd1blppbHNgWjA0SHVGUG5HdDJJR1x0X3JzdHBKNE5jQk9qMnFgcTdsX3FAbzNcQ0Q8Y1BxTXw3cXJLMmRMMkFxMEJLSFJHQUxtf3xHa3QzSkhMcVVKb09cY1JBMDFLPTV8NTVDY2dydzI9fScpJ3VpbGtuQH11anZgYUxhJz8nNz1qY18xMGJqM1ZcNDBWMnZxJ3gl' target='_blank'>
            <button type='button' className='w-[194px] h-[40px] flex items-center justify-center text-salmon text-[15px] font-black bg-lightGrey rounded-full'>Je choisis</button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Packs