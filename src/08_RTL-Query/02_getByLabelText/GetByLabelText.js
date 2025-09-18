import React from 'react'

const GetByLabelText = () => {
  return (
    <div>
      <h1> RTL Query: getByLabelText </h1>

        {/* getByLabelText */}
      {/* <label htmlFor='user-name'> Username </label>
      <input type='text' id='user-name' defaultValue={"hello"} /> */}

      {/* <label htmlFor='skills'> Skills </label>
      <input type='checkbox' id='skills' /> */}


      {/* getAllByLabelText */}
      <label htmlFor='user-name1'> Username </label>
      <input type='text' id='user-name1' defaultValue={"hello"} />

      <label htmlFor='user-name2'> Username </label>
      <input type='text' id='user-name2' defaultValue={"hello"} />

      <label htmlFor='user-name3'> Username </label>
      <input type='text' id='user-name3' defaultValue={"hello"} />


    </div>
  )
}

export default GetByLabelText;
