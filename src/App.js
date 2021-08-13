import React from 'react'
import HeaderContainer from './Components/HeaderContainer'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'
import Content from './Components/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'


export default function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <SideBar />
        <Content/>
        <Footer />
      </div>
    </Router>
  )
}