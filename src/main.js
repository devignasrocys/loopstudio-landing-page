const PRIMARY_NAV = document.getElementById('primary-nav');
const BURGER_ICON = document.getElementById('burger-icon');
const CLOSE_ICON = document.getElementById('close-icon');
const MOBILE_NAV = document.getElementById('mobile-nav');

const toggleMobileMenu = () => {
    PRIMARY_NAV.classList.toggle('black-background');
    MOBILE_NAV.classList.toggle('disabled');
    CLOSE_ICON.classList.toggle('disabled');
    BURGER_ICON.classList.toggle('disabled');
}

BURGER_ICON.addEventListener('click', toggleMobileMenu)

CLOSE_ICON.addEventListener('click', toggleMobileMenu)