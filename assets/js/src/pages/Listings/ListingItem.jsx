import React from "react";
import {Link} from "react-router-dom";
import {dollarString} from "../../utils";

const ListingItem = item =>
  <li key={item.id} className='list-group-item'>
    <div className='row my-2'>
      <div className='col-8 col-sm-3 col-xl-2'>
        <img src={item.image_url} alt={item.id} className='img-fluid img-thumbnail'/>
      </div>
      <div className='col-12 col-sm-9 col-xl-10'>
        <Link to={`/listings/${item.id}`}>
          <h2>
            {item.name}
          </h2>
        </Link>
        <p>
          Seller: {item.seller.email}
        </p>
        <p>
          {item.description}
        </p>
        <h2>
          {dollarString(item.price)}
        </h2>
        <p>Quantity sold: {item.quantity_sold}</p>
      </div>
    </div>
  </li>

export default ListingItem;
