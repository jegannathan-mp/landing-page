import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/front-end-assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download' >
        <p>For better Experience Download <br /> JACK APP</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload