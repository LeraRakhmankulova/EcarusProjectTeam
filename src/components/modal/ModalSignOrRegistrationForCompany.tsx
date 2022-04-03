import style from "../layouts/Modal.module.sass";
import Icon from "../Icon/Icon";
import Input from "../ui/input/input";
import ModalButton from "../ui/modal-button/button";
import {Formik} from 'formik';
import * as yup from 'yup';
import Modal from "../layouts/Modal";
import {useStore} from "../../utils/use-stores-hook";
import {ModalSignForCompany} from "./ModalSignForCompany";
import {ModalInputCode} from "./ModalInputCode";

export const ModalSignOrRegistrationForCompany = () => {
    
    const handleModalSignForCompany = () => {
        setCurrentModal(<Modal children={<ModalSignForCompany/>}/>)
    }
    const handleModalInputCodeForCompany = () => {
        setCurrentModal(<Modal children={<ModalInputCode/>}/>)
    }
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStore()
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[a-zA-Z0-9]{3,}/g, 'Введите верное наименование организации'),
        email: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Введите верный email'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 символов')
    })
    return (<div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                onSubmit={handleModalInputCodeForCompany}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={style.wrapper_title}>
                            <div className={style.modal_title}>
                                <h3>Регистрация</h3>
                            </div>
                            <div className={style.wrapper_exit_button}>
                                <button onClick={clearCurrentModal}>
                                    <Icon name='close' width='32' height='32'/>
                                </button>
                            </div>
                        </div>
                        <div className={style.content_wrapper}>
                            <div className={style.input_wrapper}>
                                <Input placeholder='Наименование организации' type={`text`}
                                       name={`name`}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.name}/>
                                {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
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
                                {touched.password && errors.password &&
                                <p style={{'color': 'red'}}>{errors.password}</p>}
                            </div>
                            <div className={style.button_wrapper}>
                                <div className={style.button_wrapper_content}>
                                    <ModalButton text='Получить код' color='white' background='#07C88E' width='100%'
                                                 disabled={!(isValid || dirty)} onClick='' type={`submit`}/>
                                </div>
                                <div className={style.link_text_wrapper}>
                                    <div>
                                        <a onClick={handleModalSignForCompany}>Я уже зарегистрировался(-ась)</a>
                                    </div>
                                </div>
                                <div className={style.button_wrapper_content}>
                                    <ModalButton text='Вход для партнёров' color='black'
                                                 background='rgba(62, 80, 114, 0.08)' width='100%'
                                                 disabled='' onClick={handleModalSignForCompany} type=''/>
                                </div>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}
