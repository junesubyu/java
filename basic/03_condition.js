//whrjs dustkswk - if, else if, else

const age = 30

if (age >= 20) {
    //조건이참일때
    console.log('성인입니다.')
} else {
    //조건이 아닐때
    console.log('미성년자입니다.')
}

const month = 10

if (month >= 3 && month <= 5) {
    console.log('spring')
} else if (month >= 6 && month <= 8) {
    console.log('summer')
} else if (month >= 8 && month <= 11) {
    console.log('fall')
} else {
    console.log('witer')
}

// 2.삼항연산자
// 조건 ? 값1 : 값2

const myAge = 12

console.log(myAge >= 20 ? '성인' : '미성년')

// 3. switch문 :

const color = 'black'

switch (color) {
    case 'red':
        console.log('i like red')
        break
    case 'yellow':
        console.log('i like yellow')
        break
    case 'blue':
        console.log('i like blue')
        break

    default:
        console.log('i dont know')
        break
}

//반복문
//조건이 참일때 실행

//while 문

let i = 3

while (i > 0) {
    console.log(i)
    i--
}
