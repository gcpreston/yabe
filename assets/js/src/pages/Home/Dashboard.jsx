import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../features/auth/authSlice";
import Purchases from "../Buyer/Purchases";
import Sales from "../Seller/Sales"

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div className='row'>
      <h1> Your dashboard</h1>
      { user.role === 'buyer' ? <Purchases userId={user.id}/> : null }
      { user.role === 'seller' ? <Sales userId={user.id}/> : null }
    </div>
  )
}

export default Dashboard;