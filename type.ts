// boolean

let isFlag: boolean = false;

// number 和javascript 中的number 一样，浮点数也是number类型

let delMax: number = 3000;
let delMin: number = 0.12;

// string

let name1: string = 'Jian.li';
let name2: string = `lijian`;

// Array

let list: number[] = [1, 2, 4];
let list1: Array<number> = [1, 2, 3, 4];

// 元组
/*
  已知的元素和类型的数据，各元素类型不必相同
*/

let x: [string, number];

x = ['xxxpz', 12];
// x = [23, 'xxxpz']; 错误的

// 枚举 enum

enum Color {
  Red,
  Green,
  Blue,
}
// 也可以指定元素编号 enum Color {Red= 1, Green = 5, Blue = 4} // 2 // 5
let c: Color = Color.Green;
console.log(c); // 1

// any

// void

function warnUser(): void {
  console.log('This is My Warning messages');
}

let unusevoid: void = undefined;
// 申明void后默认赋值为undefined || null, 没有什么作用

// ts 中 undefined || null 与void相似但没有申明作用

// Never 表示永远不存在的值
// never 函数返回的值

function error(message: string): never {
  throw new Error(message);
}

// object

// 类型断言

let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;
//let strLength: number = (someValue as string).length;

// 接口
interface CreateSquare {
  label: string;
  color?: string; // 不确定时可以使用 “？”， 可选属性
}
function createSquare(config: CreateSquare): void {
  console.log(config.label);
}

console.log(createSquare({ label: 'xxxpz' }));

// 只读属性 readonly

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 1, y: 2 };

// p1.x = 3; 不可改变的

// typescript 具有 ReadonlyArray<T>类型 它与Array<T> 类似， 只是去掉了可变方法

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[1] = 3; 只是可以读取

// typescript 面向对象

// class Site {
//   name(): void {
//     console.log('Runoob');
//   }
// }

// var obj = new Site();

// obj.name();

var Site = function() {
  function Site() {}
  Site.prototype.name;
};

// class person {
//   constructor() {}
//   name: string;
//   age: number;
// }

// const xxpz = new person().name;
