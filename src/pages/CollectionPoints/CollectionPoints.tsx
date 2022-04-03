import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass';
import search from '../../assets/images/search.svg'
import Trail from '../../components/spring/Trail';


const CollectionPoints = () => {

    return (
        <div>
            <div className={styles.main_content}>
                <input placeholder='Поиск' className={styles.input} />
                <div className={styles.select_wrapper}>
                    <select className={styles.select_shop}>
                        <option value="" disabled selected>Выбрано 3 магазина</option>
                        <option>Пункт 1</option>
                    </select>
                    <select className={styles.select_material}>
                        <option value="" disabled selected>Материалы</option>
                        <option>Пункт 1</option>
                    </select>
                </div>
            </div>
            <Map></Map>
        </div>
    );
};

export default CollectionPoints;
