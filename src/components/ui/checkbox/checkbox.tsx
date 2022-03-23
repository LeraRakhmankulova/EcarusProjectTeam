import { FC } from 'react'
import './checkbox.css'

interface ICheckboxProps{
    id?: number,
    label?:string,
    onChange?: any,
    isChecked?: boolean;
}
const Checkbox:FC<ICheckboxProps> = ({id, label, isChecked, onChange}) => {

    return (
        <div className="container_wrapper">
            <label className='container'>
                <input type="checkbox"
                id = {`${id}`}
                name={label}
                value={label}
                checked={isChecked}
                onChange={onChange}/>{label}
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Checkbox;