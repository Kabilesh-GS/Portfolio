import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Mainapp() {
  return (
    <BrowserRouter>
        <h1 className=''>hello</h1>
        <Routes>
          <Route path='/health' element={<p>All good</p>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Mainapp;