<template>
    <div id="map">
      <l-map :zoom="10" :center="[45.758, 4.765]" style="height: 500px; width: 100%;">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>
      </l-map>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    components: {
      LMap,
      LTileLayer,
    },
  };
  </script>
  
  <style scoped>
  #map {
    height: 500px;
    width: 100%;
  }
  </style>