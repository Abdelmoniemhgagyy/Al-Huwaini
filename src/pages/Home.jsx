import React from 'react'
import "../App.css"
import Card from "../components/Card"

function Home() {
  return (
    <div className='home-container'>
      {/* <h1 className='header-title'>إِنَّ مِنْ أَفْضَلِ أَيَّامِكُمْ يَوْمَ الْجُمُعَةِ</h1> */}
      <div className='card-container'>
        {
         <>
          <Card  title="الشيخ كشك" path="ظظظ"/>

          </>
        }
      </div>

    </div>
  )
}

export default Home