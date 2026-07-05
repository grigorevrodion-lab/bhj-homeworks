// Показываем блоки, когда они попадают в видимую область окна.
const revealElements = document.querySelectorAll('.reveal');

function checkRevealVisibility() {
  revealElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect();

    const isVisible =
      elementPosition.top < window.innerHeight &&
      elementPosition.bottom > 0;

    if (isVisible) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkRevealVisibility);

checkRevealVisibility();