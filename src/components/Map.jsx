import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Map = () => {
    return (
        <div className='mt-12'>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A marker for testing purposes.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
