import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({repeat, setRepeat, shuffle, setShuffle, isPlaying, currentSongs, handlePrevSong, handlePlayPause, handleNextSong}) => (

    <div className="flex items-center justify-around w-64 ">
        <BsArrowRepeat  color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="cursor-pointer" />
        {currentSongs?.length && <MdSkipPrevious  onClick={handlePrevSong} /> }
        {isPlaying? (<BsFillPauseFill onClick={handlePlayPause} className="cursor-pointer" />) : (<BsFillPlayFill onClick={handlePlayPause}  className="cursor-pointer"/>) }
        
        {currentSongs?.length &&  <MdSkipNext className="cursor-pointer" onClick={handleNextSong} />}
       
        <BsShuffle color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="cursor-pointer" />
        </div>

)

export default Controls