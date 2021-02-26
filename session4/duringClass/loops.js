// We aim to use functional approaches when lopping
// like map, filter, reduce, find etc.

const failures = ["misclick", "dfalling down", "skateboard acceident"];

// lop through using map print out each element

// failures.map((fail, index) => {
// 	console.log(fail, index);
// });

// same as above but in 1 line
failures.map((fail, index) => console.log(fail, index));

// const newF = failures.map((fail, index) => {
//     return fail;
// });

//same as above but in 1 line - does not need return 
const newF = failures.map((fail, index) => fail);

console.log();
console.log(newF);

