const getData = async (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // eslint-disable-next-line no-alert
        alert('Не удалось получить доступ к серверу, попробуйте перезагрузить страницу');
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    // eslint-disable-next-line no-alert
    .catch(() => alert('Не удалось получить доступ к серверу, попробуйте перезагрузить страницу'));
};

export {getData};


