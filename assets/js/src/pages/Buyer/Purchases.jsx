import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSales} from "../../features/listings/listingsSlice";
import {fetchUser} from "../../features/accounts/accountsService";
import {fetchPurchasesOfUser} from "../../features/listings/listingsService";
import SalesList from "../SalesList"

const Purchases = (params) => {
  const dispatch = useDispatch();
  const purchases = useSelector(selectSales);
  const userId = params.userId;

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchPurchasesOfUser(dispatch, userId);
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
      <SalesList sales={purchases} />
    </div>
    )
}

export default Purchases;