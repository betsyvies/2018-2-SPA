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