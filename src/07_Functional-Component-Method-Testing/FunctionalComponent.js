import React, { useState } from 'react'

const FunctionalComponent = () => {

    const [data, setData] = useState("");

    const handleData = () => {
        setData("hello")
    }

  return (
    <div>
      <h2> Functional Component Method Testing </h2>
      <button data-testid="btn1" onClick={handleData}> Update </button>
      <h3> {data} </h3>
    </div>
  )
}

export default FunctionalComponent;
