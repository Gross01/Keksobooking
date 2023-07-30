const template = document.querySelector('#card').content;
const templatePopup = template.querySelector('article');

const translate = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const createPopup = function (element, data) {
  const popupsArray = [];
  for (let i = 0; i < data.length; i++) {
    const popup = element.cloneNode(true);

    const popupTitle = popup.querySelector('.popup__title');
    popupTitle.textContent = data[i].offer.title;

    const popupLat = popup.querySelector('.popup__lat');
    const popupLng = popup.querySelector('.popup__lng');
    popupLat.textContent = data[i].location.lat;
    popupLng.textContent = data[i].location.lng;

    const popupAddress = popup.querySelector('.popup__text--address');
    popupAddress.textContent = data[i].offer.adress;

    const popupPrice = popup.querySelector('.popup__text--price');
    popupPrice.textContent = `${data[i].offer.price  }₽/ночь`;

    const popupType = popup.querySelector('.popup__type');
    popupType.textContent = translate[data[i].offer.type];

    const popupTime = popup.querySelector('.popup__text--time');
    popupTime.textContent = `Заезд после ${  data[i].offer.checkin  }, выезд до ${  data[i].offer.checkout}`;

    const popupCapacity = popup.querySelector('.popup__text--capacity');
    popupCapacity.textContent = `${data[i].offer.rooms  } комнаты для ${  data[i].offer.guests  } гостей`;

    const popupFeatures = popup.querySelector('.popup__features');

    if (data[i].offer.features) {
      popupFeatures.innerHTML = '';

      data[i].offer.features.forEach((feature) => {
        const featureElement = document.createElement('li');
        featureElement.classList.add('popup__feature');
        featureElement.classList.add(`popup__feature--${feature}`);
        popupFeatures.append(featureElement);
      });
    }

    const popupDescription = popup.querySelector('.popup__description');
    popupDescription.textContent = data[i].offer.description;

    const popupPhotos = popup.querySelector('.popup__photos');
    popupPhotos.removeChild(popupPhotos.children[0]);

    if (data[i].offer.photos) {
      data[i].offer.photos.forEach((src) => {
        const image = document.createElement('img');
        image.classList.add('popup__photo');
        image.src = src;
        image.alt = data[i].offer.description;
        popupPhotos.append(image);
      });
    }

    const popupAvatar = popup.querySelector('.popup__avatar');
    popupAvatar.src = data[i].author.avatar;

    popupsArray.push(popup);
  }
  return popupsArray;
};

export {createPopup, templatePopup};


