const formTitle = document.querySelector('#title');
const addressInput = document.querySelector('#address');
const form = document.querySelector('.ad-form');
const price = form.querySelector('#price');
const typesSelect = document.querySelector('#type');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const rooms = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const featureCheckboxes = document.querySelectorAll('.features__checkbox');
const formDescription = form.querySelector('#description');
const succesMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');

const typesPrices = {
  'flat': '1000',
  'bungalow': '0',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const types = ['flat', 'bungalow', 'hotel', 'house', 'palace'];

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

function validatePrice () {
  for (let i = 0; i < types.length; i++) {
    if (typesSelect.value === types[i]) {
      return price.value >= Number(typesPrices[types[i]]);
    }
  }
}

function getMessageForPriceValidate () {
  for (let i = 0; i < types.length; i++) {
    if (typesSelect.value === types[i]) {
      return `Минимальная цена ${  typesPrices[types[i]]  }₽`;
    }
  }
}

function getCorrectPlacehoder () {
  for (let i = 0; i < types.length; i++) {
    if (typesSelect.value === types[i]) {
      price.placeholder = typesPrices[types[i]];
    }
  }
}

typesSelect.addEventListener('click', () => {
  getCorrectPlacehoder();
});

typesSelect.addEventListener('change', () => {
  price.value = '';
});

function timeCheckValidate () {
  return timeInSelect.value === timeOutSelect.value;
}

function roomsValidate () {
  if (rooms.value === '1') {
    return capacity.value === '1';
  } else
  if (rooms.value === '2') {
    return capacity.value === '1' || capacity.value === '2';
  } else
  if (rooms.value === '3') {
    return capacity.value === '1' || capacity.value === '2' || capacity.value === '3';
  } else
  if (rooms.value === '100') {
    return capacity.value === '0';
  }
}

function getRoomsValidateMessage () {
  if (rooms.value === '1') {
    return 'В однокомнатной квартире может быть только 1 гость';
  } else
  if (rooms.value === '2') {
    return 'В двухкомнатной квартире не может быть больше 2 гостей';
  } else
  if (rooms.value === '3') {
    return 'В трёхкомнатной квартире не может быть больше 3 гостей';
  } else
  if (rooms.value === '100') {
    return 'В такой квартире гояти не нужны';
  }
}

const clearForm = () => {
  formTitle.value = '';
  addressInput.value = '35.68173, 139.75393';
  typesSelect.value = 'flat';
  price.value = '0';
  rooms.value = '1';
  capacity.value = '3';
  timeInSelect.value = '12:00';
  timeOutSelect.value = '12:00';
  featureCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  formDescription.value = '';
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    fetch('https://25.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: new FormData(evt.target)
    }).then(() => {
      clearForm();
      succesMessage.classList.remove('visually-hidden');
    }).catch(() => {
      errorMessage.classList.remove('visually-hidden')
    });
  }
});

function formValidate () {
  pristine.addValidator(
    timeInSelect,
    timeCheckValidate,
    'Время выезда и заезда должно быть одинаковым'
  );

  pristine.addValidator(
    timeOutSelect,
    timeCheckValidate,
    'Время выезда и заезда должно быть одинаковым'
  );

  pristine.addValidator(
    price,
    validatePrice,
    getMessageForPriceValidate
  );

  pristine.addValidator(
    capacity,
    roomsValidate,
    getRoomsValidateMessage
  );
}

export {formValidate};
