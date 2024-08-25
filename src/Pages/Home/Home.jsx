import React from 'react'
import chicken_biryani2 from "../../assets/chicken_biryani2.jpeg"
import "./Home.css"
import FanPage from '../../component/FanPage/FanPage'
import Download from '../../component/DownloadPage/Download'
const Home = () => {
  return (
    <div className='home'>
      <img src={chicken_biryani2} alt="" />
      <FanPage/>
      <Download/>
    </div>
  )
}

export default Home
