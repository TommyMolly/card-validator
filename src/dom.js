export function setupPaymentSystemHighlight(inputElement, logosContainer) {
  inputElement.addEventListener('input', () => {
    const value = inputElement.value.replace(/\D/g, '');
    import('./paymentSystem.js').then(({ detectPaymentSystem }) => {
      const system = detectPaymentSystem(value);

      logosContainer.querySelectorAll('img').forEach(img => {
        img.classList.remove('highlight');
      });

      if (system) {
        const active = logosContainer.querySelector(`img[data-system="${system}"]`);
        if (active) active.classList.add('highlight');
      }
    });
  });
}

export function setupValidation(buttonElement, inputElement, messageElement) {
  buttonElement.addEventListener('click', async () => {
    const cardNumber = inputElement.value.replace(/\s+/g, '');

    if (!/^\d{13,19}$/.test(cardNumber)) {
      messageElement.style.color = 'red';
      messageElement.textContent = 'Card number must be 13–19 digits.';
      return;
    }

    const { luhnCheck } = await import('./cardValidator.js');

    if (!luhnCheck(cardNumber)) {
      messageElement.style.color = 'red';
      messageElement.textContent = 'Invalid card number.';
      return;
    }

    messageElement.style.color = 'green';
    messageElement.textContent = 'Valid card number!';
  });
}
