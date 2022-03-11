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

export const ModalSignForCompany: FC<Props> = ({onClose}) => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Введите верный email'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 символов')})
    return (<div>
        <Formik
            initialValues={{
                email: '',
                password: ''
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
                    <h3>Вход</h3>
                </div>
                <div className={style.wrapper_exit_button}>
                    <button onClick={onClose}>
                        <Icon name='close' width='32' height='32' />
                    </button>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.input_wrapper}>
                    <Input placeholder='Email' type={`text`}
                           name={`email`}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}/>
                    {touched.email && errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
                    <Input placeholder='Пароль' type={`password`}
                           name={"password"}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}/>
                    {touched.password && errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
                </div>
                <div className={style.button_wrapper}>
                    <div className={style.button_wrapper_content}>
                        <ModalButton text='Войти' color='white' background='#07C88E' width='100%'
                                     disabled={isValid && dirty}
                                     onClick={handleSubmit}
                                     type={`submit`}/>
                    </div>
                    <div className={style.link_text_wrapper}>
                        <div>
                            <a href=''>Войти с помощью смс</a>
                        </div>
                        <div>
                            <a href=''>Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
                </div> )}
        </Formik>
        </div>
    );
}
