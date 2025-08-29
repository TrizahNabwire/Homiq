import React from 'react'
import './propertyCard.scss'
import { Link } from 'react-router-dom'
import location_icon from '../../assets/location_icon.svg'
import bed_icon from '../../assets/bed_icon.svg'
import bathroom_icon from '../../assets/bathroom_icon.svg'
// import save_icon from '../../assets/save_icon.svg'
import chat_icon from '../../assets/chat_icon.svg'
import share_icon from '../../assets/share_icon.svg'

const PropertyCard = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
      <img src={item.image} alt="" />
      </Link>
      <div className="textContainer">
        <h3 className="location">
          <Link to={`/${item.id}`}>
          <img src={location_icon} alt="" />
          <span>{item.location}</span>
          </Link>
        </h3>

        <p className="distance">{item.distance}</p>

        <p className="price">
          <span>Ksh {item.price}</span> / month
        </p>
        <div className="bottom">
        <div className="features">
          <div className="feature">
          <img src={bed_icon} alt="" />
          <span className="bedrooms">{item.bedRooms} Bedrooms</span>
          </div>
          </div>
            <div className="features">
              <div className="feature">
              <img src={bathroom_icon} alt="" />
              <span className="bathrooms">{item.bathRooms} Bathrooms</span>
            </div>
          </div>
          </div>

          <div className="actions">
            {/* <div className="action">
              <img src={save_icon} alt="" />
            </div> */}
            <div className="action">
              <img src={chat_icon} alt="" />
            </div>
            <div className="action">
              <img src={share_icon} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default PropertyCard;