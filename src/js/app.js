const changeView = hash => {
  switch (hash) {
    case '#/' : { return getView('views/home.html') }
    case '#/catalogo' : { return getView('views/catalogo.html') }
    case '#/accesorios' : { return getView('views/accesorios.html') }
    case '#/lugares' : { return getView('views/lugares.html') }
    default: return console.log('404')
  }
}

const getView = route => {
  fetch('http://localhost:5000/' + route)
  .then(response => response.text())
  .then(html => showView(html));
}

const showView = html => {
  let sectionMain = document.getElementById('container');
  return sectionMain.innerHTML = html
}

getView('views/catalogo.html')

if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash);