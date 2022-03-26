import { FC } from "react";
import style from './input.module.sass';

interface Props {
    placeholder: string;
    type: string;
    name: string;
    onChange: any;
    onBlur: any;
    value: string;
    ref: string;
}
const Input: FC<Props> = ({ placeholder, type, name, onChange, onBlur, value, ref }) => {
    return (
        <div className={style.input_wrapper}>
            <input placeholder={placeholder} type={type} name={name} onChange={onChange} onBlur={onBlur} value={value}
                   ref={ref}/>
        </div>
    )
}

export default Input;