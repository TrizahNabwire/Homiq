import React from 'react'
import './searchBar.scss'
import search_icon from '../../assets/search_icon.svg'

const searchBar = () => {
  const [query, setQuery] = React.useState({
    category: 'Rent',
    location: '',
    minPrice: '',
    maxPrice: ''
  });
  return (
    <div className='searchBar'>
      <div className="category">
        <button>Rent</button>
        <button>Airbnbs</button>
      </div>
      <form action="">
        <input type="text" name="location" id="" placeholder='Location' />
        <input type="number" name="minPrice" min={0} max={10000000} id="" placeholder='Min Price' />
        <input type="text" name="maxPrice" min={0} max={10000000} id="" placeholder='Max Price' />
        <button><img src={search_icon} alt="" /></button>
      </form>
    </div>
  )
}

export default searchBar