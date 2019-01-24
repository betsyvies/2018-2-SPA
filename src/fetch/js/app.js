const changeView = hash => {
  switch (hash) {
    case '#/' : { return getView('views/home.html') }
    case '#/catalogo' : { return getView('views/catalogo.html') }
    case '#/accesorios' : { return getView('views/accesorios.html') }
    case '#/lugares' : { return getView('views/lugares.html') }
    default: return getView('views/404.html')
  }
}

const changeHome = () => {
  getView('views/home.html')
  window.location.hash = '/'
}

const getView = route => {
  fetch('https://betsyvies.github.io/2018-2-SPA/src/fetch/' + route)
  .then(response => response.text())
  .then(html => showView(html));
}

const showView = html => {
  let sectionMain = document.getElementById('container');
  return sectionMain.innerHTML = html
}

window.addEventListener('load', changeHome())
if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash);
