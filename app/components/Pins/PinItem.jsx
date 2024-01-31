import Image from 'next/image'
import React from 'react'
import UserTag from '../UserTag'
import { useRouter } from 'next/navigation'


function PinItem({pin}) {
  const router=useRouter();
    const user={
        name:pin?.userName,
        image:pin?.userImage,

    }
  return (
    <div className=" max-w-sm rounded overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105" onClick={()=>router.push("/pin/"+pin.id)} >
    <Image className="w-full h-full rounded-3xl object-cover" src={pin.image} width={500} height={500} alt={pin.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{pin.title}</div>
    </div>
    <div className="px-2 pt-1 pb-1">
      <span className="inline-block bg-transparent rounded-full px-3 text-sm font-semibold text-white "><UserTag user={user} /></span>
    </div>
  </div>

  )
}

export default PinItem