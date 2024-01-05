import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Sidebar, StationMenu, Music, RightSidebar } from "./"

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Home")
    const [subCategory, setSubCategory] = useState("Music")

 

  return (
    <div className='flex flex-row'>
   
        <div className='flex flex-auto flex-col'>
            <StationMenu subCategory={subCategory} setSubCategory={setSubCategory} />
            <Music />
        </div>
    
    </div>
  )
}

export default Feed