let burger  = document.querySelector('.burger'),
    menu    = document.querySelector('.mobile-menu'),
    close   = document.querySelector('.close')

if (menu.classList.contains('active')) {
    document.body.classList.add('lock')
} else {
    document.body.classList.remove('lock')
}

burger.addEventListener('click', () => {
    document.body.classList.add('lock')
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    document.body.classList.remove('lock')
    menu.classList.remove('active')
})

