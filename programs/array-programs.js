var arr = [1, 'sdf', 2, 34];
// insert at spefic pos 
arr.splice(2, 0, 'Hello');
console.log(arr);
// remove at specific pos
arr.splice(2, 1);
// decsearse the array buy push and pop 
arr.length = 10; 
console.log(arr);
// remove first element
arr.shift();
console.log(arr);
// innsert at first element 
arr.unshift('Hello');
console.log(arr);
// insert in middle elemnt 
arr.splice(parseInt(arr.length/2), 0, 'New element middle', 'new 2');
console.log(arr);
// remove middle element 
arr.splice(parseInt(arr.length/2), 1);
console.log(arr);
// check element exits or not  include or 
console.log(arr.includes(2));
// check key is there or not 
arr = [
{id: 12, name: 'Hello'},
{id: 13, name: 'Hello'},
{id: 14, name: 'Hello'}]
console.log(arr);

var filter = arr.filter((ele)=>
 { ele.id < 13; }
);
console.log(filter);
// check value is there or not.