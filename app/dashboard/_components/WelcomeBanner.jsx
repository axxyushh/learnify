"use client";

import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    const {user} = useUser();
  return (
    <div className="p-5 w-full text-gray-600 rounded-lg flex items-center gap-6" style={{ background: 'linear-gradient(135deg, #b71c1c, #f0f0b6, #ff8c00)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Image src={'/laptop.png'} alt='laptop' width={100} height={100}/>
        <div>
            <h2 className='font-bold text-3xl'>Hola!! {user?.fullName}</h2>
            <p>Welcome back! Let’s dive in and explore new courses for your next big step.</p>
        </div>
    </div>
  )
}

export default WelcomeBanner