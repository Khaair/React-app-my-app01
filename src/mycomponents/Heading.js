import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Heading(props){

  function doThis(){
      alert("Button is clicked")
  }


    return(
        <div>
            <h1>I am {props.name} My Age: {props.age}</h1>
            <button onClick={doThis}  type="button" class="btn btn-danger m-5">Click Me</button>
        </div>

    )
}

export default Heading