import React from 'react'

const MightLike = () => {
  return (
    <div className='border-2 rounded-md border-gray-200 py-4 px-4 mx-12 max-w-[60rem] flex flex-col'>
    <div className='flex flex-row justify-between px-4 '>
        <span className='text-[1em] font-[600]'>Songs You Might Like</span>
        <span className='text-[.75em] font-[600]'>See all</span>
    </div>
    <div className='flex flex-row mt-4 justify-between px-4'>
        <div className='w-[12em] h-[14em] border-2 rounded-md flex flex-col'>
            <img src="https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-2xl m-4 h-[8em] " alt=''  />
            <p className='text-[1em] text-black ml-2 font-[500]'>song title</p>
            <p className='text-[.85em] text-gray-400 ml-2 my-2'>Artist</p>
        </div>
        {/* 2nd */}
        <div className='w-[12em] h-[14em] border-2 rounded-md flex flex-col'>
            <img src="https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-2xl m-4 h-[8em] " alt=''  />
            <p className='text-[1em] text-black ml-2 font-[500]'>song title</p>
            <p className='text-[.85em] text-gray-400 ml-2 my-2'>Artist</p>
        </div>
        {/* 3rd */}
        <div className='w-[12em] h-[14em] border-2 rounded-md flex flex-col'>
            <img src="https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-2xl m-4 h-[8em] " alt=''  />
            <p className='text-[1em] text-black ml-2 font-[500]'>song title</p>
            <p className='text-[.85em] text-gray-400 ml-2 my-2'>Artist</p>
        </div>
        {/* 4th */}
        <div className='w-[12em] h-[14em] border-2 rounded-md flex flex-col'>
            <img src="https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="rounded-2xl m-4 h-[8em] " alt=''  />
            <p className='text-[1em] text-black ml-2 font-[500]'>song title</p>
            <p className='text-[.85em] text-gray-400 ml-2 my-2'>Artist</p>
        </div>
    </div>
</div>
  )
}

export default MightLike