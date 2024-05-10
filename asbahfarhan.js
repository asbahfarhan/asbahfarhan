// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var luigismarker = L.marker([40.68965691085725, -73.96537769031497]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>Luigi's Pizza</b><br>Best pizza on Dekalb Ave<br>
    <img src="https://aurashktest.github.io/aurashktest/images/luigis.png" style="width: 100px; height: auto;">
`).openPopup();


