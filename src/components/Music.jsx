import React from 'react'
import { GlobalSongs, MightLike, RecentlyPlayed } from "./"

const Music = () => {
  return (
    <div>
        <GlobalSongs />
        <div className='my-8' ></div>
        <MightLike />
        <div className='my-8' ></div>
        <RecentlyPlayed />
        <div className='my-20' ></div>
    </div>
  )
}

export default Music