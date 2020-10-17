// criar mapa
const map = L.map('mapid').setView([-27.222633/*latitude */, -49.6455874/*longitude*/ ],/*zoom*/ 15)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criar icon
const icon = L.icon({
    iconUrl: './img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],/*onde estará ancorado*/
    popupAnchor: [170, 2]
}
)

 //criar popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}
).setContent('Lar das Meninas <a href="orphanages.html?id=1" class="choose-orphanages"> <img src="./img/arrow-white.svg"></a>')


// criar e adicionar marker
L.marker([-27.222633, -49.6455874], { icon })
.addTo(map)
.bindPopup(popup)

