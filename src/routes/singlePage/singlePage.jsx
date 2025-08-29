import React from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/slider'
import { singlePropertyData, userData } from '../../lib/listData'
import location_icon from '../../assets/location_icon.svg'
// import save_icon from '../../assets/save_icon.svg'
import chat_icon from '../../assets/chat_icon.svg'
import share_icon from '../../assets/share_icon.svg'

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
            <div className="bottom">
              {singlePropertyData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible.</p>
              </div>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed.</p>
              </div>
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income is responsible.</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="size">
            <img src="" alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src="" alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src="" alt="" />
            <span>1 bathroom</span>
          </div>
          <div className="sizes">

          </div>
          <p className="title">Nearby Places</p>
          <div className="feature">
            <img src="" alt="" />
            <div className="featuteText">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="" alt="" />
            <div className="featuteText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="" alt="" />
            <div className="featuteText">
              <span>Supermarket</span>
              <p>200m away</p>
            </div>
          </div>
          <div className="listHorizontal">

          </div>
          <div className="buttons">
            <button>
              <img src={chat_icon} alt="" />
              Send a Message
            </button>
            <button>
              <img src={share_icon} alt="" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default singlePage