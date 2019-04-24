export const accesorios = () => {
  const htmlContent = `
    <h2 class="text-center">Accesorios</h2>
    <figure>
        <img src="https://static.wixstatic.com/media/219d1c_75df2dac805b4fc8af4a6cd8628124b9~mv2.jpg/v1/crop/x_0,y_110,w_600,h_380/fill/w_114,h_72,al_c,q_80,usm_0.66_1.00_0.01/219d1c_75df2dac805b4fc8af4a6cd8628124b9~mv2.webp" alt="Casa">
        <img src="https://static.wixstatic.com/media/219d1c_0e76d356599541e7bafee776754d0ca1~mv2.jpg/v1/fill/w_124,h_98,al_c,q_80,usm_0.66_1.00_0.01/219d1c_0e76d356599541e7bafee776754d0ca1~mv2.webp" alt="Comedero">
        <img src="https://static.wixstatic.com/media/219d1c_9ff95027b7c94efa8a027a4579fb03e9~mv2.jpg/v1/crop/x_43,y_41,w_214,h_228/fill/w_96,h_102,al_c,q_80,usm_0.66_1.00_0.01/219d1c_9ff95027b7c94efa8a027a4579fb03e9~mv2.webp" alt="Bebedero">
        <img src="https://static.wixstatic.com/media/219d1c_9731ca523bda481a98aa3074c6b7932b~mv2.jpg/v1/fill/w_131,h_108,al_c,q_80,usm_0.66_1.00_0.01/219d1c_9731ca523bda481a98aa3074c6b7932b~mv2.webp" alt="Camita">
    </figure>
  `;
  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = htmlContent;
  return divElement;
}
