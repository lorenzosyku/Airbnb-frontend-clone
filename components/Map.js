import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100",
    height:'100',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8
  });

  return (
    <ReactMapGL mapStyle='mapbox://styles/xhaxhilenzi/ckws2r3gy0phy14qh9j0xsfde'
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}>

      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => {
                setSelectedLocation(result);
              }}
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}></Popup>
          ) : (false)}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map;
