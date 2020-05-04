function Fibonacci(num) {
  var old = 0;
  var newNum = 1;
  var result = 0;
  while (newNum <= num) {
    if (newNum % 2 !== 0) {
      result += newNum;
    }

    newNum += old;
    old = newNum - old;
  }

  return result;
}


console.log(Fibonacci(8));