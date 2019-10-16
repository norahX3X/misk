
function sieveOfEratosthenes(start, end) {
  var primeArray = range(start, end)
  var rest;
  //nested for each to prime array 
  primeArray.forEach(num => {
    rest = primeArray.slice(primeArray.indexOf(num)+1)
    rest.forEach(notprime => {
      if (notprime % num == 0) {
        primeArray.splice(primeArray.indexOf(notprime), 1)
      }
    })
  });
//printing the array after filltering 
  console.log(primeArray);
  console.log(primeArray.length);
}

//calling the function
sieveOfEratosthenes(2, 120);

function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
}


