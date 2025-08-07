export function luhnCheck(cardNumber) {
  const digits = cardNumber.split('').reverse().map(Number);
  const sum = digits.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      let doubled = digit * 2;
      if (doubled > 9) doubled -= 9;
      return acc + doubled;
    }
    return acc + digit;
  }, 0);

  return sum % 10 === 0;
}
