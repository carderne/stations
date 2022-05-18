/* global mapboxgl turf */

import stations from "./stations.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FyZGVybmUiLCJhIjoiY2puMXN5cnBtNG53NDN2bnhlZ3h4b3RqcCJ9.eNjrtezXwvM7Ho1VSxo06w";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/carderne/cl0rvsxn200ce14jz3q5j5hco?fresh=true",
  center: [0, 52],
  zoom: 6,
});

const stationsBuf = turf.buffer(stations, 10, {units: "miles"});

map.on("load", () => {
  map.addSource("stations", {
    type: "geojson",
    data: stationsBuf,
  });
  map.addLayer({
    id: "stations",
    type: "fill",
    source: "stations",
    paint: {
      "fill-color": "#99d8c9",
      "fill-opacity": 0.1,
    },
  });
  map.addLayer({
    id: "stations-line",
    type: "line",
    source: "stations",
    paint: {
      "line-color": "#99d8c9",
      "line-opacity": 0.5,
    },
  });
});
