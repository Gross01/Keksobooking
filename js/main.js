import {createMarkers} from './map.js';
import {getData} from './api.js';
import {formValidate} from './form-validate.js';
import {getNewFilteredMarkers, filterClickFunction} from './filter.js';
import {debounce} from './util.js';
import './slider.js';
import './submit-messages.js';

formValidate();

const RENDER_DELAY = 500;

getData((data) => {
  createMarkers(data);
  getNewFilteredMarkers(
    debounce(
      filterClickFunction,
      RENDER_DELAY),
    data
  );
});
