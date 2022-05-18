/* global mapboxgl */

import { stations5, stations10 } from "./buffered.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [0, 52],
  zoom: 6,
});

map.on("load", () => {
  map.addSource("stations10", {
    type: "geojson",
    data: stations10,
  });
  map.addLayer({
    id: "stations10",
    type: "fill",
    source: "stations10",
    paint: {
      "fill-color": "#99d8c9",
      "fill-opacity": 0.5,
    },
  });
  map.addSource("stations5", {
    type: "geojson",
    data: stations5,
  });
  map.addLayer({
    id: "stations5",
    type: "fill",
    source: "stations5",
    paint: {
      "fill-color": "#99d8c9",
      "fill-opacity": 0.6,
    },
  });
});
