import {popups} from './similar-items.js';
import {formDisabled, formActive} from './form.js';
import {formValidate} from './form-validate.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(popups[0]);

formDisabled();
formActive();

formValidate();
