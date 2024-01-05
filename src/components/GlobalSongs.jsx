import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from "../redux/services/shazamCore"
import PlayPause from './PlayPause';



const GlobalCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (

    <div className='w-[12em] h-[14em] border-2 rounded-md flex flex-col'>
        <img src={song?.images?.coverart} alt={song?.title} className="rounded-2xl m-4 h-[8em] "  />
        <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
        <Link to={`/songs/${song.key}`}>
        <p className='text-[1em] text-black ml-2 font-[500]'>{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
        <p className='text-[.85em] text-gray-400 ml-2 my-2'>{song?.subtitle}</p>
        </Link>

    </div>
);

const GlobalSongs = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {data} = useGetTopChartsQuery();

    const globalPlays = data?.slice(0, 4);

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

  return (
    <div className='border-2 rounded-md border-gray-200 py-4 px-4 mx-12 max-w-[60rem] flex flex-col'>
        <div className='flex flex-row justify-between px-4 '>
            <span className='text-[1em] font-[600]'>Global Top 50</span>
            <span className='text-[.75em] font-[600]'>See all</span>
        </div>
        <div className='flex flex-row mt-4 justify-between px-4'>
        {globalPlays?.map((song,i) => (
            <GlobalCard 
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
            />
           ))}
        </div>
       

    </div>
  )
}


export default GlobalSongs