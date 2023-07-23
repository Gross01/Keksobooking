const succesMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');

document.body.addEventListener('click', () => {
  succesMessage.classList.add('visually-hidden');
  errorMessage.classList.add('visually-hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    succesMessage.classList.add('visually-hidden');
    errorMessage.classList.add('visually-hidden');
  }
});

