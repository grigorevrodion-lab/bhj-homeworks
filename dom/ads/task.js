// Находим все ротаторы на странице, чтобы каждый работал независимо.
const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');

  function rotate() {
    const activeCase = rotator.querySelector('.rotator__case_active');
    const activeIndex = Array.from(cases).indexOf(activeCase);

    activeCase.classList.remove('rotator__case_active');

    const nextIndex = activeIndex === cases.length - 1 ? 0 : activeIndex + 1;
    const nextCase = cases[nextIndex];

    nextCase.classList.add('rotator__case_active');
    nextCase.style.color = nextCase.dataset.color;

    setTimeout(rotate, Number(nextCase.dataset.speed));
  }

  const firstActiveCase = rotator.querySelector('.rotator__case_active');

  firstActiveCase.style.color = firstActiveCase.dataset.color;
  setTimeout(rotate, Number(firstActiveCase.dataset.speed));
});