const tela = window;
const container = document.querySelectorAll('[data-container]');
console.log(window);
console.log(container);

function removeContainer() {
  if (tela.innerWidth < 1250) {
    container.forEach((item) => {
      item.classList.remove('container');
    });
  } else {
    container.forEach((item) => {
      item.classList.add('container');
    });
  }
}

removeContainer();
