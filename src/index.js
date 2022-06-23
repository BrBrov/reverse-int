module.exports = function reverse (n) {
  n =  Array.from(Math.abs(n).toString())
  n = n.reverse().join('');  
  return Number.parseInt(n, 10);
}

// let n = -192;
// let {log} = console;
// let b = Array.from(Math.abs(n).toString());
// n = b.reverse().join('');
// // n = +n;
// log(typeof n);

