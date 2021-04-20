type Test<T, V> = {
  param: T;
  secondParam: V;
};

export class Demo {
  constructor() {}
  testFunction<T, V>(param: T, secondParam: V): Test<T, V> {
    console.log('I am generic function (calling) !!');
    console.log('value is::' + param);
    return { param, secondParam };
  }
}
console.log('Demo to show generics in Typescript. !!!');
let demo = new Demo();
let result1 = demo.testFunction('Hello I am string', 123);
let result2 = demo.testFunction(1000, '3');
let result3 = demo.testFunction(20.45, 'adfa');
let result4 = demo.testFunction('Z', 123);
let result5 = demo.testFunction(30, 99);
console.log('printing result from the generic function !!');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
