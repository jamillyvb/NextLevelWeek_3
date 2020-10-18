// criar mapa
const map = L.map("mapid").setView(
  [-27.222633 /*latitude */, -49.6455874 /*longitude*/],
  /*zoom*/ 15
)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

// criar icon
const icon = L.icon({
  iconUrl: "./img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68] /*onde estará ancorado*/,
  popupAnchor: [170, 2],
})


//na function a gente agrupa logicas
function addMarker({id, name, lat, lng}) {    

  //criar popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name}<a href="/orphanage?id=${id}><img src="/img/arrow-white.svg"></a>`)

  // criar e adicionar marker
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage ={
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})