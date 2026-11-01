// Task 1: Trace the Stack and Output Order

function greet() {
  console.log('Hi');
  sayBye();
}

function sayBye() {
  console.log('Bye');
}

greet();
console.log('Done');

//  Output:
//  Hi
//  Bye
//  Done

//  Explanation:
// First, greet() is called and pushed into the call stack
// It prints 'Hi' and then calls sayBye()
//  sayBye() prints 'Bye' and finishes
//  After sayBye() is removed from the stack, greet() also finishes
//  Finally, 'Done' is printed
