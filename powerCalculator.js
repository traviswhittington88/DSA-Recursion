const powerCalculator = function(base, exp) {
  if (exp < 0 ) {
    return `exponent should be >= 0`
  } else if (exp === 1) {
  return base;
  }
  return base * powerCalculator(base, exp - 1)
}

console.log(powerCalculator(10, 2))