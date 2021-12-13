import React from "react";
import Navbar from "../Navbar";
import Codes from "./Codes";
import Img from './offer2.png'
import Img1 from './offer1.png'

export default function Offer() {
  return (
    <>
      <Navbar />
    <div className='offer'>
      <Codes img={Img}  code='DIWALI 2344'/>
      <Codes img={Img1} code='HOLI 7883'/>
      <Codes img={Img} code='EID 8873'/>
      <Codes img={Img1} code='RAMDAN 9987'/>
      <Codes img={Img} code='DIWALI 2344'/>
      <Codes img={Img1} code='HOLI 7883'/>
      <Codes img={Img} code='EID 8873'/>
      <Codes img={Img1} code='RAMDAN 9987'/>
      <Codes img={Img} code='DIWALI 2344'/>
      <Codes img={Img1} code='HOLI 7883'/>
      <Codes img={Img} code='EID 8873'/>
      <Codes img={Img1} code='RAMDAN 9987'/>
      
    </div>  
    </>
    )
}
