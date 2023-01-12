//Array 배열

//1. 배열만들기
const arr1 = new Array()
console.log(arr1)

const arr2 = ['1', '2', 3, '안녕', 0.5, true, false]
console.log(arr2)

const arr3 = [
    'abc',
    { model: 'apple', price: 50000 },
    { model: 'galaxy', price: 60000 },
]

console.log(arr3[2].model)

//배열의 출력

const books = ['html', 'css', 'javascript', 'photoshop', 'figma']

console.log(books) //북스전체

console.log(books.length) //북스의 길이,갯수

console.log(books[1]) //북스의 1번배열 0 1 2 3

console.log(books[books.length - 1]) //마지막배열출력

console.log('/////////////////')

// 3.반복출력
//for of

for (let i of books) {
    console.log(i)
}
console.log('//////////////////////')
// foreach
books.forEach((book) => {
    console.log(book)
})

//4.요소추가삭제
//뒤에추가
books.push('jqury')
console.log(books)

//앞에추가
books.unshift('react')
console.log(books)

//맨뒤에삭제

books.pop()
console.log(books)

//맨앞에삭제

books.shift()
console.log(books)

//지정한 위체어서 추가, 삭제

books.splice(2, 1, 'react', 'vue')

//배열검색

console.log(books.indexOf('react'))
console.log(books.includes('git'))
