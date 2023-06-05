const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFieldsets = mapFilters.querySelectorAll('fieldset');

const formDisabled = function () {

  form.classList.add('ad-form--disabled');
  fieldsets.forEach((element) => {
    element.setAttribute('disabled', '');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFieldsets.forEach((element) => {
    element.setAttribute('disabled', '');
  });
};

const formActive = function () {
  form.classList.remove('ad-form--disabled');
  fieldsets.forEach((element) => {
    element.removeAttribute('disabled', '');
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFieldsets.forEach((element) => {
    element.removeAttribute('disabled', '');
  });
};

export {formDisabled, formActive};
