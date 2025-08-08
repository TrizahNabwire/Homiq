import React from 'react'
import './searchBar.scss'
import search_icon from '../../assets/search_icon.svg'

const category = ['Rent', 'Airbnbs'];

const searchBar = () => {
  const [query, setQuery] = React.useState({
    category: 'Rent',
    location: '',
    minPrice: 0,
    maxPrice: 0
  });

  const switchCategory = (val) => {
    setQuery((prev) => ({ ...prev, category: val }));

  }
  return (
    <div className='searchBar'>
      <div className="category">
        {category.map((category)=>(
          <button key={category} onClick={()=> switchCategory(category)} className={query.category === category ? "active" : ""}>{category}</button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" id="" placeholder='Location' />
        <input type="number" name="minPrice" min={0} max={10000000} id="" placeholder='Min Price' />
        <input type="text" name="maxPrice" min={0} max={10000000} id="" placeholder='Max Price' />
        <button><img src={search_icon} alt="" className='searchIcon'/></button>
      </form>
    </div>
  )
}

export default searchBar