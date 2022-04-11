import style from './Modal.module.sass';
import { FC } from 'react';

interface Props {}

export const Modal: FC<Props> = ({children }) => {
	return (
		<div className={style.modal_content}>
			<div className={style.overlay}>
				<div className={style.modal}>
					<div className={style.modal_wrapper}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
