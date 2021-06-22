import React, { useState } from 'react'
import './App.css';
import Foodgallery  from './components/Foodgallery';
import Buttons from './components/Buttons';
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './db/menu';


function App() {
  const [items , setItems] = useState(Menu)

  const filterMenu =(status)=>{
    const updatedItems = Menu.filter((currElem)=>{
      return currElem.status === status
    })
    setItems(updatedItems)
  }


  return (
      <>
         <h1> Your Food Desk</h1>
         <hr></hr>
      <Buttons filterMenu = {filterMenu} setItems = {setItems}/>
      <Foodgallery items={items}/>
      </>    
  );
}

export default App;
