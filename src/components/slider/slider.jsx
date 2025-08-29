import React from 'react'
import './slider.scss'
import { singlePropertyData } from '../../lib/listData'
import left_icon from '../../assets/left_arrow.svg'
// import right_icon from '../../assets/right_arrow.svg'

const slider = ({images}) => {
    const [imageIndex, setImageIndex] = React.useState(null);
    const changeSlide = (direction) => {
        if(direction === 'left'){
            setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1)
        }
        if(direction === 'right'){
            setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1)
        }

    }
  return (
    <div className='slider'>
        {imageIndex !== null && (
        <div className="fullSlider">
            <div className="arrow" onClick={()=> changeSlide("left")}>
                <img src={left_icon} alt="" />
            </div>
            <div className="imageContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={()=> changeSlide("right")}>
                <img src={left_icon} className='rightIcon' alt="" />
            </div>
            <div className="closeIcon" onClick={()=> setImageIndex(null)}>x</div>
        </div>
        )}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} onClick={()=>setImageIndex(index + 1)}/>
            ))}
        </div>

    </div>
  )
}

export default slider