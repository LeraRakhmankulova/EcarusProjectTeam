import image from '../../../assets/images/rabbish.svg'
import Icon from '../../Icon/Icon';
import styles from '../BigMapCard/BigMapCard.module.sass'

const BigMapCard = () => {
  return (
    <div className={styles.just}>
      <div className={styles.back_btn}>
        <Icon name='back' width={15} height={20}/>
        <p>Вернуться назад</p>
      </div>
      <div className={styles.big_card_info}>
        <div className={styles.image}>
          <img src={image} />
        </div>
        <div className={styles.information}>
          <div className={styles.address}>
            <h3>​Казань, Кремлёвская, 88</h3>
            <p>+7 (917) 888 88 88</p>
          </div>
          <div className={styles.timetable}>
            <p>Пн - Пт 08:00 - 20:00</p>
            <p>Сб - Вс 10:00 - 18:00</p>
          </div>
          <div className={styles.places}>
            <h3>H&M</h3>
            <div className={styles.items}>
              <div className={styles.item}>Пластик: от 5 кг</div>
              <div className={styles.item}>Стекло: от 2 кг</div>
              <div className={styles.item}>Бумага: от 10 кг</div>
              <div className={styles.item}>Батареи: от 2 кг</div>
            </div>
          </div>
          <div className={styles.places}>
            <h3>Adidas</h3>
            <div className={styles.items}>
              <div className={styles.item}>Пластик: от 5 кг</div>
              <div className={styles.item}>Стекло: от 2 кг</div>
              <div className={styles.item}>Бумага: от 10 кг</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigMapCard;