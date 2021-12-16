import React from 'react';
import SalesListItem from "./SalesListItem";

const SalesList = ({ sales, outside }) => {
  return (
    <ul className='list-group'>
      {sales.map(sale => (
        <SalesListItem key={sale.id} sale={sale} outside={outside} />
      ))}
    </ul>
  )
}

export default SalesList;
