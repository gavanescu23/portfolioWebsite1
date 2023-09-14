import React from 'react'

const ImageGlobal = (props) => {
  return (
    <img src={props.urls.full} alt={props.user.name} className='object-cover h-[450px] w-[450px]' loading='lazy'></img>
  )
}

export default ImageGlobal