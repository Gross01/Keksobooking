import {getRandomPositiveFloat, getRandomIntegralDigital, getRandomArrayElement, getRandomNumberOfArrayElements} from './util.js';

const titles = [
  'Крутой пентхаус в центре Токио',
  'Квартира на лонг Айлен',
  'Студия на окраине города',
  'Трехкомнатная крвартира с панорамными окнами'
];

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const checkinAndCheckout = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpghttps://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const locationLat = getRandomPositiveFloat(35.65, 35.7, 5);
const locationLgn = getRandomPositiveFloat(139.7, 139.8, 5);

function createSimilarAd () {
  return {
    author: {
      avatar: `img/avatars/user${getRandomIntegralDigital()}.png`
    },
    offer: {
      title: getRandomArrayElement(titles),
      adress: `${locationLat}, ${locationLgn}`,
      price: Number(getRandomPositiveFloat(1000, 100000, 0)),
      type: getRandomArrayElement(types),
      rooms: Number(getRandomPositiveFloat(1, 10, 0)),
      guests: Number(getRandomPositiveFloat(10, 40, 0)),
      checkin: getRandomArrayElement(checkinAndCheckout),
      checkout: getRandomArrayElement(checkinAndCheckout),
      features: getRandomNumberOfArrayElements(features),
      description: 'В этих оппортаментах вы можете прекрасно провести время, отдохнуть, ну и до метро недолго идти!',
      photos: getRandomNumberOfArrayElements(photos)
    },
    location: {
      lat: Number(locationLat),
      lgn: Number(locationLgn)
    }
  };
}

// eslint-disable-next-line no-unused-vars
const similarAds = Array.from({length: 10}, createSimilarAd);

export {similarAds};
