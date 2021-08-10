const docItems = document.querySelectorAll('.documentation__item');

if (docItems) {
  docItems.forEach(docItem => {
    let docButton = docItem.querySelector('.documentation__button');
    let docBox = docItem.querySelector('.documentation__box');

    docButton.addEventListener('click', () => {
      docButton.blur();
      docButton.classList.toggle('documentation__button--active');
      docItem.classList.toggle('documentation__item--active');
      docBox.classList.toggle('documentation__box--active');
    });
  })
}
