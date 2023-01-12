// variable 변수
// var, let, const
// scope > 블럭

// 1.var
// 읽기, 쓰기 가능
// 블럭을무시한다

{
    var user = 'jonh'
    user = 'Alice'
    console.log(user)
}

console.log(user)

// 2.let
// 읽기, 쓰기 가능

{
    let title = 'html'
    console.log(title)

    title = 'css'
    console.log(title)
}

// console.log(title)

// 3.const
// 상수/읽기만가능.변하지않는다(덮어쓰지x)

{
    const subject = '야인시대'
    console.log(subject)

    // subject = '배트맨'
}

// 4.변수의 데이타 타입
// 원시데이타(primitive)
// Number, String, Boolean(참거짓), null(없다.비어있다.), undefined(정의되지않았다),
// Object:싱글데이타를 묶어놓은 데이타
// const myclass = {
//     subject: 'html',
//     date: '2022-12-13',
// }

// function :

// const hahaha = function () {
//     // 동작내용..할일을 적어준다
//     console.log('hahaha')
// }

// hahaha()

// nuber
const num = 100
const width = 10.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const firstname = 'jonh'
const lastname = 'snow'

console.log(firstname + '' + lastname)
console.log(`${firstname} ${lastname}`)

const a = 1 / 0
const b = -25 / 0
const c = 'html' / 10

console.log(a)
console.log(b)
console.log(c)

// string

const firstName = 'jonh'
const lastName = 'snow'
const fullname = firstName + lastName
console.log(fullname)
console.log(`${firstname} ${lastName}`)
