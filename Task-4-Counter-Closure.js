// Task 4:Explanation

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = makeCounter();
counter1();
counter1();

const counter2 = makeCounter();
counter2();

//Output:
// 1
// 2
// 1

// Explanation:
// Every call to makeCounter() creates a new local count variable
// counter1 keeps a closure over the first count variable
// Its first call prints 1 and its second call prints 2
// counter2 is created by another call to makeCounter(), so it gets
// a separate count variable starting from 0
// Therefore, counter2() prints 1
