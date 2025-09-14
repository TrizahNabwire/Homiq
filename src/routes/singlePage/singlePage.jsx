import React from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/slider'
import { singlePropertyData, userData } from '../../lib/listData'
import location_icon from '../../assets/location_icon.svg'
// import save_icon from '../../assets/save_icon.svg'
import chat_icon from '../../assets/chat_icon.svg'
import share_icon from '../../assets/share_icon.svg'
import pet from '../../assets/pet.svg'
import fee from '../../assets/fee.svg'
import utility from '../../assets/utility.svg'
import school from '../../assets/school.svg'
import bus from '../../assets/bus.svg'
import supermarket from '../../assets/supermarket.svg'
import size from '../../assets/size.svg'
import bed from '../../assets/bed.svg'
import bathroom from '../../assets/bathroom.svg'

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
              <img src={utility} alt="" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>Renter is responsible.</p>
                </div>
              </div>
              <div className="feature">
                <img src={pet} alt="" />
                  <div className="featureText">
                    <span>Pet Policy</span>
                    <p>Pets Allowed.</p>
                  </div>
              </div>
              <div className="feature">
                <img src={fee} alt="" />
                  <div className="featureText">
                    <span>Property Fees</span>
                    <p>Must have 3x the rent in total household income is responsible.</p>
                  </div>
              </div>
          </div>
        
          <p className="title">Sizes</p>
          <div className="sizes">
          <div className="size">
            <img src={size} alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src={bed} alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src={bathroom} alt="" />
            <span>1 bathroom</span>
          </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
            <img src={school} alt="" />
            <div className="featureText">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src={bus} alt="" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src={supermarket} alt="" />
            <div className="featureText">
              <span>Supermarket</span>
              <p>200m away</p>
            </div>
          </div>
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