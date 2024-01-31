import React from 'react'
import UserTag from '../UserTag'

function PinInfo({pinDetail}) {
  const user={
    name:pinDetail.userName,
    email:pinDetail.email,
    image:pinDetail.userImage
  }
  return (
    <div>
      <h2 className='text-[30px] font-bold mb-10'>{pinDetail.title}</h2>
      <UserTag user={user} />
      <h2 className='mt-10'>{pinDetail.desc}</h2>
      <button className='bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out p-2 px-4 font-semibold mt-5 ml-3 rounded-full shadow-md'
      onClick={()=>window.open(pinDetail.link)}>Open Url</button>
    </div>
  
  )
}

export default PinInfo