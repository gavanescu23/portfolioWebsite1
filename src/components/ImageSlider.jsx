import React, { useEffect, useState } from 'react'
import Image from './Image';

const ImageSlider = () => {
    const [imgData, setImgData] = useState();

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch("https://api.unsplash.com/collections/3331216/photos/?client_id=1ao32X-0VBKxpCompNw59iITtE8GU3EjqLvLhprNVq8&orientation=landscape&query=minimal")
            const data = await res.json()
            setImgData(data)
        }
        fetchImages()
    }, [])

    return (
        <>
        {!imgData ? <h1 className='text-3xl text-bold font-navLinks flex justify-center items-center'>Loading...</h1> :
            <div className="carousel carousel-center">               
                                {imgData.map((image) => {
                                    return (
                                    <div key={image.id} className="carousel-item">
                                    <Image key={image.id} {...image}/>
                                    </div>
                                    )
                                })}
                </div>
}
        </>
    )
}

export default ImageSlider