const changeTmp = (hash) => {
  switch (hash) {
    case '' :
    case '#' :
    case '#/' : { return getTmp('home') }
    case '#/catalogo' :
    case '#/accesorios' :
    case '#/lugares' : { 
      const id = hash.split('/')[1];
      return getTmp(id); 
    }
    default: return getTmp('404')
  }
}

const getTmp = id => {
  const template = document.getElementById(id)
  showTmp(template.content.cloneNode(true))
}

const showTmp = html => {
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = ''
  sectionMain.appendChild(html)
}

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);