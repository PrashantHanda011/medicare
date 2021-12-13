import React from 'react'
import AddBoxIcon from ''
export default function Cartcontent() {
    return (
        <>
          <div className='Card'>
          <img src={item.image} alt="search" />
          <h4>{item.name}</h4>
          <h3>{item.cost} <span>Rs</span> </h3>
          <button ><AddBoxIcon  style={{color : 'gray',fontSize:'2rem'}}/></button>
        </div>  
        </>
    )
}
