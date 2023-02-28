import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ordered,restocked } from "./icecreamSlice"
const Icecream =()=>{
    const numOfIceCream = useSelector(state=> state.iceCream.numOfIceCream )
    const dispatch = useDispatch()
    const [order,setOrder]=useState(0)
    const [restock,setRestock]=useState(0)
    return (
        <React.Fragment>     
            <h1 className="text-danger text-center">ICECREAM SHELF</h1>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <h4>Total available ICREAM</h4>
                    <h2 className="fw-bold ">{numOfIceCream}</h2>
                </div>
                <div className="col-sm-4">
                    <p className="bg-dark text-white text-center">
                        <input type="number" className="rounded p-2 m-2" placeholder='Enter Quantity of Order'
                         onChange={(e)=>setOrder(e.target.value)}/>
                        <button className='rounded' onClick={()=> dispatch(ordered(Number(order)))}>Order IceCream</button>
                        <input type="number" className="rounded p-2 m-2" placeholder='Enter Quantity of Restocked'
                         onChange={(e)=>setRestock(e.target.value)}/>
                        <button className='rounded' onClick={()=>dispatch(restocked(Number(restock)))}>Restock IceCream</button>
                    </p>
                 </div>
            </div>
        </React.Fragment>
    )
}

export default Icecream