import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navy from './Navy'
import Home from './Home'
import Army from './Army'
function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/users/new">New User</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/users">Users</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/army">Army</a>
  </li>
  <li className="nav-item">
    
  </li>
</ul>
<Router>
<Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/army' element={<Army/>} />
      <Route path='/navy' element={<Navy/>} />
</Routes>
</Router>
        </div>
    )
}

export default Navbar
