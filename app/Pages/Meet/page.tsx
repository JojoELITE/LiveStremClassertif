import React from 'react'

export default function page() {
  return (
    <div className='flex  p-5 gap-2'>
      <div className='flex flex-col items-center justify-center pt-12 gap-5' style={{width:"70%"}}>
        <div className=' h-full w-full border flex items-center justify-center rounded border-blue-400'></div>
        <div className=' flex gap-5'>
            {/* <div className='h-full w-full border rounded '></div> */}
            {/* <div className='h-full w-full border rounded '></div> */}
        </div>
      </div>
      <div style={{width:"30%"}}>
      <div className='grid grid-cols-1 pt-10 gap-5 '>
            <div className='h-40 w-full border rounded '></div>
            <div className='h-40 w-full border rounded '></div>
            <div className='h-40 w-full  border rounded '></div>
        </div>
      </div>
    </div>
  )
}
