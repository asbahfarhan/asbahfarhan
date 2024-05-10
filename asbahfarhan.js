// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164],13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var luigismarker = L.marker([40.57123511102176, -74.14576783441058]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>eggers ice cream parlor</b><br>eggers ice cream parlor<br>
    <img src=".png" style="width: 100px; height: auto;">
`).openPopup();




