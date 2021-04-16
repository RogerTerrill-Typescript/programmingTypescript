// type Cat = { name: string; purrs: boolean };
// type Dog = { name: string; barks: boolean; wags: boolean };
// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;
//
// // Cat
// let a: CatOrDogOrBoth = {
//   name: 'Bonkers',
//   purrs: true,
// };
//
// // Dog
// a = {
//   name: 'Domino',
//   barks: true,
//   wags: true,
// };
//
// // Both
// a = {
//   name: 'Donkers',
//   barks: true,
//   purrs: true,
//   wags: true,
// };
//
// let b: CatAndDog = {
//   name: 'Domino',
//   barks: true,
//   purrs: true,
//   wags: true,
// };
//
// let c = [1, 2, 3];
//
// let d: [number, number, string?] = [1, 2, 's'];
//
// let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire'];
//
// let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'];
//
// let as: readonly number[] = [1, 2, 3];
// let bs: readonly number[] = as.concat(4);
// let three = bs[2];
// as[4] = 5; // Error
// as.push(6); // Error
//
// type A = readonly string[];
// type B = ReadonlyArray<string>;
// type C = Readonly<string[]>;
// type D = readonly [number, string]; // Tuple
// type E = Readonly<[number, string]>; // Tuple

// ===ENUMS===
// const enum Language {
//   English,
//   Spanish,
//   Russian,
// }
//
// let myFirstLanguage = Language.Russian;
// console.log(myFirstLanguage);

// ===FUNCTIONS===
// function sum(...numbers: number[]) {
//   return Array.from(arguments).reduce((total, n) => total + n, 0);
// }
//
// sum(1, 2, 3);

// ===GENERATORS===
// function* createFibonacciGenerator() {
//   let a = 0;
//   let b = 1;
//   while (a < 2) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
//
// let fibonaciGenerator = createFibonacciGenerator();
// console.log(fibonaciGenerator.next()); // { value: 0, done: false }
// console.log(fibonaciGenerator.next()); // { value: 1, done: false }
// console.log(fibonaciGenerator.next()); // { value: 1, done: false }
// console.log(fibonaciGenerator.next()); // { value: undefined, done: true }

// ===CALL SIGNATURES===
type Sum = (a: number, b: number) => number;
const sum: Sum = (a, b) => {
  return a + b;
};

type Log = (message: string, userId?: string) => void;

let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};
