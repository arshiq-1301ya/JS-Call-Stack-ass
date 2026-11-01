// Task3:> EXPLANATION

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//Output:
// 4
// 4
// 4

// Explanation:
// var creates one shared function-scoped variable named i
// The loop schedules three callbacks with delays of 1, 2, and 3 seconds
// The loop finishes before the callbacks run, and i becomes 4
// All callbacks refer to the same variable through their closure
// Therefore, each callback prints 4

// If var is replaced with let, each loop iteration gets its own binding
//
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }
//
// Output with let:
// 1
// 2
// 3
