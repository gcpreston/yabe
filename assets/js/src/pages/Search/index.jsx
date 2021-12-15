import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchSearchResults} from "../../features/search/searchService";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchItems} from "../../features/search/searchSlice";

const Search = () => {
  params = useParams();
  const query = params.query;
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchItems);
  const products = searchResults.products;

  useEffect(() => {
    fetchSearchResults(dispatch, query);
  }, [query]);

  return (
    <ul>
      {products.map(p => <li key={p.sku}>{p.name}</li>)}
    </ul>
  )
}

export default Search;