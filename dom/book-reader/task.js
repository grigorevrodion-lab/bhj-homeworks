// Переключаем размер текста книги по нажатию на кнопки.
const fontSizeControls = document.querySelectorAll('.font-size');
const book = document.querySelector('#book');

fontSizeControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizeControls.forEach((item) => {
      item.classList.remove('font-size_active');
    });

    control.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (control.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    }

    if (control.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});