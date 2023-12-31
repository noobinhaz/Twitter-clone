import React from 'react'
import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';

const SideBarLogo = () => {
    const router = useRouter();
  return (
    <div 
    onClick={() => router.push('/')}
    className='rounded-full h-14 w-14 p-4 flex item-center justify-center hover:bg-blue-300 cursor-pointer transition'>
        <BsTwitter size={20} color='white'/>
    </div>
  )
}

export default SideBarLogo