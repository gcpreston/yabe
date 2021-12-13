import React from "react";
import {Link} from "react-router-dom";

const ListingItem = item =>
  <li key={item.id} className='list-group-item'>
    <div className='row'>
      <div className='col-2'>
        <img src={item.image_url} alt={item.id} className='img-fluid img-thumbnail'/>
      </div>
      <div className='col-10'>
        <Link to={`/listings/${item.id}`}>
          <h2>
            {item.name}
          </h2>
        </Link>
        <p>
          Sold by: {item.seller.email}
        </p>
        <p>
          {item.description}
        </p>
        <h2>
          ${item.price}
        </h2>
      </div>
    </div>
  </li>

export default ListingItem;