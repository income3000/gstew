import React from 'react'
import Army from './Army'
import Navy from './Navy'
import Navbar from './Navbar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <div>
       <Navbar />
   <Router>
   <div className="grid">
       <Link to='/army'>Army</Link>
       <br/>
       <Link to='/navy'>Navy</Link>
       <br />
       <Link to='/'>Home</Link>
    </div>
 
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/army' element={<Army/>} />
      <Route path='/navy' element={<Navy/>} />
      
      </Routes>
      </Router>
        </div>
    )
}
