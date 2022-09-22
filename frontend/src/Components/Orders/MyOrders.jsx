import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../../App';
import { getMyOrders } from '../../Redux/Actions/OrderActions';

function MyOrders() {
  const {dispatch, navigator ,setOpenAlert} = useContext(ProjectContext);

    useEffect(() => {
        dispatch(getMyOrders())
    },[])
  return (
    <div>
        myOrders
    </div>
  )
}

export default MyOrders