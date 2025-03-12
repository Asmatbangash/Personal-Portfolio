import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/developer.gif'
import Socailicon from '../SocailIcon.jsx/Socailicon';
import Linkdin from '../SocailIcon.jsx/Linkdin';
import GitHub from '../SocailIcon.jsx/GitHub';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto mb-2 mb-md-0">
      <li className="nav-item">
            <Link className="nav-link navItems" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navItems" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navItems" aria-current="page" to="/skill">Skills</Link>
          </li>
    
          <li className="nav-item">
            <Link className="nav-link navItems" aria-current="page" to="/project">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navItems" aria-current="page" to="/contact">contect</Link>
          </li>
      </ul>
      <Linkdin />
      <GitHub />
    </div>
  </div>
</nav>
  )
}

export default Navbar