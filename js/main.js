import {popups} from './similar-items.js';
import {formDisabled, formActive} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(popups[0]);

formDisabled();

