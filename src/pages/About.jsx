import React from 'react'

const About = () => {
  return (
    <div className='card shadow p-3 m-3'>
      <h3 className='text-center'>About FashionVerse </h3>
      <div className='text-center m-3'>
      <img src="./src/assets/about.jpeg" width={"50%"} height={"400px"} />
      </div>
      <p>
      At <b>Fashion Verse</b>, we believe that fashion is more than just clothing - it's a 
      reflection of your individuality, creativity, and confidence. Our mission is to 
      provide you with the latest trends, premium quality, and timeless styles, all in one place.
      Founded by a team of passionate fashion enthusiasts, Fashion Verse offers a curated collection
       of men's and women's clothing, along with carefully selected accessories that add that 
       perfect finishing touch to every outfit. Whether you're dressing up for a special occasion 
       or styling a casual look, we've got you covered.
      </p>
      <br />
      <h3 className='text-align-left'>Our Promise</h3>
      <ul className='text-start'>
        <li><b>Quality & Comfort:</b> We use only the best materials to ensure our clothes feel as good as they look. 
          Fashion should never compromise on comfort.
        </li>
        <li><b>Sustainability:</b>We are committed to sustainable practices and choose eco-friendly options wherever possible,
         so you can look good and feel good about your choices.
        </li>
        <li><b>Trends & Style: </b> Our collections are designed to keep you on top of the latest trends
        , while also offering timeless pieces that never go out of style.
        </li>
      </ul>
      <p>Join the Fashion Verse community today and let your style speak for itself.</p>
    </div>
  )
}

export default About
