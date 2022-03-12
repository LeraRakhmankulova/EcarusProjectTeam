import style from "../Modal.module.sass";
import Icon from "../../Icon/Icon";
import Input from "../../ui/input/input";
import ModalButton from "../../ui/modal-button/button";
import {FC} from "react";
import { Formik } from 'formik';
import * as yup from "yup";
import {useStore} from "../../../utils/use-stores-hook";
import Modal from "../Modal";
import {ModalSign} from "../ModalSign/ModalSign";
import {ModalInputCode} from "../ModalInputCode/ModalInputCode";
import {ModalSignForCompany} from "../ModalSignForCompany/ModalSignForCompany";


export const ModalSignOrRegistration = () => {
    const handleModalSign = () => {
        setCurrentModal(<Modal children={<ModalSign/>}/>)
    }
    const handleModalInputCode = () => {
        setCurrentModal(<Modal children={<ModalInputCode/>}/>)
    }
    const handleModalForCompany = () => {
        setCurrentModal(<Modal children={<ModalSignForCompany/>}/>)
    }
    const { modalStore: {clearCurrentModal, setCurrentModal}} = useStore()
    const validationsSchema = yup.object().shape({
        phone: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^([+]?[0-9\s-\(\)]{3,25})*$/i, 'Телефон должен содержать только минимум 3 цифры')})
    // function onSubmit(values) {
    //     alert(JSON.stringify(values, null, 2));
    // }
    return (<div>
        <Formik
            initialValues={{
                phone: ''
            }}
            onSubmit={() => {
                setCurrentModal(<Modal children={<ModalInputCode/>}/>)}}
            validationSchema={validationsSchema}
        >
            {({ values, errors, touched,
                  handleChange, handleBlur,
                  isValid=false, dirty =false, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
            <div className={style.wrapper_title}>
                <div className={style.modal_title}>
                    <h3>Вход или регистрация</h3>
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
                    {touched.phone && errors.phone && <p style={{'color': 'red'}}>{errors.phone}</p>}
                </div>
                <div className={style.button_wrapper}>
                    <div className={style.button_wrapper_content}>
                        <ModalButton text='Получить код' color='white' background='#07C88E' width='100%'
                                     disabled={!(isValid || dirty)} onSubmit=''
                                     onClick='' type={`submit`}/>
                    </div>
                    <div className={style.link_text_wrapper}>
                        <div>
                            <a onClick={handleModalSign}>Я уже зарегистрировался(-ась)</a>
                        </div>
                    </div>
                    <div className={style.button_wrapper_content}>
                        <ModalButton text='Вход для партнёров' color='black' background='rgba(62, 80, 114, 0.08)' width='100%'
                                     disabled='' onSubmit=''
                                     onClick={handleModalForCompany}
                                     type=''/>
                    </div>
                </div>
            </div>
        </form> )}
        </Formik>
                </div>
    );
}
