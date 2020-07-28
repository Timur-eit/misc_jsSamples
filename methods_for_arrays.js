Array.prototype.insert = function(index, value) {
  return this.splice(index, 0, value);  
};

Array.prototype.average = function() {
  return this.reduce((a, b) => (a + b), 0) / this.length;
};

Array.prototype.cube = function() {
  return this.map(x => Math.pow(x, 3));
};



const numbers1 = [1, 2, 3];
numbers1.insert(1, 'hi');
console.log(numbers1); // [ 1, 'hi', 2, 3 ]

const numbers2 = [1, 2, 3];
console.log(numbers2.average()); // 2
console.log(numbers2.cube()); // [ 1, 8, 27 ]
