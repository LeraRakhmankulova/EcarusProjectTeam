import { FC } from 'react'
import './checkbox.css'

interface Props{
    title:string
}

const Checkbox:FC<Props> = ({title}) => {
    return (
        <div className="container_wrapper">
            <label className='container'>
                <input type="checkbox"/>{title}
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Checkbox;