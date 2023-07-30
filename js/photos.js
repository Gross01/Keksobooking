const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPreview = document.querySelector('#avatar-image');
const avatarFileChooser = document.querySelector('#avatar');
const housingPreview = document.querySelector('#housing-photo');
const housingFileChooser = document.querySelector('.ad-form__input');

const showPhotoPreview = (chooser, prewiew) => {
  chooser.addEventListener('change', () => {
    const file = chooser.files[0];
    const fileName = file.name.toLowerCase();

    const correctPicture = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (correctPicture) {
      prewiew.src = URL.createObjectURL(file);
      prewiew.style.width = '69px';
      prewiew.style.height = '69px';
      prewiew.style.borderRadius = '5px';
    }
  });
};

showPhotoPreview(avatarFileChooser, avatarPreview);
showPhotoPreview( housingFileChooser, housingPreview);

