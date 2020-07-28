function curry(fn, ...args) {
  if (args.length === fn.length) {
    return fn(...args);
  } else {
    return function (...innerArgs) {
      return curry(fn, ...args.concat(innerArgs));
    }
  }
}

// example
// let supePower = carry(Math.pow);
// let powerOfTen = supePower(10);
// powerOfTen(2); // → 1000
