import React from 'react'

const GetByRole = () => {
  return (
    <div>
      <h1> getByRole </h1>

      {/* <input type='text' defaultValue="hello" />
      <button> Click Me </button> */}

      <h2> Multiple Item with Role </h2>
      <h3> Custom Role </h3>
      <button> Click 1 </button>
      <button> Click 2 </button>

      <label htmlFor='input1'> User Name </label>
      <input type='text' id='input1' />

      <label htmlFor='input2'> Course Name </label>
      <input type='text' id='input2' />

      {/* non-role */}
      <div role='dv1'> lorem ispum </div>


      {/* getAllByRole */}
      <h2> RTK Query: getAllByRole </h2>
      <button> Click Me </button>
      <button> Click Me </button>
      <button> Click Me </button>
      <button> Click Me </button>
    </div>
  )
}

export default GetByRole;
