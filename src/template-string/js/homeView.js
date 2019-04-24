export const home = () => {
  const htmlContent = `
    <h2 class="text-center">¡Bienvenido a nuestra página!</h2>
    <figure class="text-center">
      <img class="image" src="http://olegif.com/bin/gifs/00/39/56.gif" alt="Conejo codeando">
    </figure>
  `;
  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = htmlContent;
  return divElement;
}
