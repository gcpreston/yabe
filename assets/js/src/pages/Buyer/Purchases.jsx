import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOutsideSales, selectSales } from "../../features/listings/listingsSlice";
import { fetchUser } from "../../features/accounts/accountsService";
import { fetchOutsidePurchasesOfUser, fetchPurchasesOfUser } from "../../features/listings/listingsService";
import SalesList from "../SalesList"

const Purchases = (params) => {
  const dispatch = useDispatch();
  const purchases = useSelector(selectSales);
  const outsidePurchases = useSelector(selectOutsideSales);
  const userId = params.userId;

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchPurchasesOfUser(dispatch, userId);
    fetchOutsidePurchasesOfUser(dispatch, userId);
  }, []);

  return (
    <div>
      {purchases.length > 0 ?
        <>
          <h2>Purchases</h2>
          <SalesList sales={purchases} />
        </>
        :
        null}

      {outsidePurchases.length > 0 ?
        <>
          <h2>Outside Purchases</h2>
          <SalesList sales={outsidePurchases} outside />
        </>
        :
        null
      }
    </div>
  )
}

export default Purchases;
