import React, { Component } from 'react'

class Helloclass extends Component{

    constructor(){
      super()

      this.state = {
          name: "Mostofa",
          age: "22"
      }
    
    }

    
//   doThis(){
//     alert("Button is clicked")
// }
    render(){
        return (
            <>
            <h1>I am from class {this.state.name}  {this.state.age} </h1>
            <button onClick={this.doThis}  type="button" class="btn btn-danger m-5">Click Me From Class</button>
            </>
            
        )
    }
    
}

export default Helloclass 

