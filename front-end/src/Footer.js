import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
         <div className="row">
         	<div className="footer-col-1">
         		<h3>download our app</h3>
         		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
         		<div className="app-logo">
         			 <img src="fl.png" alt=''></img>
         		</div>
         	</div>
         	<div className="footer-col-2">
         		<img src="logo.png" width="70%" height="100px" alt='' ></img>
         		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
         	</div>
         	<div className="footer-col-3">
         		<h3>useful links</h3>
         		<ul>
         			<li>coupons</li>
         			<li>post</li>
         			<li>policy</li>
         			<li>join</li>
         		</ul>
         	</div>
         	<div className="footer-col-4">
         		<h3>folow us</h3>
         		<ul>
         			<li>facebook</li>
         			<li>instagram</li>
         			<li>tweeter</li>
         			<li>you tube</li>
         		</ul>
         	</div>
         </div>
         <p className="copyright">Copyright 2021 D_HUB</p>	
        </div>
      </div>
  )
}
