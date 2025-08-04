import React from 'react'
import './homePage.scss'
import bg from '../../assets/bg.jpg'

const homePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        Find Your Next Home or Airbnb Investment - All in One Place
      </div>
      <div className="imgContainer">
          <img src={bg} alt="" />
      </div>

    </div>
  )
}

export default homePage