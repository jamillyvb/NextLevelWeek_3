// criar mapa
const map = L.map('mapid').setView([-27.222633/*latitude */, -49.6455874/*longitude*/ ],/*zoom*/ 15)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// criar icon
const icon = L.icon({
    iconUrl: './img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],/*onde estará ancorado*/
}
)

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//adicionar o campo de fotos

function addPhotoField() {

      //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

      //realizar o clone da ultima imagem adicionada de
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  
    //verficar se o campo esta vazio, se sim, não adicionar ao container de imagem
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //limpar o compo antes de adicionar ao container de imagens
    input.value = ""

      //adicionar o clone ao contanier de #imagens

    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return 
    }

    span.parentNode.remove()
}

//selecionar sim ou não
function toggleSelect(event) {

    //retirar a class .active do botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button){ button.classList.remove('active')})

    //colocar a class .active nesse botão
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
   
   //verificar se sim ou não
    input.value = button.dataset.value
}

 