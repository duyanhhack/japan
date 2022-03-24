const menuBtn = document.querySelector('.menu--btn')

menuBtn.addEventListener('click', () => {
    document.querySelector('.menu ul').classList.toggle('show')
    menuBtn.classList.toggle('close')
})

const goupBtn = document.querySelector('.goup')

goupBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})