import { useMemo } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import styles from './index.module.css';

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
  });
  const center = useMemo(
    () => ({ lat: 50.24953394387112, lng: 28.720795202982252 }),
    []
  );

  return (
    <div className={styles.map}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
        />
      )}
    </div>
  );
};

export default MapComponent;
