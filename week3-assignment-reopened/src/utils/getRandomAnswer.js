export const getRandomAnswer = () => {
  const digits = [];
  while (digits.length < 3) {
    const n = Math.floor(Math.random() * 10);
    if (!digits.includes(n)) digits.push(n);
  }
  return digits.join('');
};
