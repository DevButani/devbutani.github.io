import { Outlet, Link } from "react-router-dom";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './Layout.css';
import logo from './images/logo.jpg';

function Layout() {
  const [active, setactive] = React.useState(1)
  const hidenav = () => {document.getElementById('main-nav').classList.remove("show")}
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <button className="navbar-brand justify-start" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
            <img className="logo" src={logo} alt="logo"/>
          </button>

          <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link onClick={() => {setactive(1); hidenav()}} className={(active===1)? "active":""} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {setactive(2); hidenav()}} className={(active===2)? "active":""} to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {setactive(3); hidenav()}} className={(active===3)? "active":""} to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {setactive(4); hidenav()}} className={(active===4)? "active":""} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
