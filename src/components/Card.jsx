import React, { useState } from 'react'
import "../App.css"
import Post from "../assest/download.jpg"
import Wavesurfer from "./Wavesurfer"
import items from "../data/main" 

function Card() {
  const [audioUrl,setAudioUrl] =useState('https://ia600404.us.archive.org/23/items/alfirdwsiy1433_gmail_131_201802jh475787909-09087963532546678/001.mp3')
  return (
    <div>
        <div className="card" >
                <div className="card-border-top">
                </div>
                <div className="img"> 
                  <img src={Post} alt='logo' className='img-post'/>
                </div>
                
                <div className='items-player-container'>
                     <Wavesurfer audioUrl={audioUrl}/>
                </div>

 <div className='items'>
       {items.map((item) => (
            <p key={item.id} onClick={() => setAudioUrl(item.url)}>{item.title}</p>
        ))}
     <h3>--</h3>
     


 </div>
        </div>

    </div>
  )
}

export default Card