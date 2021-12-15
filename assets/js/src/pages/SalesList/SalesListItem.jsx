import React from "react";
import {Link} from "react-router-dom";
import { dollarString, dollarAmount } from "../../utils";

const SalesListItem = sale => {
  return (
    <li key={sale.item.id} className='list-group-item'>
      <div className='row my-2'>
        <div className='col-8 col-sm-3 col-xl-2'>
          <img src={sale.item.image_url} alt={sale.item.id} className='img-fluid img-thumbnail'/>
        </div>
        <div className='col-12 col-sm-9 col-xl-10'>
          <Link to={`/listings/${sale.item.id}`}>
            <h2>
              {sale.item.name}
            </h2>
          </Link>
          <p>
            Seller: {sale.item.seller.email}
          </p>
          <p>
            Bought by: {sale.buyer.email}
          </p>
          <p>
            {sale.item.description}
          </p>
          <p>
            Qty sold: {sale.quantity}
          </p>
          <h2>
            Sold for: ${dollarAmount(sale.item.price) * sale.quantity}
          </h2>
          <p>
            {dollarString(sale.item.price)}/unit
          </p>
        </div>
      </div>
    </li>
  )
}

export default SalesListItem;
