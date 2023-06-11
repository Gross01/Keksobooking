const priceSlider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const typesSelect = document.querySelector('#type');

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  step: 10,
  start: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  price.value = priceSlider.noUiSlider.get();
});

price.addEventListener('change', () => {
  priceSlider.noUiSlider.set(Number(price.value));
});

const typesPrices = {
  'flat': '1000',
  'bungalow': '0',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const types = ['flat', 'bungalow', 'hotel', 'house', 'palace'];


typesSelect.addEventListener('change', (evt) => {
  for (let i = 0; i < types.length; i++) {
    if (evt.target.value === types[i]) {
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: Number(typesPrices[types[i]]),
          max: 100000,
        },
        start: Number(typesPrices[types[i]]),
      });
    }
  }
});


