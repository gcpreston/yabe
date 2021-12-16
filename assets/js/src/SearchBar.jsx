import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    const path = '/search/' + input;
    navigate(path);
  };
  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      const path = '/search/' + input;
      navigate(path);
    }
  };

  return (
    <div className='col-12 col-sm-8 col-md-9 col-lg-10'>
      <div className='input-group my-2'>
        <input id='search' type='text' className='form-control input-group' placeholder='Search Items' onChange={handleChange} onKeyDown={handleOnKeyDown} />
        <div className='input-group-append'>
          <button className='rounded-0 rounded-end btn btn-outline-primary' onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
