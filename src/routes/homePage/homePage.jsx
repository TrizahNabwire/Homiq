import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'
import bg from '../../assets/bg.jpg'

const homePage = () => {
  return (
    <div className="homePage">
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
        <h1>200</h1>
        <h2>Awards Gained</h2>
      </div>
      <div className="stat">
        <h1>450+</h1>
        <h2>Properties Ready</h2>
      </div>
      </div>
      <div className="imgContainer">
          <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default homePage