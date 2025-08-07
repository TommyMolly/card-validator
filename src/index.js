import './styles.css';

import visaImg from './images/visa.png';
import mastercardImg from './images/mastercard.png';
import mirImg from './images/mir.png';

import { setupPaymentSystemHighlight, setupValidation } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const logosContainer = document.createElement('div');
  logosContainer.className = 'payment-systems';

  const createLogo = (src, alt, system) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.dataset.system = system;
    return img;
  };

  logosContainer.append(
    createLogo(visaImg, 'Visa', 'visa'),
    createLogo(mastercardImg, 'Mastercard', 'mastercard'),
    createLogo(mirImg, 'Mir', 'mir')
  );

  body.appendChild(logosContainer);

  // Ввод номера карты
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter card number';
  input.id = 'cardNumber';
  body.appendChild(input);

  // Кнопка валидации
  const button = document.createElement('button');
  button.id = 'validateBtn';
  button.textContent = 'Click to Validate';
  body.appendChild(button);

  // Сообщение 
  const message = document.createElement('div');
  message.className = 'message';
  message.id = 'message';
  body.appendChild(message);

  setupPaymentSystemHighlight(input, logosContainer);

  setupValidation(button, input, message);
});
