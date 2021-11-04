import React from "react";
import './LocationMap.scss';
import { Map, Marker, ZoomControl } from "pigeon-maps";

const LocationMap = (props) => {
  const {center} = props;

  const mapCenter = center ? center.split(',').map(Number) : [51.507359, -0.136439]
  return (
    <main className="map">
      <Map center={mapCenter} defaultZoom={12} >
        <ZoomControl />
        <Marker width={50} anchor={mapCenter} color={'blue'} />
      </Map>
    </main>
  );
};

export default LocationMap;
