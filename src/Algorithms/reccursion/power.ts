/** @format */

const exp = (base: number, power: number): number => {
  if (power === 1) return base;
  return (base *= exp(base, power - 1));
};
console.log(exp(2, 3));
