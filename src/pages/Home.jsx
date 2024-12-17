import React from 'react'

const Home = () => {
  return (

    <div className='card shadow p-3 m-3'>
      <h1 className='card-title text-center'>Welcome to FashionVerse </h1>    
      <div className='text-center m-5'>
      <img src='./src/assets/Home.jpeg'width={"70%"} height={"400px"}/>
      </div>
    <h3>Why choose FashionVerse?</h3>
    <p>At Fashion Verse, we believe in creating more than just clothes.
       We craft outfits that tell your unique story. Here's why our customers love us</p>
    <ul>
      <li><b>Quality:</b> Premium fabrics and stitching.</li>
      <li><b>Style:</b> Always on-trend, yet timeless.</li>
      <li><b>Customer Service:</b> 24/7 support and easy returns.</li>
    </ul>
    </div>


    
  )
}

export default Home
