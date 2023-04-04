import React from 'react'
import { Link } from "react-router-dom";
import '../style.css'

export default function Welcome() {
  return (
    <div className="first-sec">
        <div class="circle"></div>
        <div class="content">
            <div class="text-box">
                <h2>
                    That's What
                </h2>
                <h2><span>i like</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Ratione id non ut, quod eaque sed amet placeat inventore odit eius
                     hic alias saepe omnis dignissimos harum nobis laudantium debitis libero.
                </p>
                <Link to='/product'>View All</Link>
            </div>
            <div class="img-box">
                <img src="13pm.png" class="pepsi" alt="coverimage"></img>
            </div>
        </div>
        <ul class="thumb">
            <li><img src="13.png" class="slide1" alt="popUp-Item"></img></li>
            <li><img src="watches/light-blue.png" class="slide2" alt="popUp-Item"></img></li>
            <li><img src="watches/yellow.png" class="slide3" alt="popUp-Item"></img></li>
        </ul>
        <ul class="sci">
            <li><Link><img src="facebook.png" alt="facebook icon"></img></Link></li>
            <li><Link><img src="twitter.png" alt="twitter-icon"></img></Link></li>
            <li><Link><img src="insta.png" alt="instagram-icon"></img></Link></li>
        </ul>
    </div>
  )
}
