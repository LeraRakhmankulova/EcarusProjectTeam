import { FC } from "react";
import style from './input.module.sass';

interface Props {
    placeholder: string;
    type: string;
    name: string;
    onChange:any;
    onBlur:any;
    value: string;
}
const Input: FC<Props> = ({ placeholder , type, name, onChange, onBlur, value}) => {
    return (
        <div className={style.input_wrapper}>
            <input placeholder={placeholder} type={type} name={name} onChange={onChange} onBlur={onBlur} value={value}/>
        </div>
    )
}

export default Input;