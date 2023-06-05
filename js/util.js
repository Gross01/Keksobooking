function getRandomPositiveFloat (a, b, digits=1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

// eslint-disable-next-line no-unused-vars
function getRandomIntegralDigital () {
  let result =  getRandomPositiveFloat(0, 10, 0);

  if (result < 10 && result > 0) {
    result = `0${  result}`;
  }

  return result;
}

// eslint-disable-next-line no-unused-vars
function getRandomArrayElement (arr) {
  return arr[getRandomPositiveFloat(0, arr.length - 1, 0)];
}

// eslint-disable-next-line no-unused-vars
function getRandomNumberOfArrayElements (arr) {
  return arr.slice(getRandomPositiveFloat(0, arr.length - 1, 0));
}

export {getRandomPositiveFloat, getRandomIntegralDigital, getRandomArrayElement, getRandomNumberOfArrayElements};
