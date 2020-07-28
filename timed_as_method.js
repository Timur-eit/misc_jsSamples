Object.defineProperty(Function.prototype, 'timed', {
  value: function(...args) {
    const start = new Date().getTime();
    if (args.length === this.length) {
      let result = this(...args);
      const finish = new Date().getTime();
      return `function works for ${finish - start}\n${result}`;
    } else {
      return function(...innerArgs) {
        return timed(...args.concat(...innerArgs));
      }
    }    
  }
});


// sample
function sum(a, b) {
  for (let i = 0; i < 1e8; i++) {}
  return a + b;
}

console.log( sum.timed(2, 2) ); // ↓
// function works for 132
// 4

console.log( Math.pow.timed(2, 23) ); // ↓
// function works for 0
// 8388608