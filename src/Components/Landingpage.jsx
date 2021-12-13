import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Navbar from './Navbar';
import Content from './Content'
import Slider from './mainslider/ButtonSlider'
import Product from './Products'
export default function Landingpage() {
  
    return (
        <>
            <section className='hero'>

                <Navbar/>
                
                <div className='hero-content'>
                    <h1>Medication Hub</h1>
                    <p>Say good bye to all health worries</p>
                </div>

                 <div>
                 
                     <Slider/>
               
                 </div> 
            <div className='input-field'>
                    <input type="text" placeholder='Search Your Product' />
                   <button className='search-btn'> <SearchIcon style={{fontSize:'1.5rem'}}/> <h3>Search</h3> </button>            </div>  
                
            </section>
            <Content/>
        </>
    )
}
