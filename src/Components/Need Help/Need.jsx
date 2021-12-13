import React from "react";
import Navbar from "../Navbar";
import SimpleAccordion from "./SimpleAccordion";

export default function Need() {
  return (
      <>
    <Navbar />
    <div className='need'>
      
      <h2 className="faq">F.A.Q</h2>

      <div className="accordian">
      <div className='Simple-acc'>
        <SimpleAccordion/>
      </div>
      </div>
    <h3 className='credit'>Medicare is developed by Prashant handa</h3>
    </div>
    </>
  );
}
