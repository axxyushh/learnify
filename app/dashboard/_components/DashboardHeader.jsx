import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-md flex justify-end'>
      <UserButton/>
    </div>
  )
}

export default DashboardHeader