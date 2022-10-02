import React , {Component, Fragment} from "react";

import Naav from './Nav'
import { Button } from "react-bootstrap";
import Products from "./Products";
import './Style.css'



class App extends Component {

  
 

  render(){
    return (
    <Fragment>
    <Naav/>
    <h1 className="cart">Shopping Cart</h1>
    <Button variant="secondary">Reset</Button>
    <hr></hr>
    <Products/>
    
   </Fragment>
    
    )
  }
}

export default App


