import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';
import { Cart } from '../Context/Context';
import { useContext } from "react";


export default function Cartproduct(props) {
    const CartState = useContext(Cart);
    const {
      state: { cart },
      dispatch,
    } = CartState;
  
    const [num, setnum] = useState(0)
    const increm =()=>{
        if(num<10){
            setnum(num+1)
        }
        else{
            console.log('can not increase')
        }
    }
    const decrem =()=>{
        if(num>0){
            setnum(num-1)
        }
        else{
            console.log('can not decrease')
        }
    }
    return (
        <>
        <div className='cartobject'>
           <h4>{props.id}.</h4>
          

          <img src={props.image} alt="search" />

            
          <div className='cartobject-heading'>
          <h4>{props.name}</h4>
          <h3>{props.cost} <span>Rs</span> </h3>
          </div> 

          <div className='product-counter'>
          <button onClick={decrem} style={{background:'none',border:'none'}}><RemoveIcon  style={{color:'black'}}/></button>
          
          <input type="text"  value={num}/>
          
          <button onClick={increm} style={{background:'none',border:'none'}} ><AddIcon  style={{color:'black'}}/></button>
          </div>
                          
          <button><ClearIcon onClick={()=>dispatch({
          type:"removefromcart",
          payload:props
        })} style={{color:"grey",fontSize:"1.8rem",cursor: 'pointer'}}/></button>
          </div>   
        </>
    )
}
