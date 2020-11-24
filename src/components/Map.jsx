// import React from 'react' deprecated no need to import react
import { useState } from "react";
import GoogleMap from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
  });
  return (
    <div className="mapClass">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_CLOUD_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMap>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 39.0837,
    lng: -111.7973,
  },
  zoom: 6,
};

export default Map;
