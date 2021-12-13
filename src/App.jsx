import React from 'react'
import Landingpage from './Components/Landingpage'
import {Switch , Route, Redirect} from 'react-router-dom'
import Need from './Components/Need Help/Need'
import Offer from './Components/Offer/Offer'
import Join from './Components/Join/Join'
import Signup from './Components/Join/Signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
export default function App() {
  return (
    <>
     <Switch>
      <Route exact path='/' component={Landingpage}/>
      <Route exact path='/need' component={Need}/>
      <Route  exact path='/offer' component={Offer}/>
       <Route  exact path='/login' component={Join}/> 
       <Route  exact path='/signup' component={Signup}/>
       <Redirect to='/'/>
     </Switch>
     
     </> 
    
  )
}

