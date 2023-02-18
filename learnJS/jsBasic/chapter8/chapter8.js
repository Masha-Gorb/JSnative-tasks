//task 1
let a = 1, b = 1;

let c = ++a; // c = 2
let d = b++; // d = 1
// a = 2; b = 2;

//task 2
// let a = 2;

let x = 1 + (a *= 2); // x = 5

//task 3
t1 = "" + 1 + 0; // '10'
t2 = "" - 1 + 0; // -1
t3 = true + false; // 1
t4 = 6 / "3"; // 2
t5 = "2" * "3"; // 6
t6 = 4 + 5 + "px"; // '9px'
t7 = "$" + 4 + 5; // '$45'
t8 = "4" - 2; //2
t9 = "4px" - 2; //NaN
t10 = "  -9  " + 5; // "  -9  5"
t11 = "  -9  " - 5; //-14
t12 = null + 1; // 1
t13 = undefined + 1; //NaN
t14 = " \t \n" - 2; // -2

//task 4
let ab = prompt("Первое число?", 1);
let bb = prompt("Второе число?", 2);

alert((+ab) + (+bb)); // 12