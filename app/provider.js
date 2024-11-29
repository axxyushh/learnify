"use client";

import { useUser } from '@clerk/nextjs'
import axios from 'axios';
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
    // const result = await db.select().from(USER_TABLE)
    // .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

    // //Add the User to the Database If User does'nt exists.
    // if(result?.length == 0){
    //   const userResp = await db.insert(USER_TABLE).values({
    //     name: user?.fullName,
    //     email: user?.primaryEmailAddress?.emailAddress,

    //   }).returning({id:USER_TABLE.id})
    // }

    const resp = await axios.post('/api/create-user',{user:user});
    console.log(resp.data);

  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider