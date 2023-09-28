# Earthquake Map

## Project Overview

This project is a simple map generated using leaflet, that charts earthquake data provided by the [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

### Features
- The map will take the coordinates provided by USGS and plot a circle on the map. The circle size will be determined by the Magnitude of the earthquake, and the color of the circle will be determined by the depth of the earthquake.

- A legend in the bottom right will show the depth color scale.

### Technologies Used

- HTML: The structure of the website is created using HTML, providing the layout and content structure.

- CSS: CSS is used the fit the map to the window, and adjust the Legend.

- JavaScript: JavaScript is used to create functions that will generate and update the map using earthquake data.

- D3: The D3 library is used to read in data from a website JSON dictionary and update the HTML code to include a legend.

- leaflet: Leaflet is used to create the map and markers generated on the map.

### Resources

I used an example legend, [found here](https://codepen.io/haakseth/pen/KQbjdO), as the basis for my legend, as well as the associated CSS.
