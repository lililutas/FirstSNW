import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'
import Content from './Components/Content'
import './App.css'

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </div>
  )
}
