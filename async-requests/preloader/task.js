// Загружаем курсы валют и скрываем индикатор после получения данных.
const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

const xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses',
);

xhr.addEventListener('load', () => {
  if (xhr.status < 200 || xhr.status >= 300) {
    return;
  }

  const courses = JSON.parse(xhr.responseText);
  const currencies = courses.response.Valute;

  items.innerHTML = '';

  Object.values(currencies).forEach((currency) => {
    const item = document.createElement('div');
    const code = document.createElement('div');
    const value = document.createElement('div');
    const currencyText = document.createElement('div');

    item.classList.add('item');

    code.classList.add('item__code');
    code.textContent = currency.CharCode;

    value.classList.add('item__value');
    value.textContent = currency.Value;

    currencyText.classList.add('item__currency');
    currencyText.textContent = 'руб.';

    item.append(code, value, currencyText);
    items.append(item);
  });

  loader.classList.remove('loader_active');
});

xhr.send();