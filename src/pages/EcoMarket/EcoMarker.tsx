import { observer } from "mobx-react";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import {ModalSign} from "../../components/modal/ModalSign/ModalSign";

const EcoMarket = observer(() => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
          {/*App*/}
          {/*<button onClick={handleModal}>Open modal</button>*/}
          {/*{isOpen && (<Modal children={<ModalSign onClose={handleModal}/>}></Modal>)}*/}
        </div>
    );
});

export default EcoMarket;
