import React, { useEffect, useState } from 'react'
import ImageGlobal from './ImageGlobal';

const RoundedAvatar = () => {
    const [imgData, setImgData] = useState();

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch("https://api.unsplash.com/collections/762960/photos/?client_id=1ao32X-0VBKxpCompNw59iITtE8GU3EjqLvLhprNVq8&orientation=landscape&query=minimal")
            const data = await res.json()
            setImgData(data)
        }
        fetchImages()
    }, [])


    return (
        <>
            <div className="card-body card rounded-none mt-20 bg-base-100 shadow-xl h-screen w-[50%] flex justify-center items-center m-auto">
                <figure>
                    {!imgData ? <h1>TEST</h1> :
                    imgData.map((img) => {
                            return (
                            <ImageGlobal key={img.id} {...img}/>
                            )
                    })
    }
                </figure>

            </div>
            <h1 className='text-2xl font-navLinks font-bold mt-10 flex justify-center'>UNKNOWN MINIMAL2</h1>
        </>
    )
}

export default RoundedAvatar