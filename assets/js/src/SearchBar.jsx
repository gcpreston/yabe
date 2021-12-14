import React from "react";

const SearchBar = () => {
  return (
    <div className='col-12 col-sm-8 col-md-9 col-lg-10'>
      <div className='input-group my-2'>
        <input id='search' type='text' className='form-control input-group' placeholder='Search Items'/>
        <div className='input-group-append'>
          <button className='rounded-0 rounded-end btn btn-outline-primary'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;