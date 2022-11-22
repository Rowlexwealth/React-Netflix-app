import React from 'react';
import SavedShow from '../Components/SavedShow';


const Account = () => {

  return (
    <>
      <div className='w-full text-white'>
      <img
        className='w-full h-[400px] object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d087US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='text-3xl md:5xl font-bold'>My Shows</div>
      </div>
      <SavedShow/>
    </>
  )
}

export default Account