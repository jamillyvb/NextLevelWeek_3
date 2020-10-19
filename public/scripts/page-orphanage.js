// const options = {
//     dragging: false,
//     touchZoom: false,
//     doubleClickZoom: false,
//     scrollWheelZoom: false,
//     zoomControl: false,
// }

// // criar mapa
// const map = L.map('mapid').setView([-27.222633/*latitude */, -49.6455874/*longitude*/ ],/*zoom*/ 15)

// L.tileLayer(
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// // criar icon
// const icon = L.icon({
//     iconUrl: './img/map-marker.svg',
//     iconSize: [58, 68],
//     iconAnchor: [29, 68],/*onde estará ancorado*/
//     popupAnchor: [170, 2]
// }
// )

// // criar e adicionar marker
// L.marker([-27.222633, -49.6455874], { icon })
// .addTo(map)


// /* galeria de imagem*/

// function selectImage(event) {
    
//     const button = event.currentTarget

//     //remover classes .active
//     const buttons = document.querySelectorAll(".images button")
//     buttons.forEach(removeActiveClass)

//     function removeActiveClass(button){
//         button.classList.remove("active")
//     }
    
//     //selecionar a imagem clicada
//     const image = button.children[0]
//     const imageContainer = document.querySelector(".orphanage-details > img")

//     //atualizar o container de imagem
//     imageContainer.src = image.src

//     //adicionar a class . active para este botao
//     button.classList.add('active')
// }
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
  };
  
  const lat = document.querySelector("span[data-lat]").dataset.lat;
  const lng = document.querySelector("span[data-lng]").dataset.lng;
  
  const map = L.map("mapid", options).setView([lat, lng], 15);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  
  const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2],
  });
  
  L.marker([lat, lng], { icon }).addTo(map);
  
  /* image gallery */
  
  function selectImage(event) {
    const button = event.currentTarget;
  
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);
  
    function removeActiveClass(button) {
      button.classList.remove("active");
    }
  
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
  
    imageContainer.src = image.src;
  
    button.classList.add("active");
  }