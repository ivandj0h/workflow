import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const GoogleButton = ({text}) => {
  return (
    <button type='button' className='w-full flex items-center justify-center gap-1.5 border border-input py-2 px-6 rounded-lg text-sm font-medium cursor-pointer'>
        <FcGoogle className='text-[20px]' /> {text}
    </button>
  )
}

export default GoogleButton