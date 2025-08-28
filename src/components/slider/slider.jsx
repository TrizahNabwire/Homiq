import React from 'react'
import './slider.scss'
import { singlePropertyData } from '../../lib/listData'
import left_icon from '../../assets/left_arrow.svg'
// import right_icon from '../../assets/right_arrow.svg'

const slider = ({images}) => {
  return (
    <div className='slider'>
        <div className="fullSlider">
            <div className="arrow">
                <img src={left_icon} alt="" />
            </div>
            <div className="imageContainer">
                <img src={images[0]} alt="" />
            </div>
            <div className="arrow">
                <img src={left_icon} className='rightIcon' alt="" />
            </div>
            <div className="closeIcon">x</div>
        </div>
        <div className="bigImage">
            <img src={images[0]} alt="" />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                // <div className="smallImage" >
                    <img src={image} alt="" key={index}/>
                // </div>
            ))}
        </div>

    </div>
  )
}

export default slider