import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass'

const CollectionPoints = () => {

    return (
        <Map>
            <div className={styles.input_wrappet}>
                <input placeholder='Поиск'/>
            </div>
        </Map>
    );
};

export default CollectionPoints;
