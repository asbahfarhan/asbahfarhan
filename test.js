// Initialize Leaflet map
var map = L.map('nymap').setView([40.58360202329053, -74.15065653451148], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





//Add a marker to the map for New York City
var luigismarker = L.marker([40.571210662212856, -74.14542451166442]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
   <b>Eggers IceCream Parlor</b>
   <img src="https://asbahfarhan.github.io/asbahfarhan/EggersIceCreamParlor.png" style="width: 250px; height: 250px">
//`).openPopup();


// Add a marker to the map for New York City
var prattinstmarker = L.marker([40.69099831383163, -73.96332055134893]).addTo(map);


// Add a popup to the marker
prattinstmarker.bindPopup(`
    <b>Pratt Institute</b><br>Sculpture Garden and green space <br>
    <img src="https://asbahfarhan.github.io/asbahfarhan/pratt.jpg" style="width: 100px; height: auto;">
`).openPopup();



 // Load the GeoJSON line file
fetch('https://asbahfarhan.github.io/asbahfarhan/AsbahsMorningRoute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});



 // Load the GeoJSON line file
fetch('https://asbahfarhan.github.io/asbahfarhan/Asbah_EveningRoute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

// Load the GeoJSON polygon file
fetch('https://asbahfarhan.github.io/asbahfarhan/AsbahsMorning_RouteBuilding.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});


// Load the GeoJSON polygon file
fetch('https://asbahfarhan.github.io/asbahfarhan/AsbahsEveningRouteBuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});


var categoryColors = {
    "1": "red",
    "2": "orange",
    "3": "yellow",
    "4": "green",
    "X": "gray" // Default color for other categories
};
// Function to set style based on category
function getFeatureStyle(feature) {
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.6; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}


// Load the GeoJSON polygon file
fetch('https://asbahfarhan.github.io/asbahfarhan/hev.geojson')
.then(response => response.json())
.then(geojson => {
    // Add the GeoJSON polygons to the map with customized style
    L.geoJSON(geojson, {
        style: getFeatureStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});
