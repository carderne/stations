/* global mapboxgl */

import buffered from "./buffered.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [0, 52],
  zoom: 6,
});

map.on("load", () => {
  map.addSource("stations", {
    type: "geojson",
    data: buffered,
  });
  map.addLayer({
    id: "stations",
    type: "fill",
    source: "stations",
    paint: {
      "fill-color": "#99d8c9",
      "fill-opacity": 0.8,
    },
  });
});
