import { observer } from "mobx-react"
import { Modal } from './Modal';
import { useStore } from '../../utils/use-stores-hook';
import {ModalSign} from "./ModalSign/ModalSign";


const WelcomeModal = observer(() => {
    const { modalStore: { clearCurrentModal } } = useStore();
    return (<div></div>
        // <Modal children={<ModalSign onClose={}/>}></Modal>
    );
});
export default WelcomeModal;
