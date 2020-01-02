// boolean
var isFlag = false;
// number 和javascript 中的number 一样，浮点数也是number类型
var delMax = 3000;
var delMin = 0.12;
// string
var name1 = 'Jian.li';
var name2 = "lijian";
// Array
var list = [1, 2, 4];
var list1 = [1, 2, 3, 4];
// 元组
/*
  已知的元素和类型的数据，各元素类型不必相同
*/
var x;
x = ['xxxpz', 12];
// x = [23, 'xxxpz']; 错误的
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// 也可以指定元素编号 enum Color {Red= 1, Green, Blue}
var c = Color.Green;
console.log(c); // 1
