const tabBlocks = document.querySelectorAll('.tabs');

tabBlocks.forEach(function (tabBlock) {
  const tabs = Array.from(tabBlock.querySelectorAll('.tab'));
  const contents = tabBlock.querySelectorAll('.tab__content');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const tabIndex = tabs.indexOf(tab);

      tabs.forEach(function (item) {
        item.classList.remove('tab_active');
      });

      contents.forEach(function (content) {
        content.classList.remove('tab__content_active');
      });

      tab.classList.add('tab_active');
      contents[tabIndex].classList.add('tab__content_active');
    });
  });
});