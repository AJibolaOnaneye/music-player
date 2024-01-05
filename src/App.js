import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Sidebar, RightSidebar , Feed, Searchbar } from "./components"
import SearchPage  from './pages/SearchPage'
import './App.css';


function App() {
  return (
    <div >

<div className='flex flex-row relative'>
        <div className='flex flex-initial h-fit '>
            <Sidebar  />
        </div>
        <div className='flex flex-1 flex-col overflow-y-scroll hide-scrollbar  '>
        <Searchbar />
        <Routes >
        <Route path='/' element={<Feed />} />
        <Route path='/search/:searchTerm' element={<SearchPage />} ></Route>
    
      </Routes>

        </div>
        <div className=''>
            <RightSidebar />
        </div>
    
    </div>

      
      
      
      {/* <Sidebar /> */}
      {/* <StationMenu /> */}

    </div>
  );
}

export default App;
