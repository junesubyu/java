const movie = document.querySelector('.movie')

window.addEventListener('scroll', function () {
  const value = window.scrollY
  if (value <= 100) value = 100
  movie.style.clipPath = `circle(${value}px at 50% 50%)`
})
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security