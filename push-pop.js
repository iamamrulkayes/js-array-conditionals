var numbers = [78, 45, 98, 45];
// use push to add element to an array as the last element array
// numbers.push(63);
// console.log(numbers);
var friends = ['balam', 'kalam', 'salam'];
friends.push('gelam');
friends.push('pailam');
// console.log(friends);

// use pop to get last element
// console.log(numbers);
// numbers.pop();
var element = numbers.pop();
// console.log(numbers);
// console.log(element);

var names = ['karim', 'jobbar', 'borkot'];
console.log(names);
// Result: [ 'karim', 'jobbar', 'borkot' ]
// to add an element from the beginning of an array
names.unshift('rahim');
console.log(names)
// Result: [ 'rahim', 'karim', 'jobbar', 'borkot' ]
// to remove an element from the beginning of an array
names.shift();
console.log(names);
// Result: [ 'karim', 'jobbar', 'borkot' ]