const DOM_STRINGS = {
    btn_hamburger: document.getElementById('hamburger-btn'),
    btn_hamburger_icon: document.getElementById('hamburger-icon'),
    btn_close_icon: document.getElementById('close-icon'),
    menu: document.getElementById('menu')
}

DOM_STRINGS.btn_hamburger.addEventListener('click', () =>{
    DOM_STRINGS.menu.classList.toggle('nav-mobile')
    DOM_STRINGS.btn_hamburger_icon.classList.toggle('display-hide')
    DOM_STRINGS.btn_close_icon.classList.toggle('display-hide')
})