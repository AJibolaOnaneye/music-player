import React from 'react'

const Track = ({ isPlaying, isActive, activeSong }) => (
    <div className='flex flex-col'>
          <img src={activeSong?.images?.coverart ? activeSong?.images?.coverart : "https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }  alt="cover art" className='h-[7em] w-[12em] rounded-xl mb-6 mx-auto object-fill' />
          <p className='text-[1em] font-[600] mx-auto'>{activeSong?.title ? activeSong?.title : 'No active Song'}</p>
    <p className='text-[.75em] font-[500] mx-auto mb-4'>{activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}</p>
    </div>

)

export default Track