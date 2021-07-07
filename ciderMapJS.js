L.mapbox.accessToken = 'pk.eyJ1IjoiaXRzdG9tbWlsbHMiLCJhIjoiY2txdGRuY2Y4MHMyNDJ3bzN0MDE4cnFpbyJ9.bUhw0_nhK0cIQ9TBQAJC7g';
var map = L.mapbox.map('map')
    .setView([38.91338, -77.03236], 16)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          -77.03221142292,
          38.913371603574
        ]
    },
    properties: {
        title: 'Peregrine Espresso',
        description: '1718 14th St NW, Washington, DC',
        // one can customize markers by adding simplestyle properties
        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'cafe'
    }
}).addTo(map);
