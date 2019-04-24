export const lugares = () => {
  const htmlContent = `
    <h2 class="text-center">Lugares de adopción</h2>
    <figure>
      <img src="https://static.wixstatic.com/media/219d1c_3f2cb90b904640c886436c744d32960a~mv2.jpg/v1/fill/w_170,h_106,al_c,q_80,usm_0.66_1.00_0.01/Pet%20Gae%20Logo%20principal%20conejosperu_com%209.webp" alt="Lugares de ventas">
      <img src="https://static.wixstatic.com/media/219d1c_3a52752501a449a2a4468f619e301722~mv2.jpg/v1/fill/w_200,h_108,al_c,q_80/Toys%20Rabbis%20en%20conejosperu_com%20928084697.webp" alt="Lugares de ventas">
      <img src="https://static.wixstatic.com/media/219d1c_be8c3413e4e64eccbf4093e0fb34c7ba~mv2.jpg/v1/fill/w_131,h_144,al_c,q_80,usm_0.66_1.00_0.01/Pet%20shop%20Dinky%20conejosperu_com%20tel%2092808.webp" alt="Lugares de ventas">
    </figure>
  `;
  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = htmlContent;
  return divElement;
}