import {FC} from 'react'
import { IconType } from "react-icons";


interface ISquareButton {
    Icon: IconType
    onClick?: () => void
    number?: number
}

const SquareButton : FC<ISquareButton> = ({Icon, onClick, number}) => {
    return (
     
        <button onClick={onClick} className='h-10 w-10 bg-black flex items-center justify-center hover:bg-[#0e0e0e] transition-colors duration-200 relative'>
            {!!number && (<span className=' flex h-4 w-4 items-center justify-center rounded-full bg-red p-0.5 text-[0.75rem] text-white absolute -top-1 -right-1 '>
                {number}
            </span>)}
            <Icon color='#7D7D7D' size={20}/>
        </button>
    
    )
}

export default SquareButton;