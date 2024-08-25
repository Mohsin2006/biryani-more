import React from 'react'
import "./Download.css"
import app_store from "../../assets/app_store.png"
import play_store from "../../assets/play_store.png"
import mobile from "../../assets/mobile.png"


const Download = () => {
  return (
    <div className='download d-flex '>
      <div className="download-left ">
        <h1>Get started with the mobile app!</h1>
        <p>GET Rs 150 OFF on every order on min. order amount of Rs 749 and above. Use Code BBK150. (TnC Apply)</p>
        <p>Now Also Earn Upto 10% Loyalty Cashback on Every Website and <br />APP Order</p>
        <p>DOWNLOAD NOW</p>
        <div className="icon d-flex mt-5">
            <img src={app_store} alt="" />
            <img src={play_store} alt="" />

        </div>
      </div>
      <div className="download-right ">
            <img src={mobile} alt="" className='w-100'/>
      </div>
    </div>
  )
}

export default Download
