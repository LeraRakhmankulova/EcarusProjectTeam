import style from "../layouts/Modal.module.sass";
import Icon from "../Icon/Icon";
import Input from "../ui/input/input";
import ModalButton from "../ui/modal-button/button";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useStore } from "../../utils/use-stores-hook";
import Modal from "../layouts/Modal";
import { ModalSignOrRegistration } from "./ModalSignOrRegistration";
import { ModalSignForCompany } from "./ModalSignForCompany";
import { phone_num, passw } from "../../utils/use-data";
import axios from "axios";


export const ModalSign = () => {
    const login = (phone: string, password: string) => {
        const data = {
          "login": `${phone}`,
          "password": `${password}`
        };
    
//{"id":"dd10cddf-f94a-4699-b21e-e3bebe45710a","photo_url":null,"firstname":null,"lastname":null,"username":"Валерия Рахманкулова","email":"raxmankulova.v@mail.ru","phone_number":"89520362386","password":null,"balance":0,"role":{"name":"USER","localizedName":"Роль пользователь"}}

        axios.post('https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login', data).then((res: any) => {
        //   const { token, ...data } = res;
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('user', JSON.stringify(data));
        //   if( res.data.code == 200)
          console.log(res.data.code)      //   if(response.data.code == 200){
        //     console.log("Login successfull");
        //     return (<Redirect to="/Game.js" />);
        //   console.log(JSON.stringify(data));
        }).catch(
          err => {
            console.log(err)
          });
      }
    const handleModalSignOrRegistration = () => {
        setCurrentModal(<Modal children={<ModalSignOrRegistration />} />)
    }
    const handleModalForCompany = () => {
        setCurrentModal(<Modal children={<ModalSignForCompany />} />)
    }
    const { modalStore: { clearCurrentModal, setCurrentModal }, authenticationStore: { setAuthentication } } = useStore()
    const validationsSchema = yup.object().shape({
        phone: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/^([+]?[0-9\s-\(\)]{3,25})*$/i, 'Телефон должен содержать только минимум 3 цифры'),
        password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 цифр или латинских букв')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    phone: '',
                    password: ''
                }}
                // onSubmit={(values, errors) => {
                //     if (values.phone === phone_num && values.password === passw) {
                //         setAuthentication(true);
                //     } else {
                //         values.phone = '';
                //         values.password = '';
                //         errors.setStatus('Неверный телефон или пароль');
                //     }
                // }}
                onSubmit={values => login(values.phone, values.password)}
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
                                    <Icon name='close' width='32' height='32' />
                                </button>
                            </div>
                        </div>
                        <div className={style.content_wrapper}>
                            <div className={style.input_wrapper}>
                                <Input placeholder='Телефон' type={`text`}
                                    name={`phone`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone} />
                                {touched.phone && errors.phone && <p style={{ 'color': 'red' }}>{errors.phone}</p>}
                                <Input placeholder='Пароль' type={`password`}
                                    name={"password"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                                {touched.password && errors.password &&
                                    <p style={{ 'color': 'red' }}>{errors.password}</p>}
                            </div>
                            <div className={style.button_wrapper}>
                                <div className={style.button_wrapper_content}>
                                    <ModalButton text='Войти' color='white' background='#07C88E' width='100%'
                                        disabled={!(isValid || dirty)}
                                        onClick='' type={`submit`} />
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
                                        disabled='' onClick={login} type='' />
                                </div>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}
