import style from "../Modal.module.sass";
import Icon from "../../Icon/Icon";
import Input from "../../ui/input/input";
import ModalButton from "../../ui/modal-button/button";
import {Formik} from 'formik';
import * as yup from 'yup';
import Modal from "../Modal";
import {useStore} from "../../../utils/use-stores-hook";
import {ModalSignOrRegistrationForCompany} from "../ModalSignOrRegistrationForCompany/ModalSignOrRegistrationForCompany";
import {email, passw} from '../../../utils/use-data'

export const ModalSignForCompany = () => {
    const handleModalSignOrRegistrationForCompany = () => {
        setCurrentModal(<Modal children={<ModalSignOrRegistrationForCompany/>}></Modal>)
    }
    const {modalStore: {clearCurrentModal, setCurrentModal}, authenticationStore: {setAuthentication}} = useStore()
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Введите верный email'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 символов')
    })
    return (<div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, errors) => {
                    if (values.email === email && values.password === passw) {
                        setAuthentication(true);
                    } else {
                        values.email = '';
                        values.password = '';
                        errors.setStatus('Неверный email или пароль');
                    }
                }}
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
                                <h3>Вход</h3>
                            </div>
                            <div className={style.wrapper_exit_button}>
                                <button onClick={clearCurrentModal}>
                                    <Icon name='close' width='32' height='32'/>
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
                                {touched.password && errors.password &&
                                <p style={{'color': 'red'}}>{errors.password}</p>}
                            </div>
                            <div className={style.button_wrapper}>
                                <div className={style.button_wrapper_content}>
                                    <ModalButton text='Войти' color='white' background='#07C88E' width='100%'
                                                 disabled={!(isValid || dirty)}
                                                 onClick='' type={`submit`}/>
                                </div>
                                <div className={style.link_text_wrapper}>
                                    <div>
                                        <a onClick={handleModalSignOrRegistrationForCompany}>Войти с помощью смс</a>
                                    </div>
                                    <div>
                                        <a onClick={handleModalSignOrRegistrationForCompany}>Регистрация</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}
