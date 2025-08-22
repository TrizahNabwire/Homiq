import React from 'react'
import './slider.scss'
import { singlePropertyData } from '../../lib/listData'

const slider = ({images}) => {
  return (
    <div className='slider'>
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