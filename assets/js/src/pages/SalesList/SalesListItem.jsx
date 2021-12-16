import React from "react";
import { Link } from "react-router-dom";
import { dollarString } from "../../utils";

const SalesListItem = ({ sale, outside }) => {
  return (
    <li key={sale.item.id} className='list-group-sale.item'>
      <div className='row my-2'>
        <div className='col-8 col-sm-3 col-xl-2'>
          <img src={sale.item.image_url} alt={sale.item.id} className='img-fluid img-thumbnail' />
        </div>
        <div className='col-12 col-sm-9 col-xl-10'>
          <Link to={outside ? `/details/${sale.item.id}` : `/listings/${sale.item.id}`}>
            <h2>
              {sale.item.name}
            </h2>
          </Link>
          <p>
            Seller: {outside ? sale.item.seller.email : <Link to={`/sellers/${sale.item.seller.id}`}>{sale.item.seller.email}</Link>}
          </p>
          <p>
            Bought by: <Link to={`/buyers/${sale.buyer.id}`}>{sale.buyer.email}</Link>
          </p>
          <p>
            {sale.item.description}
          </p>
          <p>
            Qty sold: {sale.quantity}
          </p>
          <h2>
            Sold for: {dollarString(sale.item.price * sale.quantity)}
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
