import React from 'react'
import "./back.css"
import { Parallax } from 'react-parallax'
import Bg1 from './assets/bg1.jpg'
import Bg2 from './assets/bg-2.jpg'
import Bg3 from './assets/bg-3.jpg'




function BackGroundElement() {
  return (
    <div>
      <Parallax strength={600} bgImage={Bg1}>
        <div className="container">
          <img src="./src/assets/bg-1.jpg" alt="" />
          <div className="text">Akash Tor </div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={Bg2}>
        <div className="container">
          <img src="./src/assets/bg-1.jpg" alt="" />
          <div className="text">Gaar</div>
        </div>
      </Parallax>

      <Parallax strength={-500} bgImage={Bg3}>
        <div className="container">
          <img src="./src/assets/bg-1.jpg" alt="" />
          <div className="text">Mere Debo</div>
        </div>
      </Parallax>
    </div>
  )
  
}

export default BackGroundElement
