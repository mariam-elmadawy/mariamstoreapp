const container = document.querySelector('.container');
const subBtn = document.querySelector('.btn');

const popup = document.querySelector('.popup');
const close = document.querySelector('.x')
const join = document.querySelector('.join')

subBtn.addEventListener('click', () => {
    container.classList.add('active')
    popup.classList.remove('active')
})

close.addEventListener('click', () => {
    container.classList.remove('active')
    popup.classList.add('active')
})

join.addEventListener('click', () => {
    container.classList.remove('active')
    popup.classList.add('active')
})