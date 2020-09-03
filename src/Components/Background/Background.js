import React from 'react'
import '../../App.css'
import { Button } from '../Button/Button.js'
import './Background.css'

function Background(){
    return(
        <div className='background-container' >
            <video src="/Video/video-2.mp4" autoPlay loop muted />
             <p>
                A Brand is nothing but an expression of 
                the consumer's loyality and trust
             </p>
             <div className="background-btns" >
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >Explore</Button>
             </div>
        </div>
    )
}

export default Background