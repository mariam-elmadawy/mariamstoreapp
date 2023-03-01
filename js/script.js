const moreBtn = document.querySelector('.more');
const view = document.querySelector('.gallery .container')
moreBtn.addEventListener('click', () => {
    view.style.display = 'flex'

})


const subContainer = document.querySelector('.sub-card');
const subBtn = document.getElementById('sub-btn');

const popup = document.querySelector('.popup');
const close = document.querySelector('.x')
const join = document.querySelector('.join')

subBtn.addEventListener('click', () => {
    subContainer.classList.add('active')
    popup.classList.remove('active')
})

close.addEventListener('click', () => {
    subContainer.classList.remove('active')
    popup.classList.add('active')
})

join.addEventListener('click', () => {
    subContainer.classList.remove('active')
    popup.classList.add('active')
})


window.onload = function () {
    const infoCard = document.querySelector('.contact-info');
    const promoCard = document.querySelector('.promo-info');
    const aboutCard = document.querySelector('.abt-cards');
    const cardInfo = document.querySelector('.card-info')

    window.addEventListener('scroll', scrollEffect)

    function scrollEffect() {
        console.log(window.scrollY);
        if (window.scrollY >= 2000) {

            infoCard.style.opacity = '1';
            infoCard.style.transform = 'translateX(0px)';
            infoCard.style.transition = '1s ease-in-out'
        } else {
            infoCard.style.opacity = '0';
            infoCard.style.transform = 'translateX(-50px)';
        }
        if (window.scrollY >= 1400) {
            promoCard.style.opacity = '1';
            promoCard.style.transform = 'translateX(0px)';
            promoCard.style.transition = '1s ease-in-out'
        } else {
            promoCard.style.opacity = '0';
            promoCard.style.transform = 'translateX(-50px)';
        } if (window.scrollY >= 1100) {
            cardInfo.style.opacity = '1';
            cardInfo.style.transform = 'translateX(0px)';
            cardInfo.style.transition = '1s ease-in'
        } else {
            cardInfo.style.opacity = '0';
            cardInfo.style.transform = 'translateX(50px)';
        } if (window.scrollY >= 500) {

            aboutCard.style.opacity = '1';
            aboutCard.style.transform = 'translateX(0px)';
            aboutCard.style.transition = '1s linear'
        } else {
            aboutCard.style.opacity = '0';
            aboutCard.style.transform = 'translateX(-50px)';
        }


    }
    scrollEffect()
}