import { FC } from 'react';
import styles from './SliderCard.module.sass';

interface Props {
  title: string;
  text: string;
  button_content: string;
  image: string;
  background_color: string;
}

const SliderCard: FC<Props> = ({ title, text, image, button_content, background_color }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content} style={{
        background: `${background_color}`,
      }}>
        <div className={styles.text}>
          <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div className={styles.button_wrapper}>
              <button>{button_content}</button>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default SliderCard;
