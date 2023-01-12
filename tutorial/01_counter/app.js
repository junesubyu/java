// const price = document.getElementById('id')
const price = document.querySelector('.price')
const counter = document.querySelector('.counter')
const sum = document.querySelector('.sum')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const plus = document.querySelector('.plus')

const btns = document.querySelectorAll('button')
console.log(btns)

let num = 1
const unit_price = 12000

price.textContent = unit_price

counter.textContent = num

sum.textContent = unit_price * num

function paintTotalprice() {
    counter.textContent = num
    sum.textContent = unit_price * num
}

btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        console.log(e.target.className)

        if (e.target.className == 'plus') {
            num++
            paintTotalprice()
        } else if (e.target.className == 'minus') {
            num--
            if (num <= 1) num = 1
            paintTotalprice()
        } else {
            num = 1
            paintTotalprice()
        }
    })
})

// plus.addEventListener('click', function () {
//     num++
//     paintTotalprice()
// })
// minus.addEventListener('click', function () {
//     num--
//     if (num <= 1) num = 1

//     paintTotalprice()
// })

// reset.addEventListener('click', function () {
//     num = 1
//     paintTotalprice()
// })
