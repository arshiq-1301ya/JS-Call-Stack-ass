// Task 2: EXPLATIONS

setTimeout(() => console.log('One'), 3000);
setTimeout(() => console.log('Two'), 1000);
setTimeout(() => console.log('Three'), 2000);

//  Output:
// Two
// Three
// One

// Explanation:
// All three setTimeout calls run synchronously and schedule their callbacks
// The callback with a 1000 ms delay becomes ready first followed by
// the 2000 ms callback and then the 3000 ms callback
// The event loop runs each callback when the call stack is clear
// Note: setTimeout specifies a minimum delay, not an exact execution time
