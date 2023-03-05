import React from 'react'
import '../watches.css'
import { getwatch } from '../watch'

export default function Comtest() {
  return (
    <div>
        <div className="watch-container">
        <div className="side-one">
            <div className="type">Apple watch</div>
            <h3>Aluminum</h3>
            <div className="big-thin">Case With</div>
            <div className="wrapper">
                <div className="small-bold">Solo loop</div>
                <div className="price">From $339</div>
                <div className="buttons">
                    <button>explore more</button>
                </div>
            </div>
        </div>

        <div className="side-two">
            <div className="sparks">
                <img src="./watches/sparks.png" alt=""></img>
            </div>

            <div className="watch">
                <img src="./watches/white.png" alt="" className=" show image img-1"></img>
                <img src="./watches/blue.png" alt="" className="image img-2"></img>
                <img src="./watches/red.png" alt="" className="image img-3"></img>
                <img src="./watches/green.png" alt="" className="image img-4"></img>
                <img src="./watches/light-blue.png" alt="" className="image img-5"></img>
                <img src="./watches/yellow.png" alt="" className="image img-6"></img>
                <img src="./watches/light-green.png" alt="" className="image img-7"></img>
                
            </div>

            <div className="colors">
                <span className="active" data-value="1" onClick={getwatch}></span>
                <span data-value="2" onClick={getwatch}></span>
                <span data-value="3" onClick={getwatch}></span>
                <span data-value="4" onClick={getwatch}></span>
                <span data-value="5" onClick={getwatch}></span>
                <span data-value="6" onClick={getwatch}></span>
                <span data-value="7" onClick={getwatch}></span>
                <div className="line"></div>
                <p>band colors</p>
            </div>
        </div>
    </div>
    </div>
  )
}
