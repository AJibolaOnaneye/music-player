import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice';
import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import Track from './Track'

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.lenght) dispatch(playPause(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if(isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if(!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
    }
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.ramdom() * currentSongs.length)))
    } else {
      dispatch(prevSong(currentIndex - 1))
    }
  }


  return (
    <div className='w-[17em] h-[24em] flex flex-col bg-emerald-600 text-white rounded-2xl'>
    <h4 className='pt-[2em] pb-[2em] mx-auto text-[1em] font-[600] '>Now Playing</h4>
    <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />



  <Seekbar 
    value={appTime}
    min="0"
    max={duration}
    onInput={(event) => setSeekTime(event.target.value)}
    setSeekTime={setSeekTime}
    appTime={appTime}
  />
  

    <div className='mt-6'>
        <Controls 
         isPlaying={isPlaying}
         isActive={isActive}
         repeat={repeat}
         setRepeat={setRepeat}
         shuffle={shuffle}
         setShuffle={setShuffle}
         currentSongs={currentSongs}
         handlePlayPause={handlePlayPause}
         handlePrevSong={handlePrevSong}
         handleNextSong={handleNextSong}
        />
         <Player
          activeSong={activeSong}
          // volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
    </div>
    </div>
  )
}

export default MusicPlayer