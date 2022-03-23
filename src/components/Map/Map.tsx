import { FC } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import styles from '../Map/Map.module.sass'

interface Props { }

const Map: FC<Props> = ({ children }) => {

    return (
        <div>
            <MapContainer
                center={[55.7887, 49.1221]}
                zoom={3}
                zoomControl={false}
                style={{ height: '100vh', width: '100%' }}
            >
                <div className={styles.parent_content}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </div>

                <div className={styles.children_content}>
                    {children}
                </div>
                <ZoomControl position='topright' />

            </MapContainer>
        </div>
    )
}

export default Map;
