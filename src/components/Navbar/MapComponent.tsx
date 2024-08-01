import React from "react";
import {GoogleMap, LoadScript, Marker} from '@vis.gl/react-google-maps';
import './MapComponent.css';




<Map
defaultZoom={13}
defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
onCameraChanged={ (ev: MapCameraChangedEvent) =>
  console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
}>
</Map>