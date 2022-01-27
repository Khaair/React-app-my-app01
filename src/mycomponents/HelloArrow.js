import React from 'react'

const HelloArrow =()=>{
    
  function doThis(){
    alert("Button is clicked arrow")
}
    return(
        <>
        <h1>I am from arrow</h1>
        <button onClick={doThis}  type="button" class="btn btn-danger m-5">Click Me Arrow</button>
        </>
    )
}

export default HelloArrow