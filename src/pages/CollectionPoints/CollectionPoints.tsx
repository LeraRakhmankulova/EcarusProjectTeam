import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass';
import cardInfo from '../../assets/images/mapCard.svg'
import MapCard from '../../components/Cards/MapCard/MapCard';
import MapCardPlug from '../../components/Plugs/MapCardPlug/MapCardPlug';


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
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <MapCardPlug />
                        {/* <MapCard picture={cardInfo} address='ул.Кремлёвская, 88' description='Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...' /> */}
                    </div>
                    <div className={styles.card}>
                        <MapCardPlug />
                        {/* <MapCard picture={cardInfo} address='ул.Кремлёвская, 88' description='Стекло, бумага, металл, старая одежда, батареи' />*/}
                    </div> 
                    <div className={styles.card}>
                        <MapCard picture={cardInfo} address='ул.Кремлёвская, 88' description='Пластик, стекло, бумага, металл' />
                    </div>
                    <div className={styles.card}>
                        <MapCard picture={cardInfo} address='ул.Кремлёвская, 88' description='Стекло, бумага, металл, старая одежда, батареи' />
                    </div>
                </div>
            </div>
            <Map></Map>
        </div>
    );
};

export default CollectionPoints;
