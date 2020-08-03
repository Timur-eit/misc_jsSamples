function slow(x) { // some expensive fn
  for (let i = 0; i < 1e9; i++) {}
  return x;
}

function memo(fn) {
  const start = new Date().getTime();
  let finish1;
  let finish2;
  
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      finish2 = new Date().getTime();
      return `Result = ${cache.get(x)}. Time if result is already in cache: ${finish2 - finish1}ms`;
    }
    let result = fn(x);
    cache.set(x, result);    
    
    finish1 = new Date().getTime();
    return `Result = ${result}. Time if cache is empty: ${finish1 - start}ms`;
  };
}

let memoized = memo(slow);
console.log(memoized('some result')); // → Result = some result. Time if cache is empty: 804ms
console.log(memoized('some result')); // → Result = some result. Time if result is already in cache: 6ms
