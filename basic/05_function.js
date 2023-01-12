// ..function 함수

// 1. 함수의선언과 호출

// function name(params) {

// }

// function sayhello(){
//     //실행
//     //실행2
//     //여러게실행가능
//     //
// }

function sayHello() {
    console.log('안녕하세요~~~')
    console.log('니얼굴이세요')
}
// const sayHello = function () {
//     console.log('안녕하세요~~')
// }

sayHello()

// 2.매개변수 parameter
function printMessage(message) {
    console.log(message)
}

printMessage('ㅎㅎㅎ')
printMessage('니얼굴')

// 3.기본파라미터

function showInfo(title, name = 'jabs') {
    console.log(`${title} by ${name}`)
}

showInfo('gerga', 'pika')
showInfo('풍경')

// 4.rest 파라미터 /spread 연산자//전역변수 global variable

function printAll(...items) {
    for (let i = 0; i < items.length; i++) console.log(items[i])
}

printAll('봄', '여름', '가을', '겨울', '안영', '커피', '바람')

// 5.scope
let movie = '하하하'

function printMovie() {
    let myMovie = '생활의발견' //지역변수 local variable
    console.log(movie)
    console.log(myMovie)
}

printMovie()

console.log(movie)
// console.log(mymovie)

// 6.return

function plus(a, b) {
    return a + b
    // console('값을 돌려주었습니다')
}

const sum = plus(20, 30)

console.log(sum)

const result = plus(12, 45)

console.log(result)

// 7.콜백함수
const printPicaso = function () {
    console.log('i am Picaso...')
}

function printJabs() {
    console.log('I am jobs...')
}

const call = function (myName, printPicaso, printJabs) {
    if (myName == 'Picaso') {
        printPicaso()
    } else {
        printJabs()
    }
}

call('Picaso', printPicaso, printJabs)

// 8.화살표함수 arrow fuction

// function add(a, b) {
//     return a + b
// }

// const add = function (a, b) {
//     return a + b
// }

const add = (a, b, c) => a + b + c

const total = add(10, 20, 30)
console.log(total)
