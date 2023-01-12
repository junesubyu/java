// Object.js
//오브젝트
//-자바스크립트의 데이타
//-상태와 행동을 가진다
//phone 의 상태(properties)> color, size
//phone 이 행동(method) >  ring, take a picture, play music
// 형식 { 키 : 값 }

// 1.Object
const user = {
    name: 'Picaso',
    age: 30,
    email: 'picaso@gmail.com',
    works: [
        { id: 1, title: '게르니카', price: 25000, like: 400 },
        { id: 2, title: '아비뇽의 처녀들', price: 30000, like: 750 },
        { id: 3, title: '우는여인', price: 80000, like: 1200 },
    ],
    // login: function() {
    //     console.log('Picaso logged in!')
    // }
    login() {
        console.log('Picaso logged in!')
    },
    logout() {
        console.log('Picaso logged out!')
    },
    printWorks() {
        console.log('피카소의 대표작')
        console.log(this)
        this.works.forEach((work) => {
            console.log(
                `${work.id}. ${work.title}, ${work.price}, ${work.like}`
            )
        })
    },
}

console.log(user)

console.log(user.works[0].price)

//값수정
user.age = 32
console.log(user.age)

//타입확인
const aaa = 123456
console.log(typeof aaa)

user.printWorks()

// 2.Math Object
console.log(Math)
console.log(Math.PI)

//0~9사이의 정수출력
console.log(Math.floor(Math.random() * 10) + 1)

//배열을 랜덤하게 출력
const food = ['김밥', '라면', '삼겹살']

const randomNum = Math.floor(Math.random() * food.length)

console.log(randomNum)
console.log(food[randomNum])
