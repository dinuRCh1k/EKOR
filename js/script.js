const hamburger = document.getElementById('hamburger');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const call = document.querySelector('.call');
const callTwo = document.querySelector('.call-2');
const headerCall = document.querySelector('.header__call');
const bg = document.querySelector('.bg');
const body = document.querySelector('.body');
const closeBtn = document.querySelector('.btn-close');
const closeBtnTwo = document.querySelector('.btn-close-2');
const closeBtnThree = document.querySelector('.btn-close-3')
const signIn = document.querySelector('.header__sign-in');
const signInBtn = document.querySelector('.sign-in');
const siginInBtnTwo = document.querySelector('.sign-in-2');

hamburger.addEventListener('change', function() {
    if (hamburger.checked) {
        main.style.display = 'none';
        footer.style.display = 'none';
    } else {
        main.style.display = '';
        footer.style.display = '';
    }
});
call.addEventListener('click', function() {
    headerCall.classList.remove('none');
    bg.classList.remove('none');
    body.style.overflow = 'hidden';
});
callTwo.addEventListener('click', function() {
    headerCall.classList.remove('none');
    bg.style.height = '1024px'
    bg.classList.remove('none');
});
closeBtn.addEventListener('click', function() {
    headerCall.classList.add('none');
    bg.classList.add('none');
    body.style.overflow = '';
});
closeBtnTwo.addEventListener('click', function() {
    signIn.classList.add('none');
    bg.classList.add('none');
    body.style.overflow = '';
});
closeBtnThree.addEventListener('click', function() {
    headerCall.classList.add('none');
    bg.classList.add('none');
    body.style.overflow = '';
});
signInBtn.addEventListener('click', function() {
    signIn.classList.remove('none');
    bg.classList.remove('none');
    body.style.overflow = 'hidden';
});
siginInBtnTwo.addEventListener('click', function() {
    signIn.classList.remove('none');
    bg.classList.remove('none');
    body.style.overflow = 'hidden';
});