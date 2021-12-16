import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSales } from "../../features/listings/listingsSlice";
import { fetchUser } from "../../features/accounts/accountsService";
import { fetchSalesOfUser } from "../../features/listings/listingsService";
import SalesList from "../SalesList"

const Sales = (params) => {
  const dispatch = useDispatch();
  const sales = useSelector(selectSales);
  const userId = params.userId;

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchSalesOfUser(dispatch, userId);
  }, []);

  return (
    <div>
      {sales.length > 0 ?
        <>
          <h2>Sales</h2>
          <SalesList sales={sales} />
        </>
        :
        null
      }
    </div>
  )
}

export default Sales;
