import { FC } from 'react';
import style from './aboutPerson.module.sass';
import ModalButton from '../ui/modal-button/button'

interface Props{
    name : string;
    phone: string;
    email: string | number;
    picture : string;
}


const AboutPerson:FC<Props> = ({name, phone, email, picture}) => {
    return (
        <div>
            <div className={style.wrapper_person_info}>
                <div className={style.wrapper_avatar}>
                    <img src={picture} />
                </div>
                <div className={style.person_name}>
                    {name}
                </div>
                <ul className={style.additional_info}>
                    <li>{phone}</li>
                    <li>{email}</li>
                </ul>
                <div>
                    <ModalButton text='Редактировать' color='black' background='rgba(62, 80, 114, 0.08);' width='22em'
                    disabled='' onClick='' type='' onSubmit=''/>
                </div>
            </div>
        </div>
    );
}

export default AboutPerson;