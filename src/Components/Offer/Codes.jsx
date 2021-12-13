import React,{useState} from "react";

export default function Codes(props) {
    return (
    <div className="offer-card">
      <img src={props.img} alt="" />
      <h2>{props.code}</h2>
      
    </div>
  );
}
