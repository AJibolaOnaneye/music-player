import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillFileEarmarkPlusFill, BsFillFileEarmarkArrowUpFill } from "react-icons/bs"
import { MusicPlayer } from "./"
import { useGetTopChartsQuery } from "../redux/services/shazamCore"



const RightSidebar = () => {
    const { data } = useGetTopChartsQuery();
    console.log(data);
    const globalPlays = data?.slice(0, 6);
  return (
    <div className='flex flex-col flex-1 w-[22rem] p-12 px-10 border-l-2 border-gray-200'>
        <div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-[1em] font-[600] text-gray-500'>Notifications</p>
                <span className='text-[1.2em] font-[600] text-gray-300'>...</span>
            </div>
            <div className='flex flex-row gap-12 mt-6'>
                <div className='flex flex-row gap-4'>
                <div className='h-[3em] w-[3em] bg-slate-200 rounded-[.75em] flex justify-center items-center'><BsFillFileEarmarkPlusFill className='text-[1.4em] text-gray-500'/>  </div>
                <div> <p className='text-[.85em] font-[600]'>Playlist Added</p> <span className='text-[.75em] font-[500]'>106 Songs</span> </div>
                </div>
              
                <span className='tracking-wide text-[.85em] font-[600] text-gray-500'>2 Mins</span>
            </div>

     {/*  */}
            <div className='flex flex-row gap-12 mt-6'>
                <div className='flex flex-row gap-4'>
                <div className='h-[3em] w-[3em] bg-slate-200 rounded-[.75em] flex justify-center items-center'><BsFillFileEarmarkArrowUpFill className='text-[1.4em] text-gray-500'/>  </div>
                <div> <p className='text-[.85em] font-[600]'>Playlist Shared</p> <span className='text-[.75em] font-[500]'>To 32 Users</span> </div>
                </div>
              
                <span className='tracking-wide text-[.85em] font-[600] text-gray-500'>8 Hours</span>
            </div>
        </div>

{/* Top Artist */}
        <div className='mt-12'>
        <div className='flex flex-row justify-between items-center'>
                <p className='text-[1em] font-[600] text-gray-500'>Top Artists</p>
                <span className='text-[1.2em] font-[600] text-gray-300'>...</span>
            </div>
            <div className='mt-6 flex flex-wrap gap-[1.5em]'>
                {globalPlays?.map((artist) => (
                    <div key={artist?.key}>
                         {/* <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className='h-[4.5em] w-[4.5em] rounded-xl mb-2' />
                <span className='text-[.85em] text-gray-500 font-[600] '>{`${artist?.subtitle.slice(0,9)}`}</span>
              </Link> */}
                    </div>
                ))}
            </div>
        </div>

         {/* player */}
         <div className='mt-[4em]'>
            <MusicPlayer />
         </div>
   
       
    </div>
  )
}

export default RightSidebar