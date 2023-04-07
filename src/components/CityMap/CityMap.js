import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityMap.css';

function CityMap() {
  useEffect(() => {
    // Check if map container already has a map instance
    if (L.DomUtil.get('map')) {
      return;
    }

    const map = L.map('map').setView([43.057995419050556, -88.03764080719772], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    const spots = [
      {
        name: 'Kopp\'s Frozen Custard',
        location: [43.0423, -87.8909]
      },
      {
        name: 'Milwaukee Public Market',
        location: [43.0339, -87.9077]
      },
      {
        name: 'Lakefront Brewery',
        location: [43.0552, -87.9059]
      }
    ];

    spots.forEach(function(spot) {
      const marker = L.marker(spot.location).addTo(map);
      marker.bindPopup(spot.name);
    });
  }, []);

  return (
    <div id="map"></div>
  );
}

export default CityMap;
