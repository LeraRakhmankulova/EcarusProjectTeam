import style from "../layouts/Modal.module.sass";
import qr_code from '../../assets/images/qr_code.png';
import ModalButton from "../ui/modal-button/button";
import { useStore } from "../../utils/use-stores-hook";


export const ModalQRCode = () => {
    const { modalStore: { clearCurrentModal, setCurrentModal },
        authenticationStore: { setAuthentication } } = useStore()
    return (<div>
        <div className={style.wrapper_title}>
            <div className={style.modal_title}>
                <h3>QR-код на покупку создан</h3>
            </div>
        </div>
        <div className={style.content_wrapper}>
            <div className={style.subtitle}>
                При оплате покажите его сотруднику на кассе
            </div>
            <div className={style.code}>
                <img src={qr_code} width={350}/>
                <div className={style.code_text}>
                    E25GHR0P
                </div>
                <div className={style.comment}>
                    Если не получается отсканировать QR-код, введите код<br></br>
                    вручную или продиктуйте сотруднику на кассе
                </div>
            </div>
            <div className={style.button_wrapper}>
                <div className={style.button_wrapper_content}>
                    <ModalButton text='Закрыть' color='white'
                        background='#07C88E'
                        width='100%' disabled='' onClick={clearCurrentModal} type='' />
                </div>
            </div>
        </div>
    </div>
    );
}
