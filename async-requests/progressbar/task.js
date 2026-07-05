// Отправляем выбранный файл через AJAX и обновляем прогресс загрузки.
const form = document.querySelector('#form');
const progress = document.querySelector('#progress');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', form.action);

  xhr.upload.addEventListener('progress', (progressEvent) => {
    if (progressEvent.lengthComputable) {
      progress.value = progressEvent.loaded / progressEvent.total;
    }
  });

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      progress.value = 1;
    }
  });

  xhr.send(formData);
});