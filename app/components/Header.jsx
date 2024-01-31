
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { HiSearch,HiBell,HiChat } from "react-icons/hi";
import app from './../Shared/firebaseConfig'
import { useRouter } from 'next/navigation';

function Header() {
  const { data: session } = useSession();
  const router=useRouter();
  const db = getFirestore(app);

  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo=async()=>{
    if(session?.user)
    {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }

  const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn()
    }
  }

  
  return (
    <div className='flex justify-between 
     gap-3 md:gap-2 items-center p-6 '>
        <Image src='/P__4_-removebg-preview.png' alt='logo'
        width={80} height={80} onClick={()=>router.push('/')}
        className='hover:bg-red-800 p-2
        rounded-full cursor-pointer'/>
          <div className='flex gap-4 space-between'>
          <button 
        className='hover:shadow-lg hover:shadow-white  text-white py-2 px-4 rounded-full text-sm md:text-lg hover:bg-gray-800 transition-colors'
        style={{ backgroundImage: 'linear-gradient(to left, #000000, #434343)' }} 
        onClick={() => router.push('/')}>
        Home
    </button>
        <button 
        className='hover:shadow-lg hover:shadow-blue-500 text-white py-3 px-5 rounded-full text-sm md:text-lg transition-colors'
        style={{ 
            backgroundImage: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
            hover: {
                backgroundImage: 'linear-gradient(to right, #2b4da7, #4c91f9)'
            }
        }} 
        onClick={onCreateClick}>
        Create
    </button>
       
      {session?.user?  
      <Image src={session.user.image} 
       onClick={()=>router.push('/'+session.user.email)}
      alt='user-image' width={60} height={60}
        className='hover:bg-gray-300 p-2
        rounded-full cursor-pointer'/>:

<button 
    className='text-white py-2 px-4 rounded-full text-sm md:text-lg hover:bg-cyan-700 transition-colors hover:shadow-lg hover:shadow-red-500'
    style={{ backgroundImage: 'linear-gradient(to right, #e11d48, #ef4444)' }}
    onClick={() => signIn()}>
    Login
</button>}
</div>



    </div>
  )
}

export default Header