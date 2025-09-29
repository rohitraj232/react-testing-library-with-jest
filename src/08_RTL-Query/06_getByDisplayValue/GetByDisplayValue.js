import React from 'react'

const GetByDisplayValue = () => {
  return (
    <div>
      <h1> RTL Query: getByDisplayValue & getAllByDisplayValue </h1>

      {/* getByDisplayValue */}
      <input type='text' defaultValue={"hello"} />
      <textarea defaultValue={"hello world"} />
      <input type='radio' defaultValue={"male"} />

      {/* getAllByDisplayValue */}
      <input type='text' defaultValue={"multiplehello"} />
      <input type='text' defaultValue={"multiplehello"} />
    </div>
  )
}

export default GetByDisplayValue;
