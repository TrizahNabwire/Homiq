import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'
import bg from '../../assets/bg.jpg'

const homePage = () => {
  return (
    <div className="homePage">
      <div className="money">
        We charge <span>Ksh 2000</span> to view 4 Houses Per Day
      </div>
      <div className="textContainer">
        Find Your Next Home or Airbnb Investment - All in One Place
      </div>
      <SearchBar />
      <div className="stats">
      <div className="stat">
        <h1>16+</h1>
        <h2>Years of Experience</h2>
      </div>
      <div className="stat">
        <h1>12</h1>
        <h2>Agents</h2>
      </div>
      <div className="stat">
        <h1>200+</h1>
        <h2>Happy Clients</h2>
      </div>
      <div className="stat">
        <h1>450+</h1>
        <h2>Vacant Properties</h2>
      </div>
      </div>
      <div className="imgContainer">
          <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default homePage