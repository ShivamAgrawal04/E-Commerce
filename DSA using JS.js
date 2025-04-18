// //    Qus
// a = 12;
// console.log(a);
// // Ans - 12

// //    Qus
// console.log(b);
// var b = 10;
// // Ans - undefined

// // Qus
// c = 10;
// console.log(c);
// var c;
// // Ans - 10

// // Note - If we adding a string or number then not say addtion here we say contatination

// // qus
// let d = 20;
// let e = 30;
// console.log("Sum of 20 and 30 " + d + e);
// // ans - Sum of 20 and 30 2030

// // qus
// let f = 20;
// let g = 30;
// console.log("Sum of 20 and 30 ", f + g);
// // ans - Sum of 20 and 30 50

// // qus
// let h = 20;
// let i = 30;
// console.log(h + i, " Sum of 20 and 30 ");
// // ans - 50 Sum of 20 and 30

// // qus
// let j = 20;
// let k = 30;
// console.log(j + 5 + " Sum of 20 and 30 ");
// // ans -50 Sum of 20 and 30 50

// // type coercion
// console.log("1" + 1);
// console.log("1" - 1);
// console.log("1" / 1);
// console.log("1" * 1);

// // Swapping
// let l = 10;
// let m = 20;
// let n = l;
// l = m;
// m = n;
// console.log(l, m);

// let o = 10;
// let p = 20;
// o = o + p;
// p = o - p;
// o = o - p;

// console.log(o, p);

// let q = 5,
//   r = 10;
// [q, r] = [r, q];
// console.log(q, r);

// let s = 5,
//   t = 10;
// s = s ^ t;
// t = s ^ t;
// s = s ^ t;
// console.log(s, t);

// // Qus Sum of All digits

// let sum = 0;
// let num = 1487451;
// while (num > 0) {
//   sum += num % 10;
//   num = (num / 10) | 0;
// }
// console.log(sum);

// let aa = 10;
// let aaa = ++(aa++);
// console.log(aaa);

// this gives an error because we not use post & pre operator direct on a value becuase here aa++ calculate first and the value is 10 then here its do ++10 so its not valid

// let arr = [];
// arr.push(10);
// arr.push(20);
// arr.pop(); // if array is empty then pop return undefined or if you give any value then it will ignore the value and delete the element from the last
// arr[2] = 10;
// console.log(arr);

// let arr = new Array(3); // if you create a array then it will reserver the size of you given value or if you need to extend dynamically then you will do because in js have not any fix type things
// // arr.push(10); // if we use this when you create a array using new keyword then it will store the value after your given size
// arr[0] = 10;
// console.log(arr);

let arr = [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1];
// // method 1
// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// method 2
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[j] = arr[i];
//     j++;
//   }
// }
// console.log(j);
// for (let i = j; i < arr.length; i++) {
//   arr[i] = 0;
// }
// console.log(arr);
