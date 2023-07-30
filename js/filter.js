import {createMarkers, clearLayers, layerGroup} from "./map.js";
import {debounce} from './util.js';

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const features = document.querySelectorAll('.map__checkbox');

const typesFilter = (data) => {
  if (housingType.value !== 'any') {
    return data.offer.type === housingType.value;
  } else {
    return 1;
  }
};

const priceFilter = (data) => {
  if (housingPrice.value === 'middle') {
    return data.offer.price > 10000 && data.offer.price <= 50000;
  } else if (housingPrice.value === 'low') {
    return data.offer.price <= 10000;
  } else if (housingPrice.value === 'high') {
    return data.offer.price > 50000;
  } else {
    return 1;
  }
};

const roomsFilter = (data) => {
  if (housingRooms.value === '1') {
    return data.offer.rooms === Number(housingRooms.value);
  } else if (housingRooms.value === '2') {
    return data.offer.rooms === Number(housingRooms.value);
  } else if (housingRooms.value === '3') {
    return data.offer.rooms === Number(housingRooms.value);
  } else {
    return 1;
  }
};

const guestsFilter = (data) => {
  if (housingGuests.value === '1') {
    return data.offer.guests === Number(housingGuests.value);
  } else if (housingGuests.value === '2') {
    return data.offer.guests === Number(housingGuests.value);
  } else if (housingGuests.value === '0') {
    return data.offer.guests === Number(housingGuests.value);
  } else {
    return 1;
  }
};

const featuresFilter = (data) => {
  const dataFeatures = data.offer.features;
  const checkedValues = [];

  features.forEach((feature) => {
    if (feature.checked) {
      checkedValues.push(feature.value);
    }
  });

  if (dataFeatures) {
    return dataFeatures && checkedValues.every((value) => dataFeatures.includes(value));
  } else {
    return 1;
  }
};

const filterMarkers = (data) => {
  const types = data.filter(typesFilter);
  const price = types.filter(priceFilter);
  const rooms = price.filter(roomsFilter);
  const guests = rooms.filter(guestsFilter);
  const result = guests.filter(featuresFilter);
  return result;
};

const getFilterClickFunction = (data) => {
  layerGroup.clearLayers();
  const filteredData = filterMarkers(data);
  createMarkers(filteredData);
};

const getNewFilteredMarkers = (data) => {
  housingType.addEventListener('change', () => {
    getFilterClickFunction(data);
  });

  housingPrice.addEventListener('change', () => {
    getFilterClickFunction(data);
  });

  housingRooms.addEventListener('change', () => {
    getFilterClickFunction(data);
  });

  housingGuests.addEventListener('change', () => {
    getFilterClickFunction(data);
  });

  features.forEach((feature) => {
    feature.addEventListener('click', () => {
      getFilterClickFunction(data);
    });
  });
};

export {getNewFilteredMarkers};
