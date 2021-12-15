import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchSearchResults} from "../../features/search/searchService";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchItems} from "../../features/search/searchSlice";
import Listings from "../Listings";

const Search = () => {
  params = useParams();
  const query = params.query;
  const dispatch = useDispatch();
  const items = useSelector(selectSearchItems);

  useEffect(() => {
    fetchSearchResults(dispatch, query);
  }, [query]);

  return (
    <Listings items={items} link="details"/>
  )
}

export default Search;