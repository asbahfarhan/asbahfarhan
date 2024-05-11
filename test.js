// Initialize Leaflet map
var map = L.map('nymap').setView([40.58360202329053, -74.15065653451148], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var luigismarker = L.marker([40.57407929007067, -74.14246335141281]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>EggsIceCream Parlor/br>
    <img src="https://asbahfarhan.github.io/asbahfarhan/EggersIceCreamPalor.png" style="width: 100px; height: auto;">
`).openPopup();
