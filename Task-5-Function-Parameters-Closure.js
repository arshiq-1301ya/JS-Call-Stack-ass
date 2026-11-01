// Task 5: EXPLANATION

function logLater(id) {
  setTimeout(() => {
    console.log('ID is', id);
  }, 1000);
}

logLater(1);
logLater(2);
logLater(3);

// Output:
// ID is 1
// ID is 2
// ID is 3

// Explanation:
// logLater() is called three times with the DIFFRENT IDS 1, 2, and 3.
// Each function call has its own parameter value
// Each callback remembers its call's id through a closure
// All three timers have the same delay and are scheduled in this order
// Their callbacks therefore run in the order they were scheduled
// printing IDs 1, 2, and 3
