/////////////////////////////////////////////////////////
/////////////////SWITCH TEST////////////////////////
/////////////////SWITCH TEST////////////////////////
/////////////////SWITCH TEST////////////////////////
/////////////////////////////////////////////////////////

// const num = 50;
// switch (num) {
//   case 49:
//     console.log('Wrong');
//     break;

//   case 100:
//     console.log('Wrong');
//     break;

//   case 50:
//     console.log('Correct');
//     break;

//   default:
//     console.log('Not this time');
//     break;
// }

/////////////////////////////////////////////////////////
/////////////////BOOLEAN TEST////////////////////////
/////////////////BOOLEAN TEST////////////////////////
/////////////////BOOLEAN TEST////////////////////////
/////////////////////////////////////////////////////////

// console.log(NaN || 2 || undefined); // 2

// console.log(NaN && 2 && undefined); // NaN

// console.log(1 && 2 && 3); // 3

// console.log((!1 && 2) || !3); // false

// console.log(25 || (null && !3)); // 25

// console.log(NaN || null || !3 || undefined || 5); //  5

// console.log(NaN || (null && !3 && undefined) || 5); // 5

// console.log((5 === 5 && 3 > 1) || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!'); // Done
// }

/////////////////////////////////////////////////////////
/////////////////FOR TEST////////////////////////
/////////////////FOR TEST////////////////////////
/////////////////FOR TEST////////////////////////
/////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

let result = '';

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);

let result2 = '';

for (let i = 0; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    result2 += '*';
  }

  result2 += '\n';
}

console.log(result2);
