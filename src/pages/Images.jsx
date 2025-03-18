import React from 'react'
import CardImg from "../components/CardImg.jsx"
import imgs from "../data/imgs.js"
function Images() {
  return (
    <div className='container'>
              {imgs.map((img) => (
        <CardImg key={img.id} path={img.path}  />
      ))}
           
    </div>
  )
}

export default Images