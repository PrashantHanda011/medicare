import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Cart } from "./Context/Context";
import { useContext } from "react";

export default function Products(props) {
  const CartState = useContext(Cart);
  const {
    state: { cart },
    dispatch,
  } = CartState;
console.log(cart)
  return (
    <>
      <div className="Card">
        <img src={props.image} alt="search" />
        <h4>{props.name}</h4>
        <h3>
          {props.cost} <span>Rs</span>{" "}
        </h3>
        <button onClick={()=>{dispatch({
          type:"addtocart",
          payload:props
        })}}>
          <AddBoxIcon style={{ color: "gray", fontSize: "2rem" }} />
        </button>
      </div>
    </>
  );
}
