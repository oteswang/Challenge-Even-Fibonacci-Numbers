exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var fib = [];

  fib[0] = 0;
  fib[1] = 1;
  sumOfEvenFibs = 0;

    for (i = 2; i < Infinity; i++) {

      fib[i] = fib[i - 2] + fib[i - 1];
      // console.log(fib[i]);
      if (fib[i] > n) {
        break;
      }

      if (fib[i] % 2 === 0) {
        // console.log(fib[i]);
          sumOfEvenFibs += fib[i];
          // console.log(sumOfEvenFibs);
      }
    }
    return sumOfEvenFibs;
  };
