const bg = document.querySelector('.bg')

window.addEventListener('scroll', function () {
    const value = window.scrollY
    console.log(value)
    if (value <= 100) value = 100
    bg.style.clipPath = `circle(${value}px at 50% 50%)`
})
