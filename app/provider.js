"use client";

import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({children}) {

  const {user} = useUser();

  
  useEffect(() => {

    //Executes the method only when User is ready.
    user&&CheckIsNewUser();

  },[user])

  const CheckIsNewUser = async() =>{
    //Check is User Alreadt Exists.
    const result = await db.select().from(USER_TABLE)
    .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

    console.log(result);

    //Add the User to the Database If User does'nt exists.
    if(result?.length == 0){
      const userResp = await db.insert(USER_TABLE).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,

      }).returning({id:USER_TABLE.id})

      console.log(userResp);
    }

  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider