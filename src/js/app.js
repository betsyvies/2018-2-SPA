const getView = route => {
  fetch('http://localhost:5000/' + route)
  .then(response => response.text())
  .then(html => showView(html));
}

getView('views/catalogo.html')