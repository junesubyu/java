// for 문
// for(변수의초기화;조건;증감식)
// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// }

for (let j = 3; j > 0; j--) {
    console.log(`j는 ${j}`)
}

const day = ['월', '화', '수', '목', '금', '토', '일']
console.log(day.length)
console.log(day[4])
for (let index = 0; index < day.length; index++) {
    console.log(day[index])
}

// break, continue
// 0~10 >7까지만출력

for (let i = 0; i <= 10; i++) {
    if (i > 7) {
        break
    }
    console.log(i)
}

// 0~10 홀수만출력

for (let j = 0; j <= 10; j++) {
    if (j % 2 != 0) {
        continue
    }
    console.log(j)
}
