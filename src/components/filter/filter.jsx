import React from 'react'
import './filter.scss'
import search_icon from '../../assets/search_icon.svg'

const filter = () => {
  return (
    <div className='filter'>
        <h1>Search Results for <b>Waiyaki Way</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" name="city" id="city" placeholder='City Location'/>
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="Any">Any</option>
                    <option value="Rent">Rent</option>
                    <option value="Airbnb">Airbnb</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="Any">Any</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" name="minPrice" id="minPrice" placeholder='Any'/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" name="maxPrice" id="maxPrice" placeholder='Any'/>
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input type="number" name="bedroom" id="bedroom" placeholder='Any'/>
            </div>
            <button>
                <img src={search_icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default filter