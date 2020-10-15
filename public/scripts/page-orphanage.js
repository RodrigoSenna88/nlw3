const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-22.9481192, -43.1888842], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


// Create and add marker
L.marker([-22.9481192, -43.1888842], { icon }).addTo(map)

// Image Gallery
function selectImage(event) {
  const button = event.currentTarget

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  // Selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // Atualizar o container de imagem
  imageContainer.src = image.src

  //  Adicionar a classe .active para o botão que foi clicado
  button.classList.add("active")
}
    