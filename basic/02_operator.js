// 1. 문자열 연결 연산자//
//+

console.log('10') //문자
console.log(10) //숫자
console.log('10' + 2) //숫자
console.log(typeof ('10' + 2)) //숫자

//2.산술연산자

console.log(100 + 10)
console.log(100 - 10)
console.log(100 * 10)
console.log(100 ** 10) //100에 10승
console.log(100 / 10)
console.log(100 % 10)
console.log(99 % 10) //나누고남은수

//3.증감연산자

let number = 8
console.log(number)
number++
console.log(number)
number--
console.log(number)

let num1 = 10
let num2 = ++num1
console.log(num1, num2)

let count1 = 10
let count2 = count1++
console.log(count1, count2)

let x = 10
let y = 5
x += y //x+y=x
console.log(x)

// 5. 비교연산자

console.log(1000 < 100)
console.log(1000 <= 100)
console.log(1000 > 100)
console.log(1000 >= 100)

// 6. 논리연산자

// ||(or)-역슬러쉬쉬프트, &&(and), !(not)

let a = 100 > 50 //true
let b = 10 < 5 //fale
let c = true //true

// ||=> 하나라도맞으면 true
console.log(a || b || c)

// &&=> 전부맞아야 true 하나라도 틀리면안됨
console.log(a && b && c)

// !!=> 값을반대로바꾼다.
b = !b
console.log(b)

// // 7.동등. 일치연산자
// =
// ==
// ===
const value1 = '100'
const value2 = 100

console.log(value1 == value2)
console.log(value1 === value2)

console.clear()
console.log('\\\\')
console.log(0 == false)
console.log(1 == true)
console.log(0 === false)
console.log(1 === true)
console.log('' == false)
console.log('' === true)
console.log()
