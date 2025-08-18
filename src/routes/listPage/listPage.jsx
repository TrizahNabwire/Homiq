import React from 'react'
import './listPage.scss'
import { listData } from '../../lib/listData'
import Filter from '../../components/filter/filter'
import Card from '../../components/propertyCard/propertyCard'

const listPage = () => {
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          <div className="cards">
          {data.map(item => (
            <Card key={item.id} item={item}/>
          ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default listPage;