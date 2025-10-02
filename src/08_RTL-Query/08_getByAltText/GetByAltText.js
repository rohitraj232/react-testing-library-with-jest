import React from 'react'

const GetByAltText = () => {
  return (
    <div>
      <h1> RTL Query: getByAltText & getAllByAltText </h1>

      {/* getByAltText */}
      <img alt='image' src={"https://cdn-icons-png.flaticon.com/256/919/919827.png"} />


      {/* getAllByAltText */}
      <img alt='image1' src={"https://cdn-icons-png.flaticon.com/256/919/919827.png"} />
      <img alt='image1' src={"https://cdn-icons-png.flaticon.com/256/919/919827.png"} />
    </div>
  )
}

export default GetByAltText;
