function timed(fn, ...args) {
  const start = new Date().getTime();
  if (args.length === fn.length) {
    let result = fn(...args);
    const finish = new Date().getTime();
    return `function works for ${finish - start} ms\n${result}`;
  } else {
    return function (...innerArgs) {
      return timed(fn, ...args.concat(innerArgs));
    }
  }
}


// example
function countToOneBln(startNumber) {
  let result;
  for (let i = startNumber; i <= 1e9; i++) {
    result = i;
  }
  return result;
}

const fn = timed(countToOneBln);
const timedOfCounter = fn();
timedOfCounter(1); // ↓
// function works for 840 ms
// 1000000000