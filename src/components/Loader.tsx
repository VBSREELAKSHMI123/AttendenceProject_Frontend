import { CircularProgress } from '@mui/material'

const Loader = ({height}:{height?:string}) => {
    return (
        <div className={`w-full h-[${height}] flex justify-center items-center`}>
            <CircularProgress />
        </div>
    )
}

export default Loader