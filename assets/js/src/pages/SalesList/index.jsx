import React from 'react';
import SalesListItem from "./SalesListItem";

const SalesList = (params) => {
  return (
    <ul className='list-group'>
      {params.sales.map(item => (
        <SalesListItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default SalesList;