import { Button } from '@mui/material'
import TextFields from './FormElemets/TextFields'
import LoginButton from './FormElemets/Buttons/LoginButton'

type ImageType = {
  src: string
}
const SideImage = ({ src }: ImageType) => {
  return (
    <div className='h-full w-full'>
      <img className='h-full w-full object-cover rounded-lg ' src={src} alt="image1" />
    </div>

  )
}

export default SideImage





