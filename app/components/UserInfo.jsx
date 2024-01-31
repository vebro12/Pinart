import Image from 'next/image';
import React from 'react'
import { signOut,useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

function UserInfo({userInfo}) {
    console.log(userInfo);
    const router=useRouter();
    const {data:session}=useSession()
    const onLogoutClick=()=>{
      signOut();
      router.push("/")
    }
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
        alt='userImage'
        width={100}
        height={100}
        className='rounded-full'/>

        <h2 className='text-[30px]
        font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <div className='flex gap-4'>
        <button className='bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out p-2 px-4 font-semibold mt-5 rounded-full shadow-md'>
  Share
</button>
        {session?.user.email== userInfo.email?  <button 
    className='bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out p-2 px-4 font-semibold mt-5 ml-3 rounded-full shadow-md'
    onClick={() => onLogoutClick()}
  >
    Logout
  </button>:null}
      </div>
    </div>
  )
}

export default UserInfo