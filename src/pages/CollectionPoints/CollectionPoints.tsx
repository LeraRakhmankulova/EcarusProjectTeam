import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass'

const CollectionPoints = () => {

    return (
        <div>
        <div className={styles.input_wrappet}>
            <input placeholder='Поиск'/>
        </div>
        <Map>
        </Map>
        </div>
    );
};

export default CollectionPoints;
