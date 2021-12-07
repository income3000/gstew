import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navy from './Navy'
import Home from './Home'
import Army from './Army'
function Navbar() {
    return (
        <div className="navbar navbar-dark sticky-top bg-primary justify-content-center">
            <ul className="nav justify-content-center">
            <li className="nav-item ">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link active" aria-current="page" href="/users/new">New User</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/users">Users</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/army">THOR</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/navy">HULK</a>

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
