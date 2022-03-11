import ModalButton from '../ui/modal-button/button'
import style from './Modal.module.sass';
import { FC } from 'react';
import Input from '../ui/input/input';
import Icon from '../Icon/Icon';

interface Props {
}

export const Modal: FC<Props> = ({children }) => {
	return (
		<div className={style.overlay}>
			<div className={style.modal}>
				<div className={style.modal_wrapper}>
					{children}
				</div>
			</div>
		</div>
	);
}
export default Modal;
