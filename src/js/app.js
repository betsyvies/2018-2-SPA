/*window.addEventListener('load', () => {

})

const getHTML = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (callback && typeof callback === "function") {
      callback(this.responseXML);
    }
  };
  xhr.open("GET", url);
  xhr.responseType = "document";
  xhr.send();
};

getHTML("https://cors.io?https://google.com", response => {
  const html = response.documentElement.innerHTML;
  alert(html);
});

fetch("https://cors.io?https://google.com")
  .then(response => {
    return response.text();
  })
  .then(html => {
    alert(html);
  });
  */