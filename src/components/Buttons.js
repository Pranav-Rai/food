import React from 'react'
import Menu from '../db/menu'


const Buttons = ({filterMenu , setItems})=>{

    return(
    <>
    <div className= "menu-tabs container">
        <div className="menu-tabs d-flex justify-content-around">
            <button className="btn btn-warning" onClick={()=> setItems(Menu)}>All orders</button>
            <button className="btn btn-warning" onClick={()=> filterMenu("Waiting")}>Waiting</button>
            <button className="btn btn-warning" onClick={()=> filterMenu("Preparing")}>Preparing</button>
            <button className="btn btn-warning" onClick={()=> filterMenu("Ready")}>Ready</button>
            <button className="btn btn-warning" onClick={()=> filterMenu("Delievered")}>Delievered</button>
            <button className="btn btn-warning" onClick={()=> filterMenu("Cancelled")}>Cancelled</button>
        </div>
    </div>
    </>
    )
}


export default Buttons