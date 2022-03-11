import style from "../Modal.module.sass";
import Icon from "../../Icon/Icon";
import Input from "../../ui/input/input";
import ModalButton from "../../ui/modal-button/button";
import {FC} from "react";
import { Formik } from 'formik';
import * as yup from 'yup';


interface Props {
    onClose: () => void;
}

export const ModalInputCode: FC<Props> = ({onClose}) => {
    const validationsSchema = yup.object().shape({
        code: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9a-zA-Z]{4,}/g, "Введите действительный код")})
    return (<div>
        <Formik
            initialValues={{
                code: ''
            }}
            validateOnBlur
            onSubmit={(values) => { console.log(values) }}
            validationSchema={validationsSchema}
        >
            {({ values, errors, touched,
                  handleChange, handleBlur,
                  isValid=false, dirty =false, handleSubmit}) => (
                <div>
            <div className={style.wrapper_title}>
                <div className={style.modal_title}>
                    <h3>Ввести код</h3>
                </div>
                <div className={style.wrapper_exit_button}>
                    <button onClick={onClose}>
                        <Icon name='close' width='32' height='32' />
                    </button>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.input_wrapper}>
                    <Input placeholder='Код' type={`password`}
                           name={"code"}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.code}/>
                    {touched.code && errors.code && <p style={{'color': 'red'}}>{errors.code}</p>}
                </div>
                <div className={style.button_wrapper}>
                    <div className={style.button_wrapper_content}>
                        <ModalButton text='Отправить' color='white' background='#07C88E' width='100%'
                                     disabled={isValid && dirty}
                                     onClick={handleSubmit}
                                     type={`submit`}/>
                    </div>
                    <div className={style.link_text_wrapper}>
                        <div>
                            <a href=''>Не получил(-а) код</a>
                        </div>
                    </div>
                    <div className={style.button_wrapper_content}>
                        <ModalButton text='Вход для партнёров' color='black' background='rgba(62, 80, 114, 0.08)'
                                     width='100%' disabled='' onClick='' type='' />
                    </div>
                </div>
            </div>
                </div> )}
                    </Formik>
        </div>
    );
}
