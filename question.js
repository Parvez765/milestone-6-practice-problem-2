1. What’s the difference between map, foreach, filter?

The forEach() method does not create a new array based on the given array. The map() method creates an entirely new array. 
The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.  
The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not 
execute the function for empty elements. The filter() method does not change the original array. 

2. What’s the difference between filter and find?

The difference between filter and find is that - filer return a new array of element which passes the test consition provided by a
function where find return only the first element of an array which passes the condition 

3. What is the difference between for..of and for..in?

for..in iterates over all enumerable property keys of an object. for..of iterates over the values of an iterable object 

4. How do you empty an array?

Splice the whole array. arr.splice(0, arr.length) This will remove all elements from the array and will actually clean the original array. 

5. Difference between class and object.

Object is an instance of a class. Class is a blueprint or template from which objects are created. 

6. What is a Prototype chain? Or how does inheritance work in JavaScript?

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a 
link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached
with null as its prototype.

7. What does destructing do in es6?

The destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes
it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays 
and objects and assign them to variables. 

8. Is optional chaining is same as ternary operator?

JavaScript's Optional Chaining Operator, also known as the conditional ternary operator is one of those cool new features in ES2020 

9. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation?

The dot notation is used mostly as it is easier to read and comprehend and also less verbose. 
The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable.
