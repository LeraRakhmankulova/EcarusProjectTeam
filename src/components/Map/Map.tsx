import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'


const Map = () => {

    return (
        <>
            <MapContainer
                center={[55.7887, 49.1221]}
                zoom={3}
                zoomControl={false}
                style={{ height: '100vh', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position='topright'/>
            </MapContainer>
        </>
    )
}

export default Map;
