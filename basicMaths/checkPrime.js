const checkPrime = (num) => {
  console.log(getAllDivisors(num));
  if (getAllDivisors(num).length > 2) return false;
  else return true;
};

const getAllDivisors = (num) => {
  const divisors = [];
  const sqrt = Math.sqrt(num);
  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors;
};

console.log(checkPrime(9));
