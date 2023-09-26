//Url for the earthquake data
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Define a markerSize() function that will give each earthquake a marker size relative to the magnitude of the earthquake.
function markerSize(magnitude) {
  return magnitude * 15000;
}

function markerFill(depth) {
  return depth ;
}

function Features(eqData) {

  function markerData(features, layer) {
    layer.bindPopup(`<h3>${features.properties.title}</h3><hr><p>${new Date(features.properties.time)}</p>`);
  }
};

  
  d3.json(queryUrl).then(function (data) {
      
    console.log(data.features);
    
  
    let featureData = data.features;
  
    for (let i = 0; i < featureData.length; i++) {
      
      const coordinates = featureData[i].geometry.coordinates;
      const magnitude = featureData[i].properties.mag;

      // Create a LatLng object for the circle center.
      const latlng = L.latLng(coordinates[1], coordinates[0]);
      
      
      L.circle(latlng, {
        fillOpacity: markerFill(coordinates[2]),
        color: "green",
        fillColor: "green",
        radius: markerSize(featureData[i].properties.mag)
      }).bindPopup(`<h3>${featureData[i].properties.title}</h3><hr><p>${new Date(featureData[i].properties.time)}</p>`).addTo(myMap);
    }
});
