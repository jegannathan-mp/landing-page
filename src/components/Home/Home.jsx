import React from 'react'
import './Home.css'
import AppDownload from '../AppDownload/AppDownload'
import Header from '../Header/Header'
import Speciality from '../Speciality/Speciality'
import CarBanner from '../CarBanner/CarBanner'
import BrakeDisplay from '../BrakeDisplay/BrakeDisplay'
import TireDisplay from '../TireDisplay/TireDisplay'

const Home = () => {
  return (
    <div>
        <Header/>
        <Speciality/>
        <div className='home_tb' id='explore-menu'>
          <h2 className='home_h2'>Top Products</h2>
          <TireDisplay/>
          <BrakeDisplay/>
        </div>
        <CarBanner/>
        <AppDownload/>
    </div>
  )
}

export default Home