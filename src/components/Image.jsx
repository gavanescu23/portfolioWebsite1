import React from 'react'

const Image = (props) => {
  return (
    <img src={props.urls.full} alt={props.user.name} className='object-cover h-[600px] w-screen' loading='lazy'></img>
  )
}

export default Image