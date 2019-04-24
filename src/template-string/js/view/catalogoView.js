export const catalogo = () => {
  const htmlContent = `
    <h2 class="text-center">Conejos</h2>
    <figure>
      <img src="https://static.wixstatic.com/media/219d1c_d724cd1eea3e4043816ee43d5141a317~mv2.png/v1/fill/w_108,h_101,al_c,q_80,usm_0.66_1.00_0.01/219d1c_d724cd1eea3e4043816ee43d5141a317~mv2.webp" alt="Conejo">
      <img src="https://static.wixstatic.com/media/219d1c_1b65514082fe413e8bbacd3246748889~mv2.png/v1/fill/w_103,h_93,al_c,q_80,usm_0.66_1.00_0.01/219d1c_1b65514082fe413e8bbacd3246748889~mv2.webp" alt="Conejo">
      <img src="https://static.wixstatic.com/media/219d1c_d724cd1eea3e4043816ee43d5141a317~mv2.png/v1/fill/w_108,h_101,al_c,q_80,usm_0.66_1.00_0.01/219d1c_d724cd1eea3e4043816ee43d5141a317~mv2.webp" alt="Conejo">
      <img src="https://static.wixstatic.com/media/219d1c_1b65514082fe413e8bbacd3246748889~mv2.png/v1/fill/w_103,h_93,al_c,q_80,usm_0.66_1.00_0.01/219d1c_1b65514082fe413e8bbacd3246748889~mv2.webp" alt="Conejo">
    </figure>
  `;
  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = htmlContent;
  return divElement;
}