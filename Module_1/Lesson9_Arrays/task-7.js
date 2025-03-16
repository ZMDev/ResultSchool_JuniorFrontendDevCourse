// JS Array Hometask #9.7

const arrayStr = ['b', 'd', 'c', 'a', 'e', 'f', 'g'];
// console.log(arrayStr.sort()); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// arrayStr.sort((a, b) => {
//     console.log(`a: ${a}, b: ${b}`)
// });

// arrayStr.sort((a, b) => {
//     if (a < b) {
//       return 1;
//     }
//     if (a > b) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log(arrayStr); 

const arrayNumber = [2, 4, 1, 3, 7, 6, 5];
// arrayNumber.sort((a, b) => {
//   return a - b;
// });
// console.log(arrayNumber);

// arrayNumber.sort((a, b) => {
//     return b - a;
// });
// console.log(arrayNumber);

// FYI: 
console.log(arrayNumber.sort());

const arraySplice = [1, 3, 5, 7, 9, 11];
arraySplice.splice(1, 3, 2, 2);
console.log('arraySplice:', arraySplice); // [1, 2, 2, 9, 11]

const arraySlice = [1, 3, 5, 7, 9, 11];
const slicedValues = arraySlice.slice(0, 3);
console.log('sliced values: ', slicedValues); // [1, 3, 5]
console.log('arraySlice: ', arraySlice); // [1, 3, 5, 7, 9, 11]
