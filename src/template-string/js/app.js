import { home } from './view/homeView.js/index.js';
import { catalogo } from './view/catalogoView.js';
import { accesorios } from './view/accesoriosView.js';
import { different } from './view/differentView.js';
import { lugares } from './view/lugaresView.js'

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/home');
  } else if (hash === '#/catalogo' || hash === '#/accesorios' || hash === '#/lugares') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/different');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById("container");
  container.innerHTML = '';
  switch (router) {
    case 'home':
      container.appendChild(home());
      break;
    case 'catalogo':
      container.appendChild(catalogo());
      break;
    case 'accesorios':
      container.appendChild(accesorios());
      break;
    case 'lugares':
      container.appendChild(lugares());
      break;
    default:
      container.appendChild(different())
      break;
  }
}

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)


/*import { objTemp } from './tempString.js';

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
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
;*/