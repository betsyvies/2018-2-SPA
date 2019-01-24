import { objTemp } from './tempString.js';

const changeTmp = (hash) => {
  switch (hash) {
    case '':
    case '#':
    case '#/': { return showTmp('home') }
    case '#/catalogo':
    case '#/accesorios':
    case '#/lugares': {
      const id = hash.split('/')[1];
      return showTmp(id);
    }
    default: return showTmp('different')
  }
}

const showTmp = tmp => {
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = ''
  sectionMain.innerHTML = objTemp[tmp]
}

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);