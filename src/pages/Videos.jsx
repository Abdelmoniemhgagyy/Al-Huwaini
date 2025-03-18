import React from 'react'
import CardVideo from "../components/CardVideo.jsx"
import videos from '../data/videos.js'
function Videos() {
  return (
    <div className='container'>
      {videos.map((video) => (
        <CardVideo key={video.id} path={video.path}  />
      ))}
 

      
    </div>
  )
}

export default Videos