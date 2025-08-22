import React from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/slider'
import { singlePropertyData, userData } from '../../lib/listData'
import location_icon from '../../assets/location_icon.svg'

const singlePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          < Slider images={singlePropertyData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <div className="location">
                  <img src={location_icon} alt="" />
                  <span>{singlePropertyData.location}</span>
                </div>
                <p className="distance">{singlePropertyData.distance}</p>
              <div className="price">
                <span>Ksh {singlePropertyData.price}</span> / month
              </div>
              </div>
              <div className="user">
                <img src={userData.image} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default singlePage