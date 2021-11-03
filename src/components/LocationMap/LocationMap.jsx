import React from "react";
import './LocationMap.scss';
import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  return (
    <main className="map">
      <Map height={520} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </main>
  );
};

export default LocationMap;
