const dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelectorAll('textarea')

const userName = document.getElementById('userName')
const email = document.getElementById('email')
const message = document.getElementById('message')

console.log(inputs)

window.onload = function () {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            event.preventDefault()
            if (
                userName.value == '' ||
                email.value == '' ||
                message.value == ''
            ) {
                alert('이름, 이메일, 내용을 확인하세요')
                return
            }

            dimm.classList.add('active')
            // generate a five digit number for the contact_number variable
            this.contact_number.value = (Math.random() * 100000) | 0
            // these IDs from the previous steps
            emailjs.sendForm('service_zoax0mh', 'template_za3ay82', this).then(
                function () {
                    // alert('success!.')

                    console.log('SUCCESS!')
                    modal.classList.add('active')
                },
                function (error) {
                    // alert('Failed....')
                    console.log('FAILED...', error)
                }
            )
        })
}

closeBtn.addEventListener('click', function () {
    modal.classList.remove('active')
    dimm.classList.remove('active')

    textarea.forEach((item) => (item.value = ''))
    inputs.forEach((item) => (item.value = ''))
})
