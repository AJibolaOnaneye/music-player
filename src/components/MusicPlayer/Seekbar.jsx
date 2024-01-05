import React from 'react'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) => `${Math.floor(time/60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`

  return (
    <div className="hidden sm:flex flex-row justify-center items-center px-2">
        <p className='text-white'>{value === 0 ? '0:00' : getTime(value)}</p>
        <input 
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-32 h-1 mx-2 text-white rounded-lg"
        
        />
         <p className='text-white'>{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  )
}

export default Seekbar