import React, { Component, Fragment } from 'react'
import { Button ,ButtonGroup } from 'react-bootstrap'
import './Style.css'
 class Products extends Component {

    state = {
        Products: [
            { id: 0, name: "Chipsy", count: 1},
            { id: 1, name: "Molto", count: 2},
            { id: 2, name: "Chooclate", count: 3},
            { id: 3, name: "Pepsi", count: 5},
          ],
    }

    // increament =()=>{
    //    this.setState({
    //     count : this.state.Products.map((e)=>{
    //     return e.count +1;
    //     })
    //    })
    //     }
    

  render() {
    return (
      this.state.Products.map((e)=>{
        return ( <Fragment>
            <span key={e.id}>
        <h1 key={e.id} className='product'>{e.name} {e.count}</h1>
        <ButtonGroup size="lg" className="mb-2 sub"  >
        <Button variant="danger" className='dang' onClick={this.del}>Del</Button>
        <Button variant="success" onClick={this.increament}>+</Button>
        <Button variant="warning" onClick={this.minus}>-</Button>
      </ButtonGroup>
        </span>
        <hr></hr>
        </Fragment>
        )
      })
    )
  }
}


export default Products 