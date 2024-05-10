// Initialize Leaflet map
var map = L.map(nymap).setView([40.681801312931455, -73.9571896025164], 10); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var luigismarker = L.marker([40.571186213395016, -74.14575710557477]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>Eggers Ice Cream Parlor</b><br>
    Eggers Ice Cream Parlor<br>
    <img src="https://asbahfarhan.github.io/asbahfarhan/EggersIceCreamPalor.png" style="width: 100px; height: auto;">
`).openPopup();
