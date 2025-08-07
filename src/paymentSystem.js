export function detectPaymentSystem(number) {
  if (/^4/.test(number)) return 'visa';
  if (/^5[1-5]/.test(number) || /^2(2[2-9]|[3-6]|7[01])/.test(number)) return 'mastercard';
  if (/^220[0-4]/.test(number)) return 'mir';
  return null;
}
