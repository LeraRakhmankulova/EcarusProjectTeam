import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass';
import search from '../../assets/images/search.svg'

const CollectionPoints = () => {

    return (
        <div>
            <input placeholder='Поиск'
                style={{
                    position: 'absolute',
                    top: 150,
                    left: 150,
                    zIndex: 10000
                }} className={styles.input}
            />
            <select style={{
                position: 'absolute',
                top: 150,
                left: 800,
                zIndex: 10000
            }} className={styles.select}>
                <option value="" disabled selected>Выбрано 3 магазина</option>
                <option>Пункт 1</option>
            </select>
            <select style={{
                position: 'absolute',
                top: 150,
                left: 1100,
                zIndex: 10000
            }} className={styles.select}>
                <option value="" disabled selected>Материалы</option>
                <option>Пункт 1</option>
            </select>
            <Map></Map>
        </div>

    );
};

export default CollectionPoints;
