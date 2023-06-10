import {formActive} from './form.js';
import {popups} from './similar-items.js';

const addressInput = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');


const map = L.map('map-canvas')
  .on('load', () => {
    formActive();
  })

  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarker = L.marker(
  {
    lat: 35.681729,
    lng: 139.753927,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

addressInput.value = `${mainMarker.getLatLng().lat.toFixed(5)}, ${mainMarker.getLatLng().lng.toFixed(5)}`;

mainMarker.on('drag', (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

mainMarker.addTo(map);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

popups.forEach((popup) => {
  const lat = (popup.querySelector('.popup__lat').textContent);
  const lng = (popup.querySelector('.popup__lng').textContent);

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(popup);
});

resetButton.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 35.681729,
    lng: 139.753927,
  });

  map.setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);
});

