import style from "../layouts/Modal.module.sass";
import Icon from "../Icon/Icon";
import Input from "../ui/input/input";
import ModalButton from "../ui/modal-button/button";
import {Formik} from 'formik';
import * as yup from 'yup';
import {useStore} from "../../utils/use-stores-hook";
import Modal from "../layouts/Modal";
import {ModalSignOrRegistration} from "./ModalSignOrRegistration";
import {ModalSignForCompany} from "./ModalSignForCompany";
import {phone_num, passw} from "../../utils/use-data";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const ModalSign = () => {
    // const navigate = useNavigate();
    // const goToProfile = () => navigate('/profile');
    const handleModalSignOrRegistration = () => {
        setCurrentModal(<Modal children={<ModalSignOrRegistration/>}/>)
    }
    const handleModalForCompany = () => {
        setCurrentModal(<Modal children={<ModalSignForCompany/>}/>)
    }
    const {
        modalStore: {clearCurrentModal, setCurrentModal},
        authenticationStore: {setAuthentication, getToken, isSign}
    } = useStore()
    const validationsSchema = yup.object().shape({
        username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 цифр или латинских букв')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values, errors) => {
                    axios.post('/login', {
                        login: values.username,
                        username: values.username,
                        password: values.password
                    }).then((r) => {
                        setAuthentication(true,{token: r.data.token, login: r.data.username, email: r.data.email})
                        // goToProfile();
                        if (isSign()) {
                            setCurrentModal(<Modal children={<ModalSignForCompany/>}/>)
                        }
                    })
                    console.log(values.username, values.password)
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
                                <Input placeholder='Имя' type={`text`}
                                       name={`username`}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.username}/>
                                {touched.username && errors.username &&
                                <p style={{'color': 'red'}}>{errors.username}</p>}
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
                                        <a onClick={handleModalSignOrRegistration}>Войти с помощью смс</a>
                                    </div>
                                    <div>
                                        <a onClick={handleModalSignOrRegistration}>Регистрация</a>
                                    </div>
                                </div>
                                <div className={style.button_wrapper_content}>
                                    <ModalButton text='Вход для партнёров' color='black'
                                                 background='rgba(62, 80, 114, 0.08)' width='100%'
                                                 disabled='' onClick={handleModalForCompany} type=''/>
                                </div>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}
