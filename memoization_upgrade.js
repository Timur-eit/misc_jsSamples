function slow2(x, y, z) { // several arguments
  for (let i = 0; i < 1e9; i++) {}  // some slow operation
  return x + y + z;
}

function memo(fn) {
  const start = new Date().getTime();
  let finish1;
  let finish2;

  let cache = new Map();

  return function(...args) {
    let key = hash(...args);
    if (cache.has(key)) {
      finish2 = new Date().getTime();
      return `Time if result is already in cache: ${finish2 - finish1}ms ${cache.get(key)}`;
    }
    let result = fn.call(this, ...args);
    cache.set(key, result);

    finish1 = new Date().getTime();
    return `Time if cache is empty: ${finish1 - start}ms ${result}`;
  };
}


function hash(...args) {
  return args.join('');
}


let memoized = memo(slow2);
console.log(memoized(2, 3, 3)); // => Time if cache is empty: 801ms 8
console.log(memoized(2, 3, 3)); // => Time if result is already in cache: 6ms 8




