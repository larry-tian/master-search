import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Loading from './pages/Loading'
import Result from './pages/Result'
import Profile from './pages/Profile'
import About from './pages/About'

import './css/App.css'

import logo from './img/mw-logo.png'



const App = () => {
  return (
      <Router>
        <div className="overall-layout">
          <div className="nav">
            <img src={logo} className="logo"/>
            <hr className="nav-line"/>
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/loading" element={<Loading/>}/>
            <Route exact path="/result" element={<Result/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>

          {/* Import Bootstrap */}
          <link 
            rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossOrigin="anonymous" 
          />
      </Router>
  );
}

export default App;