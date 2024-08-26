import React from 'react';
import { MenuItem } from './MenuItem';

export const MainMenu = () => {
  return (

    <div className=''>

      <div>
        <img alt='Dingo' src='/images/dingo-header.jpg' className='w-full'/>
      </div>

      <div className='flex flex-wrap justify-center mt-8'>
        <MenuItem imgSrc={'/images/yıyecek.png'} linkTo={'/ana-yemekler'} description={"Ana Yemekler"}/>
        <MenuItem imgSrc={'/images/ıcecek.png'} linkTo={'/soguk-icecekler'} description={"Soğuk İçecekler"}/>
        <MenuItem imgSrc={'/images/tost.png'} linkTo={'/tostlar'} description={"Tostlar & Dürümler"}/>
        <MenuItem imgSrc={'/images/cay.png'} linkTo={'/sicak-icecekler'} description={"Sıcak İçecekler"}/>
      </div>
      
    </div>
  )
}

