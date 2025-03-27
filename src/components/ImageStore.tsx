import React, { useEffect, useState } from 'react'
import Slide1 from "../assets/images/attendence1.jpeg"
import Slide2 from "../assets/images/attendence2.jpeg"
import Slide3 from "../assets/images/attendence3.jpeg"
import Slide4 from "../assets/images/attendence4.jpeg"

const ImageStore = () => {
  const image = [Slide1, Slide2, Slide3, Slide4]

  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const ImageInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % image.length)
    }, 2000);
    return () => (clearInterval(ImageInterval))
  }, [])


  return (
    <img className='h-full w-full object-cover rounded-lg ' src={image[current]} />
  )
}

export default ImageStore