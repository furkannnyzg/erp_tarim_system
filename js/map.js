// map.js
mapboxgl.accessToken = 'pk.eyJ1IjoiZnVya2FueXpnIiwiYSI6ImNsd2k3bncwdzBodTEyaXVrNG52bXA5cDQifQ.3V5xzM7SJP6mVZGmpq5KrQ'; // Kendi Mapbox erişim anahtarınızı buraya ekleyin
var map = new mapboxgl.Map({
    container: 'map', // Haritanın yerleştirileceği div'in id'si
    style: 'mapbox://styles/mapbox/streets-v11', // Harita stili
    center: [0, 0], // Başlangıç konumu [longitude, latitude]
    zoom: 2 // Başlangıç yakınlaştırma seviyesi
});

// Haritayı sürükleyebilme ve zoom özelliğini etkinleştirme
map.addControl(new mapboxgl.NavigationControl());

// Haritada belirli bir konumu işaretlemek için bir işaretçi ekleme
var marker = new mapboxgl.Marker()
    .setLngLat([0, 0]) // Koordinatları belirtin
    .addTo(map);

// Haritaya tıklama ile yeni bir işaretçi ekleme
map.on('click', function (e) {
    new mapboxgl.Marker()
        .setLngLat(e.lngLat)
        .addTo(map);
});
