import { FC } from 'react';
import styles from './CardButton.module.sass';


interface Props{
    content:string;
    background: string | number;
    picture:string;
}

const CardButton: FC<Props> = ({content, background, picture}) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.content}
            style={{
                background: `${background}`
            }}>
                <img src={picture}></img>
                {content}
            </button>
        </div>
    )
}

export default CardButton;